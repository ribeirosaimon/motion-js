import React from "react";
import "./LoginForm.css"

function LoginForm() {
    return (
        <div className="login-form">
            <div>
                <div className={"form-header"}>
                    <h3 className="fw-normal mb-3 pb-3" >Log in</h3>
                </div>
                <div className={"form-input"}>
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" className="form-control"/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input type="password" id="form2Example2" className="form-control"/>
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"
                                           checked/>
                                </div>
                            </div>

                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
