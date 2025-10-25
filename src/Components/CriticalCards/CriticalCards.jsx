import { useEffect, useState } from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebaseConfig";
import CriticalCard from "../CriticalCard/CriticalCard";
import styles from "./CriticalCards.module.css";

const styleRed = {
  backgroundColor: "#fef2f2",
  border: "0.1rem solid #e58185",
};
const styleYellow = {
  backgroundColor: "#fefbe8",
  border: "0.1rem solid #ffdd88",
};

function CriticalCards({ onCriticalCountChange }) {
  const [criticalPatients, setCriticalPatients] = useState([]);
  const [doctorId, setDoctorId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setDoctorId(user.uid);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!doctorId) return;

    const fetchCriticalData = async () => {
      try {
        const appointmentsSnapshot = await getDocs(
          collection(db, "appointments")
        );
        const doctorAppointments = appointmentsSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((a) => a.doctorId === doctorId);

        const doctorPatientIds = doctorAppointments.map((a) => a.userId);

        const measurementsSnapshot = await getDocs(
          collection(db, "measurements")
        );
        const measurementsData = measurementsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const usersSnapshot = await getDocs(collection(db, "users"));
        const usersMap = {};
        usersSnapshot.forEach((userDoc) => {
          usersMap[userDoc.id] = userDoc.data();
        });

        const criticals = measurementsData
          .filter((m) => doctorPatientIds.includes(m.userId))
          .map((m) => {
            const systolic = parseFloat((m.systolic || "").toString().trim());
            const diastolic = parseFloat((m.diastolic || "").toString().trim());
            const sugar = parseFloat((m.sugar || "").toString().trim());
            const heartRate = parseFloat((m.heartRate || "").toString().trim());
            const user = usersMap[m.userId] || {};

            let message = "";
            let style = null;

            if (
              systolic > 170 ||
              diastolic > 110 ||
              sugar > 250 ||
              heartRate < 50 ||
              heartRate > 120
            ) {
              message = "🚨 حالة حرجة جدًا!";
              style = styleRed;
            } else if (
              (systolic > 140 && systolic <= 170) ||
              (diastolic > 90 && diastolic <= 110) ||
              (sugar > 180 && sugar <= 250)
            ) {
              message = "⚠️ حالة تحتاج متابعة";
              style = styleYellow;
            }

            if (style) {
              return {
                name: user.name || "مريض غير معروف",
                message,
                time: m.date || "",
                style,
              };
            }
            return null;
          })
          .filter(Boolean);

        setCriticalPatients(criticals);

        if (onCriticalCountChange) onCriticalCountChange(criticals.length);
      } catch (error) {
        console.error("Error fetching critical data:", error);
      }
    };

    fetchCriticalData();
  }, [doctorId, onCriticalCountChange]);

  return (
    <div className={styles.container}>
      <h2>
        <span>
          <BsExclamationTriangle />
        </span>
        Critical alerts ( {criticalPatients.length} )
      </h2>

      <div className={styles.cards_container}>
        {criticalPatients.map((critical, index) => (
          <CriticalCard
            key={index}
            style={critical.style}
            message={critical.message}
            time={critical.time}
            name={critical.name}
          />
        ))}
      </div>
    </div>
  );
}

export default CriticalCards;
