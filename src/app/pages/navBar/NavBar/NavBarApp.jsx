import React, {useContext, useEffect} from 'react';
import Navbar from "./NavBar";
import StoreContext from "../../../store/Context";
import {SuccessTool} from "../../../components/tooltip/Toll";

const NavBarApp = () => {
    const {setToken, setUser, user, loggedRole} = useContext(StoreContext)

    const onClickLogout = (event) => {
        event.preventDefault()
        setToken(null)
        setUser(null)
        SuccessTool("Bye Bye!")
    }

    return (
        <>
            <Navbar onClickLogout={onClickLogout} user={user} loggedRole={loggedRole}/>
        </>
    );
};

export default NavBarApp;
