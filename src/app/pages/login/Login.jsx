import React, {useContext} from "react";
import LoginHome from "./LoginHome";
import LoginForm from "./LoginForm";
import StoreContext from "../../store/Context";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Colors from "../../components/colors/Colors";


const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  overflow: hidden;
`;

const LoginFooter = styled.footer`
  background-color: ${Colors.navyBlue};
  color: white;
  text-align: center;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
    const {user} = useContext(StoreContext)
    const navigate = useNavigate()

    if (user) {
        navigate("/")
        return
    }

    return (
        <div style={
            {'height': '100vh'}
        }>
            <LoginHeader>
                <LoginHome/>
                <LoginForm/>
            </LoginHeader>
            <LoginFooter className="footer text-light">
                <div className={"footer-content"}>
                    <a href={"https://github.com/ribeirosaimon"} target={"_blank"} className={"text-light"}>
                        <i className="bi bi-github m-2"></i>
                    </a>
                    <a href={"https://www.linkedin.com/in/saimon-silva-a3a6b61a9/"} target={"_blank"}
                       className={"text-light"}>
                        <i className="bi bi-linkedin m-4"></i>
                    </a>
                    Motion <i className="bi bi-c-circle"></i>
                </div>
            </LoginFooter>
        </div>

    );
}

export default Login;
