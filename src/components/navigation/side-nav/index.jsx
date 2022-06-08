import "./side-nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { initialAuthValue } from "../../../reducers";

const SideNav = () => {

    const navigate = useNavigate();
    const { authDispatch } = useAuth();

    const logoutHandler = () => {

        localStorage.removeItem("auth-token");
        localStorage.removeItem("user-data");

        authDispatch(
            {
                type: "AUTH_CLEAR",
                payload: {...initialAuthValue}
            }
        );

        navigate("/login");
    }

    const getActiveStyle = ({ isActive }) => {
        if (isActive) {
            return ({
                backgroundColor: "#e7eaff",
                color: "#7184ff" 
            });
        }
    }
    return (
        <nav className="container-sidenav flex-col flex_justify-sb flex_align-start">
            <div className="container-links flex-col flex_justify-center">
                <NavLink 
                    to="/home"
                    className="page-link flex-row flex_align-middle link-noDecoration" 
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-house"></i>
                    <h2>Home</h2>
                </NavLink>
                <NavLink 
                    to="/labels" 
                    className="page-link flex-row flex_align-middle link-noDecoration"
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-tag"></i>
                    <h2>Labels</h2>
                </NavLink>
                <NavLink 
                    to="/archive" 
                    className="page-link flex-row flex_align-middle link-noDecoration"
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-box-archive"></i>
                    <h2>Archive</h2>
                </NavLink>
                <NavLink 
                    to="/trash" 
                    className="page-link flex-row flex_align-middle link-noDecoration"
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-trash-can"></i>
                    <h2>Trash</h2>
                </NavLink>
            </div>
            <div className="user-operation flex-row flex_align-middle flex_justify-sa">
                <div className="user-avatar flex-row flex_align-middle">
                    <div className="avatar-icon avatar-circle avatar-sm avatar-border">                                   
                        <i className="fa-solid fa-user icon"></i>
                    </div>
                    <div>Username</div>
                </div>
                <button 
                    className="btn-icon btn-sq"
                    onClick={logoutHandler}
                >
                    <i className="fa-solid fa-arrow-right-from-bracket logout-icon"></i>
                </button>   
            </div>
        </nav>
    );
}

export { SideNav }