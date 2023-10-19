import {createContext} from "react";


const StoreContext = createContext({
    token: null,
    user:null,
    loggedRole:null,
    haveToValidateUser:false,
    setToken: () => {},
    setUser: () => {},
    setLoggedRole: () => {},
    setHaveToValidateUser: () => {},
})

export default StoreContext