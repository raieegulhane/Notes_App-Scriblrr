import { createContext, useContext, useReducer } from "react";
import { initialNotesData, noteReducer } from "../reducers/note-reducer";
import { useAuth } from "../contexts/auth-context";
import { getNoteService } from "../services/notes-services/get-note-service";
import { useEffect } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const { isAuth } = useAuth();

    const [noteState, noteDispatch] = useReducer(noteReducer, initialNotesData);

    const fetchNotes = async (token) => {
        try {
            const { data: { notes }} = await getNoteService(token)
            noteDispatch({ type: "GET_NOTES", payload: notes});
        } catch (error) {
            console.log("GET_NOTE_ERROR: ", error);
        }
    }

    useEffect(() => {
        const authToken = localStorage.getItem("auth-token");
        if(isAuth) {
            fetchNotes(authToken);
        }
    }, [isAuth]);

    return(
        <NoteContext.Provider value={{ noteState, noteDispatch }}>
            { children }
        </NoteContext.Provider>
    );
}

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };