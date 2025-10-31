
import './index.css';

import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
// import { db } from "../../firebase/firebaseConfig";

function App() {
  return (
    <>
      <AuthProvider><AppRoutes/></AuthProvider>
    </>
  );
}

export default App;
