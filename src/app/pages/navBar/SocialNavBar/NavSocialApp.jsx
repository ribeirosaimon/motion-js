import NavSocial from "./NavSocial";
import {useContext} from "react";
import StoreContext from "../../../store/Context";


const NavSocialApp = () => {
    const {user} = useContext(StoreContext)

    return(
        <NavSocial user={user}/>
    )
}

export default NavSocialApp