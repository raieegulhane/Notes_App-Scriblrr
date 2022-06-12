import axios from "axios";

const restoreTrashedNoteService = (trashedNote, authToken) => {
    const response = axios.post(
        `/api/trash/restore/${trashedNote._id}`,
        {}, 
        { headers: { authorization: authToken } }
    );

    return response;
}

export { restoreTrashedNoteService };