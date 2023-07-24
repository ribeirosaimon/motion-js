import React, {useContext, useEffect} from 'react';
import Navbar from "./NavBar";
import StoreContext from "../../store/Context";
import {SuccessTool} from "../../components/tooltip/Toll";

const NavBarApp = () => {
    const {setToken} = useContext(StoreContext)

    const onClickLogout = (event) =>{
        event.preventDefault()
        SuccessTool("Bye Bye!")
        setToken(null)
    }

    return (
        <>
            <Navbar onClickLogout={onClickLogout} />
        </>
    );
};

export default NavBarApp;
