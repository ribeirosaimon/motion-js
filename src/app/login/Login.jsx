import React from "react";
import './Login.css';
import LoginHome from "./LoginHome";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <>
            <div className="login-page">
                {/*https://www.youtube.com/watch?v=FVxdFxxkdDI*/}
                <div className={"login-content-home"}>
                    <LoginHome/>
                </div>
                <div className={"login-content"}>
                    <LoginForm/>
                </div>

            </div>
            <div className="footer">Motion</div>
        </>

    );
}

export default Login;
