import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";

// Doctor pages
import DoctorProfile from "../pages/Doctor/DoctorProfile";
import EditDoctorInfo from "../pages/Doctor/EditDoctorInfo";

// Patient pages
import PatientProfile from "../pages/Patient/PatientProfile";
import AddMeasurement from "../pages/Patient/AddMeasurement";
import SearchDoctor from "../pages/Patient/SearchDoctor";
import BookDoctor from "../pages/Patient/BookDoctor";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            {/* ========== Auth Routes ========== */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 

            {/* ========== Doctor Routes ========== */}
            <Route path="/doctor/profile" element={<DoctorProfile />} />
            <Route path="/doctor/profile/edit" element={<EditDoctor/>} />

            {/* ========== Patient Routes ========== */}
            <Route path="/patient/profile" element={<PatientProfile />} />
            <Route path="/patient/measurement/add" element={<AddMeasurement />} />
            <Route path="/patient/doctors/search" element={<SearchDoctor />} />
            <Route path="/patient/doctors/book/:doctorId" element={<BookDoctor />} />

            {/* ========== Not Found Route ========== */}
            <Route path="*" element={<h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>} />
        </Routes>
        </BrowserRouter>
    );
    }
