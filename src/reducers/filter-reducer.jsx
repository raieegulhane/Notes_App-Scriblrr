const initialFilterValues = {
    filterByPriority: { HIGH: false, MEDIUM: false, LOW: false },
    filterByColor: "",
    sortByPriority: "",
    sortByDate: "",
};


const filterReducerFunction = (state, { type, payload }) => {
    const { filterByPriority } = state;
    switch(type) {
        // case "FILTER_BY_PRIORITY":
        //     return({ ...state, filterByPriority: payload });

        case "PRIORITY_HIGH":
            return({
                ...state,
                filterByPriority: { ...filterByPriority, HIGH: !filterByPriority.HIGH}
            });

        case "PRIORITY_MEDIUM":
            return({
                ...state,
                filterByPriority: { ...filterByPriority, MEDIUM: !filterByPriority.MEDIUM}
            });

            case "PRIORITY_LOW":
        return({
            ...state,
            filterByPriority: { ...filterByPriority, LOW: !filterByPriority.LOW}
        });

        case "FILTER_BY_COLOR":
            return({ ...state, filterByColor: payload });

        case "CLEAR_COLOR_FILTER":
            return({ ...state, filterByColor: "" });

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