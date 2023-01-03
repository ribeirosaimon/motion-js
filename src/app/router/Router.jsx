import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRoute";

const Teste = () => {
    return (
        <div>
            AUTENTICADO
        </div>
    )
}

function MotionRouter() {
    return (
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path={"/teste"} element={<Teste/>} exact/>
                <Route path={"/"} element={<Teste/>} exact/>
            </Route>
        </Routes>

    );
}

export default MotionRouter;
