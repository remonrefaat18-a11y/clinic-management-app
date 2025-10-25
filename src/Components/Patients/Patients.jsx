import { useState, useEffect } from "react";
import styles from "./Patients.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import AllCard from "../AllCard/AllCard";
import { GoFileSubmodule } from "react-icons/go";

function Patients({ doctorId }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    if (!doctorId) return;

    const fetchPatients = async () => {
      try {
        const appointmentsSnap = await getDocs(collection(db, "appointments"));
        const doctorAppointments = appointmentsSnap.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((a) => a.doctorId === doctorId);

        const patientIds = [
          ...new Set(doctorAppointments.map((a) => a.userId)),
        ];

        const measurementsSnap = await getDocs(collection(db, "measurements"));
        const measurementsData = measurementsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const usersSnap = await getDocs(collection(db, "users"));
        const usersMap = {};
        usersSnap.forEach((userDoc) => {
          usersMap[userDoc.id] = userDoc.data();
        });

        const patientsData = patientIds
          .map((id) => {
            const user = usersMap[id];
            if (!user) return null;

            const patientMeasurements = measurementsData
              .filter((m) => m.userId === id)
              .sort((a, b) => new Date(b.date) - new Date(a.date));

            if (patientMeasurements.length === 0) return null;

            const lastMeasurement = patientMeasurements[0];
            const systolic = parseFloat(
              (lastMeasurement.systolic || "").toString().trim()
            );
            const diastolic = parseFloat(
              (lastMeasurement.diastolic || "").toString().trim()
            );
            const sugar = parseFloat(
              (lastMeasurement.sugar || "").toString().trim()
            );
            const heartRate = parseFloat(
              (lastMeasurement.heartRate || "").toString().trim()
            );

            let condition = "Normal follow-up";
            if (systolic > 170 || diastolic > 110)
              condition = "ارتفاع ضغط الدم";
            else if (sugar > 250) condition = "سكري عالي جدًا";
            else if (sugar > 180) condition = "سكري يحتاج متابعة";
            else if (heartRate < 50 || heartRate > 120)
              condition = "معدل ضربات غير طبيعي";

            return {
              name: user.name || "مريض غير معروف",
              condition,
              lastVisit: lastMeasurement.lastVisit || "",
            };
          })
          .filter(Boolean);

        setPatients(patientsData);
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    };

    fetchPatients();
  }, [doctorId]);

  return (
    <div className={styles.container_patient}>
      <h2>Patients List</h2>
      {patients.map((patient, index) => (
        <AllCard
          key={index}
          name={patient.name}
          info={`اخر زيارة: ${patient.lastVisit || "Undetermined"} `}
          status={`الحالة: ${patient.condition}`}
          SecIcon={GoFileSubmodule}
          phone={patient.userPhone || "No number"}
        />
      ))}
    </div>
  );
}

export default Patients;
