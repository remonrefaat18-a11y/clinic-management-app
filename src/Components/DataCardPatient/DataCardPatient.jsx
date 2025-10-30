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
            let status = "متابعة عادية";
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
                status = "حرج";
                if (!conditions.includes("ارتفاع ضغط الدم"))
                  conditions.push("ارتفاع ضغط الدم");
                break;
              } else if (
                (systolic > 140 && systolic <= 170) ||
                (diastolic > 90 && diastolic <= 110)
              ) {
                if (!conditions.includes("ارتفاع ضغط الدم"))
                  conditions.push("ارتفاع ضغط الدم");
                status = status !== "حرج" ? "يحتاج متابعة" : status;
              }

              // السكر
              if (sugar > 250) {
                status = "حرج";
                if (!conditions.includes("سكر عالي جدًا"))
                  conditions.push("سكر عالي جدًا");
                break;
              } else if (sugar > 180 && sugar <= 250) {
                if (!conditions.includes("سكري يحتاج متابعة"))
                  conditions.push("سكري يحتاج متابعة");
                status = status !== "حرج" ? "يحتاج متابعة" : status;
              }

              // النبض
              if (heartRate < 50 || heartRate > 120) {
                status = "حرج";
                if (!conditions.includes("معدل ضربات غير طبيعي"))
                  conditions.push("معدل ضربات غير طبيعي");
                break;
              } else if (
                (heartRate < 60 || heartRate > 100) &&
                !conditions.includes("معدل ضربات غير طبيعي")
              ) {
                conditions.push("معدل ضربات غير طبيعي");
                status = status !== "حرج" ? "يحتاج متابعة" : status;
              }
            }

            return {
              name: user.name,
              condition: conditions.join(", ") || "طبيعي",
              status,
            };
          })
          .filter(Boolean);

        setPatients(patientsData);
      } catch (err) {
        console.error("حدث خطأ أثناء جلب بيانات المرضى:", err);
      }
    };

    fetchPatients();
  }, [doctorId]);

  const visiblePatients = showAll ? patients : patients.slice(0, 6);

  return (
    <div className={styles.patient_info_container}>
      <p className={styles.type}>حالة المرضى</p>

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
          {showAll ? "إخفاء الباقي" : `عرض الكل (${patients.length})`}
        </button>
      )}
    </div>
  );
}

function Patient({ name, condition, status }) {
  const backgroundColor =
    status === "حرج"
      ? "#fef2f2"
      : status === "يحتاج متابعة"
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
