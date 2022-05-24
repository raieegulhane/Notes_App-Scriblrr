import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Archive, Labels, Trash, Login, Signup } from "../pages";

const SiteRoutes = () => {
    <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
}

export default SiteRoutes;