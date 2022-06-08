import axios from "axios";

const getArchiveServices = (authToken) => {
    const response = axios.get(
        `/api/archives`,
        { headers: { authorization: authToken } }
    );

    return response;
}

export { getArchiveServices };