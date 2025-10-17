import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRole }) {
    const { currentUser, userData } = useAuth();

    // لو المستخدم مش مسجل دخول
    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    // لو المستخدم حاول يدخل على صفحة مش ليه
    if (allowedRole && userData?.role !== allowedRole) {
        return userData.role === "doctor" 
        ? <Navigate to="/doctor/profile" replace /> 
        : <Navigate to="/patient/profile" replace />;
    }

    return children;
    }

export default ProtectedRoute;
