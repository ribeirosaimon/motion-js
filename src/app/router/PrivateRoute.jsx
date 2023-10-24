import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../store/Context";
import NavBarApp from "../pages/navBar/NavBar/NavBarApp";
import {getColors} from "../components/colors/Colors";

const PrivateRoute = () => {
    const {user, loggedRole} = useContext(StoreContext)
    const colors = getColors(loggedRole);

    return (
        user
            ?
            <>
                <NavBarApp colors={colors}/>
                <Outlet/>
            </>
            :
            <>
                <Navigate to={"/login"}/>
            </>
    )
}
export default PrivateRoute