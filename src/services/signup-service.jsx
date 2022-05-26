import axios from "axios";

const signupService = async (userData) => {
    try {
        const response = await axios.post("/api/auth/signup", userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export { signupService };