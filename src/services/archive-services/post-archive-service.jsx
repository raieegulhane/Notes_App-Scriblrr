import axios from "axios"; 

const postArchiveService = (currentNote, authToken) => {
    const response = axios.post(
        `/api/notes/archives/${currentNote._id}`, 
        { note: currentNote },
        { headers: { authorization: authToken } }
    );
    return response;
}

export { postArchiveService };