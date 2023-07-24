import React, {useContext, useEffect, useState} from "react";
import StoreContext from "../../store/Context";
import {useNavigate} from "react-router-dom";
import {PromisseTool} from "../../components/tooltip/Toll";
import {HttpGetAxios, HttpLoginAxios} from "../../utils/HttpBasicAxios";
import Loading from "../LoadingPage/Loading";
import styled from "styled-components";
import Colors from "../../components/colors/Colors";

function initialState() {
    return {user: '', password: ''}
}

const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 95vh;
`;

const LoginFormDiv = styled.div`
  width: 60%;
  margin: 10%;
  padding: 10%;
  background-color: ${Colors.fadedBlue};
  border-radius: 10px;

`;
const LoginForm = () =>{
    const [values, setValues] = useState(initialState)
    const [isChecked, setIsChecked] = useState(false);
    const [acessToken, setAcessToken] = useState("")
    const [loading, setLoading] = useState(false)
    const {setToken, setUser} = useContext(StoreContext)

    useEffect(() => {
        if (acessToken){
            setToken(acessToken)
            setValues(initialState)
            HttpGetAxios("auth/whoami")
                .then(r => {
                    setUser("a")
                    setLoading(false)
                })
        }
    },[acessToken, loading, setToken, setUser])


    function onChange(event) {
        const {value, name} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const onSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        let promise = HttpLoginAxios(values.user, values.password)
            .then(r => {
                setAcessToken(r.data)
            })

        Promise.resolve(promise).then(() => {});

    }

    return (
        <LoginContent>
            {
                loading
                    ?
                    // <div className="spinner-border text-primary" role="status"/>
                    <Loading/>
                    :
                    <LoginFormDiv>
                        <div className={"form-header"}>
                            <h3 className="fw-normal mb-3 pb-3">Log in</h3>
                        </div>
                        <div className={"form-input"}>
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="user">User</label>
                                    <input type="text" id="user" name="user" className="form-control"
                                           onChange={onChange}
                                           value={values.user}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" className="form-control"
                                           onChange={onChange} value={values.password}/>
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="form2Example31"> Remember
                                                me </label>
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="form2Example31"
                                                   onChange={handleCheckboxChange}
                                                   checked={isChecked}/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <a href="src/app/components/login#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-primary btn-block mb-4" onClick={onSubmit}>Sign
                                    in
                                </button>

                                <div className="text-center">
                                    <p>Not a member? <a href="src/app/components/login#!">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </LoginFormDiv>
            }
        </LoginContent>
    );
}

export default LoginForm;
