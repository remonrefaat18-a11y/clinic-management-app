import { useState, useEffect } from "react";
import styles from "./DataCardPatient.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function DataCardPatient({ doctorId }) {
  const [patients, setPatients] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

            const patientMeasurements = measurementsData.filter(
              (m) => m.userId === id
            );
            let status = "Normal follow-up";
            let conditions = [];

            for (const m of patientMeasurements) {
              const systolic = parseFloat((m.systolic || "").toString().trim());
              const diastolic = parseFloat(
                (m.diastolic || "").toString().trim()
              );
              const sugar = parseFloat((m.sugar || "").toString().trim());
              const heartRate = parseFloat(
                (m.heartRate || "").toString().trim()
              );

              // ضغط الدم
              if (systolic > 170 || diastolic > 110) {
                status = "Critical";
                if (!conditions.includes("High blood pressure"))
                  conditions.push("High blood pressure");
                break;
              } else if (
                (systolic > 140 && systolic <= 170) ||
                (diastolic > 90 && diastolic <= 110)
              ) {
                if (!conditions.includes("High blood pressure"))
                  conditions.push("High blood pressure");
                status = status !== "Critical" ? "Needs follow-up" : status;
              }

              // السكر
              if (sugar > 250) {
                status = "Critical";
                if (!conditions.includes("High sugar"))
                  conditions.push("High sugar");
                break;
              } else if (sugar > 180 && sugar <= 250) {
                if (!conditions.includes("High sugar"))
                  conditions.push("High sugar");
                status = status !== "Critical" ? "Needs follow-up" : status;
              }

              // النبض
              if (heartRate < 50 || heartRate > 120) {
                status = "Critical";
                if (!conditions.includes("Irregular heart rate"))
                  conditions.push("Irregular heart rate");
                break;
              } else if (
                (heartRate < 60 || heartRate > 100) &&
                !conditions.includes("Irregular heart rate")
              ) {
                conditions.push("Irregular heart rate");
                status = status !== "Critical" ? "Needs follow-up" : status;
              }
            }

            return {
              name: user.name,
              condition: conditions.join(", ") || "Normal",
              status,
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

  const visiblePatients = showAll ? patients : patients.slice(0, 6);

  return (
    <div className={styles.patient_info_container}>
      <p className={styles.type}>Patients' condition</p>

      {visiblePatients.map((patient, index) => (
        <Patient
          key={index}
          name={patient.name}
          condition={patient.condition}
          status={patient.status}
        />
      ))}

      {patients.length > 6 && (
        <button className={styles.see_all} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide extra " : `View all  (${patients.length})`}
        </button>
      )}
    </div>
  );
}

function Patient({ name, condition, status }) {
  const backgroundColor =
    status === "Critical"
      ? "#fef2f2"
      : status === "Needs follow-up"
      ? "#fefbe8"
      : "#e0f7fa";

  return (
    <div className={styles.container_card}>
      <div className={styles.patient_info}>
        <p>{name}</p>
        <p>{condition}</p>
      </div>
      <p style={{ backgroundColor }}>{status}</p>
    </div>
  );
}

export default DataCardPatient;
