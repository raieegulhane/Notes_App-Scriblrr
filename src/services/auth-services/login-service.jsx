import axios from "axios";

const loginService = async (loginCreds) => {
    try {
        const response = await axios.post("/api/auth/login", loginCreds);
        return response.data;
    } catch (error) {
        console.log("LOGIN ERROR: ", error);
    }
}

export { loginService };