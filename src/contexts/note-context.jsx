import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "../contexts";
import { initialNotesData, noteReducerFunction } from "../reducers";
import { getArchiveServices, getNoteService, getTrashService } from "../services";
import { useToast } from "../custom-hooks";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const { isAuth } = useAuth();
    const { showToast } = useToast();

    const [noteState, noteDispatch] = useReducer(noteReducerFunction, initialNotesData);

    const fetchAllNotes = async (token) => {
        try {
            const { data: { notes }} = await getNoteService(token);
            noteDispatch({ type: "GET_NOTES", payload: notes });
        } catch (error) {
            showToast("error", "Unable to fetch notes");
            console.log("GET_NOTE_ERROR: ", error);
        }
    }

    const fetchArchivedNotes = async (token) => {
        try {
            const { data: { archives }} = await getArchiveServices(token);
            noteDispatch({ type: "GET_ARCHIVES", payload: archives });
        } catch (error) {
            showToast("error", "Unable to fetch archived notes")
            console.log("GET_ARCHIVES_ERROR: ", error);
        }
    }

    const fetchTrashedNotes = async (token) => {
        try {
            const { data: { trash }} = await getTrashService(token);
            noteDispatch({ type: "GET_TRASH", payload: trash });
        } catch (error) {
            showToast("error", "Unable to fetch trashed notes")
            console.log("GET_TRASH_ERROR: ", error);
        }
    }

    useEffect(() => {
        const authToken = localStorage.getItem("auth-token");
        if(isAuth) {
            fetchAllNotes(authToken);
            fetchArchivedNotes(authToken);
            fetchTrashedNotes(authToken);
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