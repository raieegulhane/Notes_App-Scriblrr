import axios from "axios";

const deleteNoteService = (note, authToken) => {
    const response = axios.delete(
        `/api/notes/${note._id}`, 
        { headers: { authorization: authToken }}
    );
    return response;
}

export { deleteNoteService };