const initialComponentValues = {
    showTextEditor: false,
    showColorPalette: false,
    showFilterDropdown: false,
    showSortDropdown: false,
    showPriorityOptions: false,
    showLabelEditor: false,
    showLabelDeleteConfirmation: false,
}

const componentReducer = (state, action) => {
    const {
        showTextEditor,
        showColorPalette,
        showFilterDropdown,
        showSortDropdown,
        showPriorityOptions,
        showLabelEditor,
        showLabelDeleteConfirmation
    } = state;

    switch(action.type) {
        case "SHOW_TEXT_EDITOR":
            return({ ...state, showTextEditor: !showTextEditor });

        case "SHOW_COLOR_PALETTE":
            return({ ...state, showColorPalette: !showColorPalette });

        case "SHOW_FILTER_DROPDOWN":
            return({ ...state, showFilterDropdown: !showFilterDropdown });

        case "SHOW_SORT_DROPDOWN":
            return({ ...state, showSortDropdown: !showSortDropdown });

        case "SHOW_PRIORITY_OPTIONS":
            return({ ...state, showPriorityOptions: !showPriorityOptions });

        case "SHOW_LABEL_EDITOR": 
            return({ ...state, showLabelEditor: !showLabelEditor});

        case "SHOW_LABEL_DELETE_CONFIRMATION": 
            return({ ...state, showLabelDeleteConfirmation: !showLabelDeleteConfirmation});

        default: 
            return({ ...initialComponentValues });
        
    }
}

export { initialComponentValues, componentReducer };