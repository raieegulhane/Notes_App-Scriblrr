import { v4 as uuid } from "uuid";

const initialNotesData = {
    allNotes: [],
    archivedNotes: [],
    deletedNotes: [],
    pinnedNotes: [],
    allLabels: [],
};

const noteReducer = (state, { type, payload }) => {
    const { allLabels } = state;

    switch(type) { 
        case "SET_NOTES": 
        return({ ...state, allNotes: payload });

        case "GET_NOTES": 
            return({ ...state, allNotes: payload });

        case "ADD_NEW_LABEL":
            return allLabels.findIndex(({ labelValue }) => labelValue === payload) < 0 ? 
                { ...state, allLabels: [ ...allLabels, {id: uuid(), labelValue: payload} ]} :
                {...state};

        case "DELETE_LABEL":
            return({ ...state, allLabels: allLabels.filter(({ id }) => id !== payload) });

        default:
            return({ ...initialNotesData });
    }    

    

}

export { initialNotesData, noteReducer };