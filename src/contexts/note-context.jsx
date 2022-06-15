import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "../contexts";
import { initialNotesData, noteReducerFunction } from "../reducers";
import { getNoteService } from "../services";
import { useToast } from "../custom-hooks";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const { isAuth } = useAuth();
    const { showToast } = useToast();

    const [noteState, noteDispatch] = useReducer(noteReducerFunction, initialNotesData);

    const fetchNotes = async (token) => {
        try {
            const { data: { notes }} = await getNoteService(token)
            noteDispatch({ type: "GET_NOTES", payload: notes});
        } catch (error) {
            showToast("error", "Unable to fetch notes");
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