import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../store/Context";
import NavBarApp from "../pages/navBar/NavBarApp";
import LoginHome from "../pages/login/LoginHome";

const PrivateRoute = () => {
    const {user} = useContext(StoreContext)
    console.log(user)
    return (
        user
            ?
            <>
                <NavBarApp/>
                <Outlet/>
            </>
            :
            <>
                <Navigate to={"/login"}/>
                {/*<LoginHome/>*/}
            </>
    )
}
export default PrivateRoute