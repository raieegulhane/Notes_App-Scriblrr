const initialFilterValues = {
    sortByPriority: "",
    sortByDate: "",
    filterByColor: "",
    filterByPriority: "",
};


const filterReducerFunction = (state, { type, payload }) => {
    switch(type) {
        case "FILTER_BY_PRIORITY":
            return({ ...state, filterByPriority: payload });

        case "FILTER_BY_COLOR":
            return({ ...state, filterByColor: payload });

        case "CLEAR_FILTERS":
            return({ ...state, filterByColor: "", filterByPriority: "" });

        case "SORT_BY_PRIORITY": 
            return({ ...state, sortByDate: payload });

        case "SORT_BY_DATE":
            return({ ...state, sortByPriority: payload });

        case "CLEAR_SORT": 
            return({ ...state, sortByPriority: "", sortByDate: ""});

        case "CLEAR_ALL":
            return({ ...initialFilterValues });

        default:
            return { initialFilterValues }
    }
}   

export { initialFilterValues, filterReducerFunction }