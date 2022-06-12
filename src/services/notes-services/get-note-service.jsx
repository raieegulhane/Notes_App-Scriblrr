import axios from "axios";

const getNoteService = (authToken) => {
    const response = axios.get("/api/notes", {headers: {authorization: authToken}});
    return response;
}
    

export { getNoteService };