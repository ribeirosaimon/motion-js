import React from "react";
import './Login.css';
import LoginHome from "./LoginHome";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <>
            <div className="login-page">
                <div className={"login-content-home"}>
                    <LoginHome/>
                </div>
                <div className={"login-content"}>
                    <LoginForm/>
                </div>

            </div>
            <div className="footer text-light">
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
            </div>
        </>

    );
}

export default Login;
