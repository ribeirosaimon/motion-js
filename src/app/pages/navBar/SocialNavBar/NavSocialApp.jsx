import NavSocial from "./NavSocial";
import {useContext} from "react";
import StoreContext from "../../../store/Context";


const NavSocialApp = (user) => {
    const { loggedRole} = useContext(StoreContext)
    return(
        <NavSocial user={user} loggedRole={loggedRole}/>
    )
}

export default NavSocialApp