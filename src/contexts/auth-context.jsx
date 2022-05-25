import { createContext, useContext, useReducer } from "react";
import { initialAuthValue, authReducerFunction } from "../reducers/auth-reducer";

const AuthContext = createContext({ initialAuthValue });

const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducerFunction, initialAuthValue);

    return (
        <AuthContext.Provider value={{ authState, authDispatch}}>{ children }</AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }