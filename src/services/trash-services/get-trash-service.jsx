import axios from "axios";

const getTrashService = (authToken) => {
    const response = axios.get("/api/trash", {headers: {authorization: authToken}});
    return response;
}
    

export { getTrashService };