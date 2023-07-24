import {createContext} from "react";


const StoreContext = createContext({
    token: null,
    user:null,
    setToken: () => {},
    setUser: () => {},
})

export default StoreContext