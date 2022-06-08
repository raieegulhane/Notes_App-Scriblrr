import axios from "axios";

const restoreArchiveService = (archivedNote, authToken) => {
    const response = axios.post(
        `/api/archives/restore/${archivedNote._id}`,
        {},
        { headers: { authorization: authToken }}
    );

    return response;
}

export { restoreArchiveService };