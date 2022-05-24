import "./side-nav.css";
import { NavLink } from "react-router-dom";
import SiteRoutes from "../../../routes/site-routes"

const SideNav = () => {
    const getActiveStyle = ({ isActive }) => {
        if (isActive) {
            return ({
                backgroundColor: "#e7eaff",
                color: "#7184ff" 
            });
        }
    }
    return (
        <main className="main-content-wrapper flex-row">
            <nav className="container-sidenav flex-col flex_justify-sb flex_align-start">
                <div className="container-links flex-col flex_justify-center">
                    <NavLink 
                        to="/home" 
                        className="page-link flex-row flex_align-middle link-noDecoration" 
                        style={getActiveStyle}
                    >
                        <i class="fa-solid fa-house"></i>
                        <h2>Home</h2>
                    </NavLink>
                    <NavLink 
                        to="/labels" 
                        className="page-link flex-row flex_align-middle link-noDecoration"
                        style={getActiveStyle}
                    >
                        <i class="fa-solid fa-tag"></i>
                        <h2>Labels</h2>
                    </NavLink>
                    <NavLink 
                        to="/archive" 
                        className="page-link flex-row flex_align-middle link-noDecoration"
                        style={getActiveStyle}
                    >
                        <i class="fa-solid fa-box-archive"></i>
                        <h2>Archive</h2>
                    </NavLink>
                    <NavLink 
                        to="/trash" 
                        className="page-link flex-row flex_align-middle link-noDecoration"
                        style={getActiveStyle}
                    >
                        <i class="fa-solid fa-trash-can"></i>
                        <h2>Trash</h2>
                    </NavLink>
                </div>
                <div className="user-operation flex-row flex_align-middle flex_justify-sa">
                    <div className="user-avatar flex-row flex_align-middle">
                        <div class="avatar-icon avatar-circle avatar-sm avatar-border">                                   
                            <i class="fa-solid fa-user icon"></i>
                        </div>
                        <div>Username</div>
                    </div>
                    <button class="btn-icon btn-sq">
                        <i class="fa-solid fa-arrow-right-from-bracket logout-icon"></i>
                    </button>   
                </div>
            </nav>
            <div className="container-main">
              <SiteRoutes />
            </div>
        </main>
    );
}

export { SideNav }