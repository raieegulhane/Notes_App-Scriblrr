import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/password-input";
import { useAuth } from "../../contexts/auth-context";
import { initialAuthValue } from "../../reducers/auth-reducer";
import { loginService } from "../../services/auth-services/login-service";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { isAuth, authError, authDispatch } = useAuth();

    useEffect(() => {
        isAuth && navigate(location?.state?.from ? location.state.from : "/home", { replace: true });
    }, []);

    const [loginCreds, setLoginCreds] = useState({email: "", password: ""});
    const { email, password } = loginCreds;

    const updateLoginCreds = (event) => {
        const { value, name } = event.target;
        setLoginCreds((loginCreds) => ({...loginCreds, [name]: value}));
    }

    const loginHandler = async (event, formData) => {
        event.preventDefault();

        try {
            const data = await loginService(formData);
            const { foundUser, encodedToken } = data;

            authDispatch(
                {
                    type: "AUTH_INIT",
                    payload: {
                        isAuth: true,
                        authUser: { ...foundUser },
                        authToken: encodedToken,
                        authError: null
                    }
                    
                }
            );

            localStorage.setItem("auth-token", encodedToken);
            localStorage.setItem("user-data", JSON.stringify(foundUser));

            navigate(location?.state?.from ? location.state.from : "/home" , {replace: true});
        } catch (error) {
            console.log("LOGIN ERROR", error);

            localStorage.removeItem("auth-token");
            localStorage.removeItem("user-data");

            authDispatch(
                {
                    type: "AUTH_INIT",
                    payload: {
                        ...initialAuthValue,
                        authError: "Problem occured while loging in"
                    } 
                }
            );

        }
    }

    return (
        <main className="auth-wrapper flex-col">
            <div className="container-auth">
                <h1 className="auth-heading txt-underline txt-center">Login</h1>

                <form className="signup-form">
                    <label className="auth-label" htmlFor="user-email">
                        Email:
                        <input
                            className="input input-sq input-br"
                            id="user-email"
                            name="email"
                            type="email"
                            placeholder="janedoe@example.com"
                            value={email}
                            required
                            onChange={updateLoginCreds}
                        />
                    </label>
                    <label className="auth-label" htmlFor="password">
                        Password:
                        <PasswordInput 
                            id={"password"}
                            name={"password"}
                            placeholder={"*******"}
                            value={password}
                            onChange={updateLoginCreds}
                        />
                    </label>

                    <button 
                        className="btn-block btn btn-sq btn-auth btn-primary"
                        disabled={!email || !password }
                        type="submit"
                        onClick={(event) => loginHandler(event, loginCreds)}
                    >
                        Continue
                    </button>

                    <button 
                        className="btn-block btn-outline btn btn-sq btn-auth"
                        type="submit"
                        onClick={(event) => loginHandler(event, {email: "janedoe@example.com", password: "janedoe123"})}
                    >
                        Continue as Guest
                    </button>

                    {authError && <p>{authError}</p>}
                </form>

                <p className="terms-declaration txt-sm txt-center">
                    By continuing, you agree to Scriblrr's <span className="txt-primary">Condition of Use</span> and <span className="txt-primary">Privacy Policy</span>.
                </p>
            </div>

            <p className="alt-auth-prompt txt-center">
                New user? <Link className="auth-redirect txt-bold txt-primary link-noDecoration" to="/signup">Sign Up</Link> here.
            </p>
        </main>
    );
}

export { Login };