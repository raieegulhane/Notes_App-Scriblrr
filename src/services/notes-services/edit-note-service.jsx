import axios from "axios";

const editNoteService = (prevNote, authToken) => 
    axios.post(`/api/notes/${prevNote._id}`, { note: prevNote }, { headers: { authorization: authToken }});

export { editNoteService };