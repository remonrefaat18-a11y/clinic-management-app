import styles from "./DoctorProfile.module.css";
import React, { useState } from "react";
import DoctorNavbar from "../../../Components/DoctorNavbar/DoctorNavbar";
import CriticalCards from "../../../Components/CriticalCards/CriticalCards";
import InfoCards from "../../../Components/InfoCards/InfoCards";
import SwitchBar from "../../../Components/SwitchBar/SwitchBar";
import OverviewCard from "../../../Components/OverviewCard/OverviewCard";
import Appointments from "../../../Components/Appointments/Appointments";
import Patients from "../../../Components/Patients/Patients";
import Schedule from "../../../Components/Schedule/Schedule";
import { useNavigate } from "react-router-dom";

function DoctorProfile() {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();
  return (
    <>
      <DoctorNavbar onEditClick={() => navigate("/doctor/profile/edit")} />;
      <div className={styles.doctorProfile}>
        <CriticalCards />
        <InfoCards />
        <SwitchBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={styles.tab}>
          {activeTab === "Overview" && <OverviewCard />}
          {activeTab === "Appointments" && <Appointments />}
          {activeTab === "patients" && <Patients />}
          {activeTab === "table" && <Schedule />}
        </div>
      </div>
    </>
  );
}
export default DoctorProfile;
