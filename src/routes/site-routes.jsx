import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Archive, Labels, Trash, Login, Signup } from "../pages";
import { PrivateRoutes } from "../routes";

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/mockman" element={<Mockman />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/labels" element={<Labels />} />
                <Route path="/trash" element={<Trash />} />
            </Route>
        </Routes>
    );
}

export { SiteRoutes };