const initialAuthValue = {
    isAuth: false,
    user: {},
    encodedToken: ""
}

const authReducerFunction = (state, {type, payload}) => {
    switch (type) {
        // for login or signup
        case "AUTH_SUCCESS": 
            return (
                {
                    ...state,
                    isAuth: payload.encodedToken ? true : false,
                    user: payload.user,
                    encodedToken: payload.encodedToken
                }
            );

        // for logout
        case "AUTH_CLEAR":
            return (
                {
                    ...state,
                    isAuth: false,
                    user: {},
                    encodedToken: ""
                }
            );

        default:
            return {...state};
    }
} 

export { initialAuthValue, authReducerFunction };