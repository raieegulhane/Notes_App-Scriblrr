import { createContext, useContext, useReducer } from "react";
import { initialNotesData, noteReducer } from "../reducers/note-reducer";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [noteState, noteDispatch] = useReducer(noteReducer, initialNotesData);

    return(
        <NoteContext.Provider value={{ noteState, noteDispatch }}>
            { children }
        </NoteContext.Provider>
    );
}

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };