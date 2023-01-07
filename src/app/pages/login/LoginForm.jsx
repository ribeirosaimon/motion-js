import React, {useContext, useEffect, useState} from "react";
import "./LoginForm.css"
import StoreContext from "../../store/Context";
import {useNavigate} from "react-router-dom";
import {PromisseTool} from "../../components/tooltip/Toll";
import {HttpLoginAxios} from "../../utils/HttpBasicAxios";
import Loading from "../LoadingPage/Loading";

function initialState() {
    return {user: '', password: ''}
}


function LoginForm() {
    const [values, setValues] = useState(initialState)
    const [acessToken, setAcessToken] = useState("")
    const [loading, setLoading] = useState(false)
    const {setToken} = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (acessToken) {
            setToken(acessToken)
            return navigate("/")
        }
        setValues(initialState)
    }, [acessToken, navigate, setToken])

    function onChange(event) {
        const {value, name} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(event) {
        event.preventDefault()
        setLoading(true)
        let promise = HttpLoginAxios(values.user, values.password)
            .then(r => {
                setAcessToken(r.data.token)
                setLoading(false)
            })

        PromisseTool(promise)
            .catch(() => setLoading(false))

    }

    return (
        <div className="login-form">
            {
                loading
                    ?
                    // <div className="spinner-border text-primary" role="status"/>
                    <Loading/>
                    :
                    <div>
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
                                                   checked/>
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
                    </div>
            }
        </div>
    );
}

export default LoginForm;
