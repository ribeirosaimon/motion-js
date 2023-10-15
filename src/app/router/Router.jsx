import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import StoreProvider from "../store/Provider";
import MotionContent from "../pages/content/MotionContent";
import ProfilePage from "../pages/profile/ProfilePage";
import Watchlist from "../pages/watchList/Watchlist";
import BuyStock from "../pages/watchList/movement/BuyStock";
import SellStock from "../pages/watchList/movement/SellStock";
import StocksCache from "../pages/stocksCache/StocksCache";


const MotionRouter = () => {

    return (
        <StoreProvider>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path={"/"}
                           element={<MotionContent infoContent={<ProfilePage/>}/>} exact/>
                    <Route path={"/user/my-watchlist"}
                           element={<MotionContent infoContent={<Watchlist/>}/>} exact/>
                    <Route path={"/user/my-watchlist/buy"}
                           element={<MotionContent infoContent={<BuyStock/>}/>} exact/>
                    <Route path={"/user/my-watchlist/sell"}
                           element={<MotionContent infoContent={<SellStock/>}/>} exact/>
                    <Route path={"/admin/stocks"}
                           element={<MotionContent infoContent={<StocksCache/>}/>} exact/>
                    <Route path={"/email-validade"}
                           element={<div> DEEEEU </div>} exact/>
                </Route>
            </Routes>
        </StoreProvider>
    );
}

export default MotionRouter;
