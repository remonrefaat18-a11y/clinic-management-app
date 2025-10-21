import { useAuth } from "../../context/AuthContext";


export default function PatientProfile() {

    const { currentUser } = useAuth();

    return (
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser.email}</p>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}

