import styles from "./DoctorProfile.module.css";
import React, { useState, useEffect } from "react";
import DoctorNavbar from "../../../Components/DoctorNavbar/DoctorNavbar";
import CriticalCards from "../../../Components/CriticalCards/CriticalCards";
import InfoCards from "../../../Components/InfoCards/InfoCards";
import SwitchBar from "../../../Components/SwitchBar/SwitchBar";
import OverviewCard from "../../../Components/OverviewCard/OverviewCard";
import Appointments from "../../../Components/Appointments/Appointments";
import Patients from "../../../Components/Patients/Patients";
import { useNavigate } from "react-router-dom";

//  Firestore imports
import { db, auth } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function DoctorProfile() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [doctorName, setDoctorName] = useState("");
  const [doctorId, setDoctorId] = useState(null);
  const [criticalCount, setCriticalCount] = useState(0);

  const navigate = useNavigate();

  //  Get current logged-in doctor ID
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setDoctorId(user.uid);
      } else {
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  //  Fetch doctor data from Firestore
  useEffect(() => {
    const fetchDoctorData = async () => {
      if (!doctorId) return;
      try {
        const docRef = doc(db, "users", doctorId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setDoctorName(data.name || "Doctor");
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  return (
    <>
      <DoctorNavbar
        onEditClick={() => navigate("/doctor/profile/edit")}
        name={doctorName}
      />

      <div className={styles.doctorProfile}>
        <CriticalCards onCriticalCountChange={setCriticalCount} />
        <InfoCards doctorId={doctorId} criticalCount={criticalCount} />

        <SwitchBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className={styles.tab}>
          {activeTab === "Overview" && <OverviewCard doctorId={doctorId} />}
          {activeTab === "Appointments" && <Appointments doctorId={doctorId} />}
          {activeTab === "patients" && <Patients doctorId={doctorId} />}
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
