import "../../pages/auth/auth.css";
import { useState } from "react";

const PasswordInput = ({id, name, placeholder, value, onChange}) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const passwordVisibilityHandler = (event) => {
        event.preventDefault();
        setPasswordVisibility(!passwordVisibility)
    }

    return (
        <div className="input-wt-btn-container input-sq input-br flex-row align_items-middle">
            <input
                className="input input-btn input-sq"
                id={id}
                name={name}
                type={passwordVisibility ? "text" : "password"}
                placeholder={placeholder}
                minLength="6"
                value={value}
                required
                onChange={onChange}
            />
            <button 
                className="btn-hide-password"
                onClick={passwordVisibilityHandler}    
            >
                {
                    passwordVisibility ? 
                    <i className="fa-solid fa-eye-slash icon-hide"></i> : 
                    <i className="fa-solid fa-eye icon-hide"></i>
                }
            </button>
        </div>
    );
}

export { PasswordInput };