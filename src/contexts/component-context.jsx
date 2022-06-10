import { createContext, useContext, useReducer } from "react";
import { initialComponentValues, componentReducerFunction } from "../reducers";

const ComponentContext = createContext(initialComponentValues);

const ComponentProvider = ({ children }) => {
    const [componentState, componentDispatch] = useReducer(componentReducerFunction, initialComponentValues);

    return(
        <ComponentContext.Provider
            value={{ componentState, componentDispatch }}
        >
            { children }
        </ComponentContext.Provider>
    );
}

const useComponent = () => useContext(ComponentContext);

export { ComponentProvider, useComponent };