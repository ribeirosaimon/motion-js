import React, {useContext, useEffect} from 'react';
import Navbar from "./NavBar";
import StoreContext from "../../../store/Context";
import {SuccessTool} from "../../../components/tooltip/Toll";
import {getColors} from "../../../components/colors/Colors";

const NavBarApp = ({toValidate, colors}) => {
    const {setToken, setUser, setHaveToValidateUser, user, loggedRole} = useContext(StoreContext)

    const onClickLogout = (event) => {
        event.preventDefault()
        setToken(null)
        setUser(null)
        setHaveToValidateUser(false)

        SuccessTool("Bye Bye!")
    }

    return (
        <>
            <Navbar onClickLogout={onClickLogout} user={user} loggedRole={loggedRole} toValidateEmail={toValidate} colors={colors}/>
        </>
    );
};

export default NavBarApp;
