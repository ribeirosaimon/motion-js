import React, {useContext, useEffect, useState} from "react";
import NavBarApp from "../navBar/NavBar/NavBarApp";
import {Colors} from "../../components/colors/Colors";
import styled from "styled-components";
import {HttpGetAxios, HttpPostAxios} from "../../utils/HttpBasicAxios";
import StoreContext from "../../store/Context";
import {DangerTool} from "../../components/tooltip/Toll";
import {useNavigate} from "react-router-dom";
import Loading from "../loadingPage/Loading";

const EmailContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InputContainer = styled.div`
  padding: 10px;
`;

const ValidateEmail = () => {
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)
    const {setHaveToValidateUser, setUser, setLoggedRole} = useContext(StoreContext)


    function sendEmailCode() {
        const body = {"code": code}
        HttpPostAxios("/auth/validate", body)
            .then(r => {
                setLoading(true)
                HttpGetAxios("auth/whoami")
                    .then(r => {
                        if (r.data.status === "EMAIL_SYNC") {
                            setHaveToValidateUser(true)
                        } else {
                            setUser(r.data);
                            setLoggedRole(r.data.roles[0].name)
                            setLoading(false)
                            setHaveToValidateUser(false)
                        }
                    })
            }).catch(e => {
                setLoading(false)
            DangerTool(e.response.data.message)
        })
    }

    return (
        <>
            {
                loading ? <Loading/> :
                    <div>
                        <NavBarApp toValidate={true} colors={Colors}/>
                        <EmailContainer>
                            <div>
                                <h1>
                                    Put your email code here!
                                </h1>
                            </div>
                            <InputContainer>
                                <input type="text" id="quantidade" name="quantidade"
                                       onChange={e => setCode(e.target.value)}/>
                            </InputContainer>
                            <input type="submit" value="Submit" onClick={sendEmailCode}/>
                        </EmailContainer>

                    </div>
            }
        </>

    )
}
export default ValidateEmail