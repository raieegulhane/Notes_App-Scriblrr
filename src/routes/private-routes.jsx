import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { SideNav } from "../components";

const PrivateRoutes = () => {
    const { isAuth } = useAuth();
    const location = useLocation();

    return (
        isAuth ? 
            (
                <main className="main-content-wrapper flex-row">
                    <SideNav />
                    <Outlet />
                </main>    
            ) : (
                <Navigate to="/login" state={{from: location}} replace/>
            )
    );
}

export { PrivateRoutes };