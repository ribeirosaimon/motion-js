import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../store/Context";
import NavBar from "../pages/navBar/NavBar";

const PrivateRoute = () => {
    const {token} = useContext(StoreContext)
    return (
        token
            ?
            <>
                <NavBar/>
                <Outlet/>
            </>
            :
            <Navigate to={"/login"}/>
    )
}
export default PrivateRoute