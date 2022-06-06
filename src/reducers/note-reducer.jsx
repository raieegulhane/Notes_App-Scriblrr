const initialNotesData = {
    allNotes: [],
    archivedNotes: [],
    deletedNotes: [],
    pinnedNotes: [],
    allLabels: [],
};

const noteReducer = (state, { type, payload }) => {
    const { allNotes, archivedNotes, deletedNotes, pinnedNotes, allLabels } = state;

    switch(type) {
        case "ADD_NEW_LABEL":
            return allLabels.findIndex((label) => label === payload) < 0 ? 
                { ...state, allLabels: [ ...allLabels, payload ]} :
                {...state};

        case "DELETE_LABEL":
            return({ ...state, allLabels: allLabels.filter((label) => label !== payload) });

        default:
            return({ ...initialNotesData });
    }    

    

}

export { initialNotesData, noteReducer };