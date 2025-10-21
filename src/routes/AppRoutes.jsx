import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";



// Doctor pages
import DoctorProfile from "../pages/Doctor/DoctorProfile";
import EditDoctor from "../pages/Doctor/EditDoctor";
import EditDoctor from "../pages/Doctor/EditDoctor";

// Patient pages
import PatientProfile from "../pages/Patient/PatientProfile";
import AddMeasurement from "../pages/Patient/AddMeasurement";
import SearchDoctor from "../pages/Patient/SearchDoctor";
import LandingPage from "../pages/Auth/LandingPage";



export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
    {/* صفحة افتراضية */}
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} /> 
    {/* صفحة افتراضية */}
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} /> 

    {/* باقي الصفحات */}
    <Route path="/doctor/profile" element={<DoctorProfile />} />
    <Route path="/doctor/profile/edit" element={<EditDoctor />} />
    <Route path="/patient/profile" element={<PatientProfile />} />
    <Route path="/patient/measurement/add" element={<AddMeasurement />} />
    <Route path="/patient/doctors/search" element={<SearchDoctor />} />
    {/* باقي الصفحات */}
    <Route path="/doctor/profile" element={<DoctorProfile />} />
    <Route path="/doctor/profile/edit" element={<EditDoctor />} />
    <Route path="/patient/profile" element={<PatientProfile />} />
    <Route path="/patient/measurement/add" element={<AddMeasurement />} />
    <Route path="/patient/doctors/search" element={<SearchDoctor />} />

    {/* Not Found */}
    <Route path="*" element={<h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>} />
    </Routes>

    {/* Not Found */}
    <Route path="*" element={<h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>} />

        </BrowserRouter>
    );
    }