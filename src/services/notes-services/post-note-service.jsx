import axios from "axios";

const postNoteService = (newNote, authToken) => 
    axios.post("/api/notes", { note: newNote }, { header: { authorization: authToken } });

export { postNoteService };