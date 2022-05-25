import "./auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PasswordInput } from "../../components/password-input";

const Signup = () => {

    const [userData, setUserData] = useState(
        {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    );
    const { name, email, password, confirmPassword } = userData;

    const updateUserData = (event) => {
        const {name, value} = event.target;
        setUserData((userData) => ({...userData, [name]: value}));
    }

    return (
        <main className="auth-wrapper flex-col">
            <div className="container-auth">
                <h1 className="auth-heading txt-underline txt-center">Sign Up</h1>

                <form className="signup-form">
                    <label className="auth-label" htmlFor="user-name">
                        Name:
                        <input
                            className="input input-sq input-br"
                            id="user-name"
                            name="name"
                            type="text"
                            placeholder="Jane Doe"
                            value={name}
                            required
                            onChange={(event) => updateUserData(event)}
                        />
                    </label>
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
                            onChange={(event) => updateUserData(event)}
                        />
                    </label>
                    <label className="auth-label" htmlFor="new-password">
                        Password:
                        <PasswordInput 
                            id={"new-password"}
                            name={"password"}
                            placeholder={"Atleast 6 charachters"}
                            value={password}
                            onChange={(event) => updateUserData(event)}
                        />
                    </label>
                    <label className="auth-label" htmlFor="confirm-password">
                        Confirm Password:
                        <PasswordInput 
                            id={"new-password"}
                            name={"confirmPassword"}
                            placeholder={"Re-enter password"}
                            value={confirmPassword}
                            onChange={(event) => updateUserData(event)}
                        />
                    </label>

                    <p className="password-validate txt-center">
                        {
                            password !== confirmPassword ?
                            "Passwords do not match." :
                            ""
                        }
                    </p>

                    <button 
                        className="btn-block btn btn-sq btn-auth btn-primary"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>

                <p className="terms-declaration txt-sm txt-center">
                    By continuing, you agree to Scriblrr's <span className="txt-primary">Condition of Use</span> and <span className="txt-primary">Privacy Policy</span>.
                </p>
            </div>

            <p className="alt-auth-prompt txt-center">
                New user? <Link className="auth-redirect txt-bold txt-primary link-noDecoration" to="/login">Login</Link> into your account.
            </p>

        </main>
    );

}

export { Signup };