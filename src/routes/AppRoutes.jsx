import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// Doctor pages
import DoctorProfile from "../pages/Doctor/DoctorProfile/DoctorProfile";
import EditDoctor from "../pages/Doctor/EditDoctor/EditDoctor";
// Patient pages
import PatientProfile from "../pages/Patient/PatientProfile";
import AddMeasurement from "../pages/Patient/AddMeasurement";
import SearchDoctor from "../pages/Patient/SearchDoctor";
import LandingPage from "../pages/Auth/LandingPage";

import ProtectedRoute from "../components/ProtectedRoute"; // ✅ استيراد مكون الحماية

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحة افتراضية */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* صفحات الطبيب - محمية */}
        <Route
          path="/doctor/profile"
          element={
            <ProtectedRoute allowedRole="doctor">
              <DoctorProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/profile/edit"
          element={
            <ProtectedRoute allowedRole="doctor">
              <EditDoctor />
            </ProtectedRoute>
          }
        />

        {/* صفحات المريض - محمية */}
        <Route
          path="/patient/profile"
          element={
            <ProtectedRoute allowedRole="patient">
              <PatientProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/measurement/add"
          element={
            <ProtectedRoute allowedRole="patient">
              <AddMeasurement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/doctors/search"
          element={
            <ProtectedRoute allowedRole="patient">
              <SearchDoctor />
            </ProtectedRoute>
          }
        />

        {/* Not Found */}
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );

}

