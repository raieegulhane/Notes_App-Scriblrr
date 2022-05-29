const initialAuthValue = {
    isAuth: false,
    authUser: {},
    authToken: "",
    authError: null
}

const authReducerFunction = (authState, {type, payload: { isAuth, authUser, authToken, authError }}) => {
    switch (type) {
        // for login or signup
        case "AUTH_INIT": 
            return (
                {
                    ...authState,
                    isAuth,
                    authUser,
                    authToken,
                    authError
                }
            );

        // for logout
        case "AUTH_CLEAR":
            return ({...initialAuthValue});

        default:
            return new Error ("Invalid inputs");
    }
} 

export { initialAuthValue, authReducerFunction };