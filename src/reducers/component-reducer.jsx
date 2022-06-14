const initialComponentValues = {
    showTextEditor: false,
    showColorPalette: false,
    showFilterDropdown: false,
    showSortDropdown: false,
    showPriorityOptions: false,
    showLabelEditor: false,
    showLabelDeleteConfirmation: false,
}

const componentReducerFunction = (state, action) => {
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
            return({ ...state, 
                showTextEditor: !showTextEditor,
                showColorPalette: false,
                showLabelEditor: false,
                showPriorityOptions: false,
                showFilterDropdown: false,
                showSortDropdown: false
            });

        case "SHOW_COLOR_PALETTE":
            return({ 
                ...state, 
                showColorPalette: !showColorPalette,
                showLabelEditor: false,
                showPriorityOptions: false
            });

        case "SHOW_FILTER_DROPDOWN":
            return({ 
                ...state, 
                showFilterDropdown: !showFilterDropdown,
                showSortDropdown: false
            });

        case "SHOW_SORT_DROPDOWN":
            return({ 
                ...state, 
                showSortDropdown: !showSortDropdown,
                showFilterDropdown: false
            });

        case "SHOW_PRIORITY_OPTIONS":
            return({ 
                ...state, 
                showPriorityOptions: !showPriorityOptions,
                showColorPalette: false,
                showLabelEditor: false
            });

        case "SHOW_LABEL_EDITOR": 
            return({ 
                ...state, 
                showLabelEditor: !showLabelEditor,
                showColorPalette: false,
                showPriorityOptions: false
            });

        case "SHOW_LABEL_DELETE_CONFIRMATION": 
            return({ ...state, showLabelDeleteConfirmation: !showLabelDeleteConfirmation});

        default: 
            return({ ...initialComponentValues });
        
    }
}

export { initialComponentValues, componentReducerFunction };