import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import StoreProvider from "../store/Provider";
import MotionContent from "../pages/content/MotionContent";
import ProfilePage from "../pages/profile/ProfilePage";
import PortfolioApp from "../pages/portfolio/PortfolioApp";
import StocksCache from "../pages/stocksCache/StocksCache";
import BuyStock from "../pages/portfolio/movement/BuyStock";
import SellStock from "../pages/portfolio/movement/SellStock";


const MotionRouter = () => {
    return (
        <StoreProvider>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path={"/"}
                           element={<MotionContent infoContent={<ProfilePage/>}/>} exact/>
                    <Route path={"/user/my-portfolio"}
                           element={<MotionContent infoContent={<PortfolioApp/>}/>} exact/>
                    <Route path={"/user/my-portfolio/buy"}
                           element={<MotionContent infoContent={<BuyStock/>}/>} exact/>
                    <Route path={"/user/my-portfolio/sell"}
                           element={<MotionContent infoContent={<SellStock/>}/>} exact/>
                    <Route path={"/admin/stocks"}
                           element={<MotionContent infoContent={<StocksCache/>}/>} exact/>
                </Route>
            </Routes>
        </StoreProvider>
    );
}

export default MotionRouter;
