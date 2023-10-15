import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../store/Context";
import NavBarApp from "../pages/navBar/NavBar/NavBarApp";
import ValidateEmail from "../pages/login/ValidateEmail";

const PrivateRoute = () => {
    const {user} = useContext(StoreContext)
    if (user != null && user.status === "EMAIL_SYNC"){
        return <ValidateEmail/>
    }

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
            </>
    )
}
export default PrivateRoute