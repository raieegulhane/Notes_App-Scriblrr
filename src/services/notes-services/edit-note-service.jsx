import axios from "axios";

const editNoteService = (prevNote, authToken) => {
    const response = axios.post(`/api/notes/${prevNote._id}`, { note: prevNote }, { headers: { authorization: authToken }});
    return response;
}

export { editNoteService };