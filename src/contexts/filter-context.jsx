import { createContext, useContext, useReducer } from "react";
import {  initialFilterValues, filterReducerFunction } from "../reducers";

const FilterContext = createContext(initialFilterValues);

const FilterProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(filterReducerFunction, initialFilterValues);

    return(
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            { children }
        </FilterContext.Provider>
    );
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };