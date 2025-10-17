import { useState } from "react";
import EditDoctor from "./pages/Doctor/EditDoctor/EditDoctor";
import DoctorProfile from "./pages/Doctor/DoctorProfile/DoctorProfile";

function App() {
  const [activePage, setActivePage] = useState("profile");

  return (
    <>
      {activePage === "profile" && (
        <DoctorProfile setActivePage={setActivePage} />
      )}
      {activePage === "edit" && <EditDoctor setActivePage={setActivePage} />}
    </>
  );
}

export default App;
