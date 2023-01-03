import React, {useState} from "react";
import "./LoginForm.css"

function initialState() {
    return {user: '', password: ''}
}

function LoginForm() {
    const [values, setValues] = useState(initialState)

    function onChange(event) {
        console.log(values)
        const {value, name} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <div className="login-form">
            <div>
                <div className={"form-header"}>
                    <h3 className="fw-normal mb-3 pb-3">Log in</h3>
                </div>
                <div className={"form-input"}>
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="user">User</label>
                            <input type="text" id="user"  name="user" className="form-control" onChange={onChange} value={values.user}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control" onChange={onChange} value={values.password}/>
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
                                <a href="src/app/components/login#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="src/app/components/login#!">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
