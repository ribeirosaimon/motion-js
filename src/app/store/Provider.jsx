import Context from "./Context";
import useStorage from "../utils/useStorage";

const StoreProvider = ({children}) => {

    const [token, setToken] = useStorage("token")
    const [user, setUser] = useStorage("user")
    const [loggedRole, setLoggedRole] = useStorage("loggedRole")
    const [haveToValidateUser, setHaveToValidateUser] = useStorage("haveToValidateUser")

    return (
        <Context.Provider
            value={{
                token,
                setToken,
                user,
                setUser,
                loggedRole,
                setLoggedRole,
                haveToValidateUser,
                setHaveToValidateUser
            }}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider