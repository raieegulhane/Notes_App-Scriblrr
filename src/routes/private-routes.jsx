import "../../src/styles/main.css"
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { SideNav, AddNoteButton } from "../components";

const PrivateRoutes = () => {
    const { isAuth } = useAuth();

    return (
        isAuth ? 
            (
                <main className="wrapper-main grid">
                    <SideNav />
                    <Outlet />
                    <AddNoteButton />
                </main>    
            ) : (
                <Navigate to="/login"/>
            )
    );
}

export { PrivateRoutes };