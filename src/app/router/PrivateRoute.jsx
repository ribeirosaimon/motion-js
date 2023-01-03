import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../store/Context";

const PrivateRoute = () => {
    const {token} = useContext(StoreContext)
    console.log(token)

    return (
        token
            ?
            <Outlet/>
            :
            <Navigate to={"/login"}/>
    )
}
export default PrivateRoute