import NavSocial from "./NavSocial";
import {useContext} from "react";
import StoreContext from "../../../store/Context";


const NavSocialApp = () => {
    const { loggedRole, user} = useContext(StoreContext)
    return(
        <NavSocial user={user} loggedRole={loggedRole}/>
    )
}

export default NavSocialApp