import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import StoreProvider from "../store/Provider";
import MotionContent from "../pages/content/MotionContent";
import ProfilePage from "../pages/profile/ProfilePage";
import PortfolioApp from "../pages/portfolio/PortfolioApp";


const MotionRouter = () => {
    return (
        <StoreProvider>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path={"/"}
                           element={<MotionContent infoContent={<ProfilePage/>}/>} exact/>
                    <Route path={"/my-portfolio"}
                           element={<MotionContent infoContent={<PortfolioApp/>}/>} exact/>
                </Route>
            </Routes>
        </StoreProvider>
    );
}

export default MotionRouter;
