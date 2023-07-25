import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../store/Context";
import NavBarApp from "../pages/navBar/NavBar/NavBarApp";

const PrivateRoute = () => {
    const {user} = useContext(StoreContext)
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