import "./side-nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { initialAuthValue } from "../../../reducers";
import { useToast } from "../../../custom-hooks";

const SideNav = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const { authUser: { firstName, lastName }, authDispatch } = useAuth();

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
        showToast("success", "Logout successful.")
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
                    <h3>Home</h3>
                </NavLink>
                <NavLink 
                    to="/labels" 
                    className="page-link flex-row flex_align-middle link-noDecoration"
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-tag"></i>
                    <h3>Labels</h3>
                </NavLink>
                <NavLink 
                    to="/archive" 
                    className="page-link flex-row flex_align-middle link-noDecoration"
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-box-archive"></i>
                    <h3>Archive</h3>
                </NavLink>
                <NavLink 
                    to="/trash" 
                    className="page-link flex-row flex_align-middle link-noDecoration"
                    style={getActiveStyle}
                >
                    <i className="fa-solid fa-trash-can"></i>
                    <h3>Trash</h3>
                </NavLink>
            </div>
            <div className="user-operation flex-row flex_align-middle">
                <div className="user-avatar flex-row flex_align-middle">
                    <div className="avatar-icon avatar-circle avatar-sm avatar-border">                                   
                        <i className="fa-solid fa-user icon"></i>
                    </div>
                    <div>{`${firstName} ${lastName}`}</div>
                </div>
                <button 
                    className="logout-btn btn-icon btn-sq"
                    onClick={logoutHandler}
                >
                    <i className="fa-solid fa-arrow-right-from-bracket logout-icon"></i>
                </button>   
            </div>
        </nav>
    );
}

export { SideNav }