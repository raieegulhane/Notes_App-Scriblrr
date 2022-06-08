import { v4 as uuid } from "uuid";

const initialNotesData = {
    allNotes: [],
    archivedNotes: [],
    trashedNotes: [],
    pinnedNotes: [],
    allLabels: [],
    isEditing: false,
    isEditingId: ""
};

const noteReducer = (state, { type, payload }) => {
    const { notes, archives, trash } = payload;
    const { allLabels } = state;

    switch(type) { 
        case "SET_NOTES": 
        return({ ...state, allNotes: payload });

        case "GET_NOTES": 
            return({ ...state, allNotes: payload });

        case "EDIT_NOTE": 
            return({ ...state, isEditing: payload.editNoteStatus, isEditingId: payload.editNoteId });

        case "SET_ARCHIVED_NOTES":
            return({ ...state, allNotes: notes, archivedNotes: archives });

        case "SET_TRASHED_NOTES": 
            return({ ...state, allNotes: notes, archivedNotes: archives, trashedNotes: trash });

        case "PERMANANT_DELETE_NOTE": 
            return({ ...state, trashedNotes: trash });

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