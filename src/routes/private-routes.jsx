import "../../src/styles/main.css"
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";
import { SideNav } from "../components";

const PrivateRoutes = () => {
    const location = useLocation();
    const { isAuth } = useAuth();

    return (
        isAuth ? 
            (
                <main className="wrapper-main grid">
                    <SideNav />
                    <Outlet />
                </main>    
            ) : (
                <Navigate to="/login" state={{ from: location }} replace/>
            )
    );
}

export { PrivateRoutes };