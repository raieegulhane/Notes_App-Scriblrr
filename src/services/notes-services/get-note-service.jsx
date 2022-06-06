import axios from "axios";

const getNoteService = (authToken) => 
    axios.get("/api/notes", {header: {authorization: authToken}});

export { getNoteService };