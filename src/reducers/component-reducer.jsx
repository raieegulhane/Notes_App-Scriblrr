const initialComponentValues = {
    showTextEditor: false,
    showColorPalette: false,
    showFilterDropdown: false,
    showSortDropdown: false,
    showPriorityOptions: false
}

const componentReducer = (state, action) => {
    switch(action.type) {
        case "SHOW_TEXT_EDITOR":
            return({ ...state, showTextEditor: !state.showTextEditor });

        case "SHOW_COLOR_PALETTE":
            return({ ...state, showColorPalette: !state.showColorPalette });

        case "SHOW_FILTER_DROPDOWN":
            return({ ...state, showFilterDropdown: !state.showFilterDropdown });

        case "SHOW_SORT_DROPDOWN":
            return({ ...state, showSortDropdown: !state.showSortDropdown });

            case "SHOW_PRIORITY_OPTIONS":
                return({ ...state, showPriorityOptions: !state.showPriorityOptions });

        default: 
            return({ ...initialComponentValues });
        
    }
}

export { initialComponentValues, componentReducer };