import {createContext} from "react";


const StoreContext = createContext({
    token: null,
    user:null,
    loggedRole:null,
    setToken: () => {},
    setUser: () => {},
    setLoggedRole: () => {},
})

export default StoreContext