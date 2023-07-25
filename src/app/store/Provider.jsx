import Context from "./Context";
import useStorage from "../utils/useStorage";

const StoreProvider = ({children}) => {

    const [token, setToken] = useStorage("token")
    const [user, setUser] = useStorage("user")
    const [loggedRole, setLoggedRole] = useStorage("loggedRole")

    return (
        <Context.Provider
            value={{
                token,
                setToken,
                user,
                setUser,
                loggedRole,
                setLoggedRole
            }}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider