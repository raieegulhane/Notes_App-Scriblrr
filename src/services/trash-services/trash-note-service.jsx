import axios from "axios";

const trashNoteService = (note, authToken) => {
    const response = axios.post(
        `/api/notes/trash/${note._id}`,
        { note: note },
        { headers: { authorization: authToken }}
    );

    return response;
}

export { trashNoteService };