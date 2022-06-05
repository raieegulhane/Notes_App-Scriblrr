import { createContext, useContext, useReducer } from "react";
import { initialComponentValues, componentReducer } from "../reducers/component-reducer";

const ComponentContext = createContext(initialComponentValues);

const ComponentProvider = ({ children }) => {
    const [componentState, componentDispatch] = useReducer(componentReducer, initialComponentValues);

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