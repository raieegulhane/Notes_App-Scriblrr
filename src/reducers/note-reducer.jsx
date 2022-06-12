import { v4 as uuid } from "uuid";

const initialNotesData = {
    allNotes: [],
    archivedNotes: [],
    trashedNotes: [],
    allLabels: [],
    isEditing: false,
    isEditingId: "",
    searchResults: {
        searching: false,
        searchedNotes: []
    }
};

const noteReducerFunction = (state, { type, payload }) => {
    const { notes, archives, trash, editNoteStatus, editNoteId } = payload;
    const { allNotes, allLabels } = state;

    switch(type) { 
        case "SET_NOTES": 
        return({ ...state, allNotes: payload });

        case "GET_NOTES": 
            return({ ...state, allNotes: payload });

        case "EDIT_NOTE": 
            return({ ...state, isEditing: editNoteStatus, isEditingId: editNoteId });

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

        case "SET_SEARCHED_NOTES":
            return({
                ...state,
                searchResults: {
                    searching: payload ? true : false,
                    searchedNotes: [ ...allNotes ].filter((note) => note.noteTitle.includes(payload) || note.noteBody.includes(payload))
                }
            })

        case "DELETE_LABEL":
            return({ ...state, allLabels: allLabels.filter(({ id }) => id !== payload) });

        default:
            return({ ...initialNotesData });
    }    
}

export { initialNotesData, noteReducerFunction };