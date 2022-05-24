import { createContext, useContext } from "react";

const AuthContext = createContext({initialAuthValue});

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider>{ children }</AuthContext.Provider>
    );
}

const