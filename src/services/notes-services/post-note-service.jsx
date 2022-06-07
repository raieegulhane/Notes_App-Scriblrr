import axios from "axios";

const postNoteService = (newNote, authToken) => {
    const response = axios.post("/api/notes", { note: newNote }, { headers: { authorization: authToken } });
    return response;
} 
export { postNoteService };