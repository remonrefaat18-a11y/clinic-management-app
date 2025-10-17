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
function DoctorProfile({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <DoctorNavbar setActivePage={setActivePage} />;
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
