import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {
        const loggedInResponse = await axios.get("http://localhost:3000/users/loggedIn");
        setLoggedIn(loggedInResponse.data);
    }

    useEffect(() => {
        getLoggedIn()
    }, [])
 
    const contextValue = {loggedIn, getLoggedIn}
    return ( 
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
     );
}

AuthContextProvider.propTypes = {
    children: PropTypes.node,
 };

export default AuthContextProvider