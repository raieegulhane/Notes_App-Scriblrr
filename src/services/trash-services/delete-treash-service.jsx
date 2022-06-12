import axios from "axios";

const deleteTrashService = (trashedNote, authToken) => {
    const response = axios.delete(
        `api/trash/delete/${trashedNote._id}`,
        { headers: { authorization: authToken } }
    );

    return response;
}

export { deleteTrashService };