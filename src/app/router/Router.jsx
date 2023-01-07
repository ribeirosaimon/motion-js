import React, {useContext, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import StoreProvider from "../store/Provider";
import {HttpGetAxios} from "../utils/HttpBasicAxios";
import Loading from "../pages/LoadingPage/Loading";
import StoreContext from "../store/Context";


function MotionRouter() {
    const [loading, setLoading] = useState(true)
    const [teste, setTest] = useState("")
    const {token} = useContext(StoreContext)

    useEffect(() => {
        let promise = HttpGetAxios("/ready").then(r => {
            console.log(r.data)
            setTest(r.data)
            setLoading(false)
        });
    }, [])
    const Teste = () => {
        return (
            loading ?
                <Loading/>
                :
                <div>
                    <strong>Meu Nome: </strong>{teste.myName}
                    <br/>
                    <strong>Minha Role: </strong>{teste.role}
                </div>
        )
    }

    return (
        <StoreProvider>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path={"/teste"} element={<Teste/>} exact/>
                    <Route path={"/home"} element={<Teste/>} exact/>
                </Route>
            </Routes>
        </StoreProvider>
    );
}

export default MotionRouter;
