import { createContext, useContext, useReducer } from "react";
import { initialAuthValue, authReducerFunction } from "../reducers";

const AuthContext = createContext({ initialAuthValue });

const AuthProvider = ({ children }) => {
    const getInitialAuthVAlues = () => {
        const token = localStorage.getItem("auth-token");
        const userData = JSON.parse(localStorage.getItem("user-data"));

        if (token) {
            return {
                isAuth: true,
                authUser: userData,
                authToken: token,
                authError: null
            }
        }

        return { ...initialAuthValue };
    }

    const [authState, authDispatch] = useReducer(authReducerFunction, getInitialAuthVAlues());

    return (
        <AuthContext.Provider value={{ ...authState, authDispatch}}>
            { children }
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }