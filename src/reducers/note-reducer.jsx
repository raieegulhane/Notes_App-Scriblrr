import { v4 as uuid } from "uuid";

const initialNotesData = {
    allNotes: [],
    archivedNotes: [],
    deletedNotes: [],
    pinnedNotes: [],
    allLabels: [],
    isEditing: false,
    isEditingId: ""
};

const noteReducer = (state, { type, payload }) => {
    const { allLabels } = state;

    switch(type) { 
        case "SET_NOTES": 
        return({ ...state, allNotes: payload });

        case "GET_NOTES": 
            return({ ...state, allNotes: payload });

        case "EDIT_NOTE": 
            return({ ...state, isEditing: payload.editNoteStatus, isEditingId: payload.editNoteId });

        case "DELETE_NOTE": 
            return({ ...state, allNotes: payload.notes, deletedNotes: payload.trash });

        case "SET_ARCHIVE_NOTE":
            return({ ...state, allNotes: payload.notes, archivedNotes: payload.archives });

        case "DELETE_ARCHIVED_NOTE":
            return({ ...state, archivedNotes: payload.archives, deletedNotes: payload.trash})

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