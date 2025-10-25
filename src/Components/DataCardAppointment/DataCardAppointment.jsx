import { useState, useEffect } from "react";
import styles from "./DataCardAppointment.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function DataCardAppointment({ doctorId }) {
  const [appointments, setAppointments] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!doctorId) return;

      try {
        const snap = await getDocs(collection(db, "appointments"));
        const allAppointments = snap.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((a) => a.doctorId === doctorId);

        // لو تحب فلترة اليوم، ممكن تستخدم:
        // const today = new Date().toISOString().split("T")[0];
        // const todayAppointments = allAppointments.filter(a => a.date === today);

        setAppointments(allAppointments); // أو todayAppointments
      } catch (err) {
        console.error("خطأ في جلب المواعيد:", err);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  const visibleAppointments = showAll ? appointments : appointments.slice(0, 6);

  return (
    <div className={styles.today_info_container}>
      <p className={styles.types}>جدول اليوم</p>

      {visibleAppointments.map((appointment, index) => (
        <Appointment
          key={index}
          name={appointment.userName || "غير معروف"}
          type={appointment.serviceType || "غير معروف"}
          time={appointment.time || "غير محدد"}
        />
      ))}

      {appointments.length > 6 && (
        <button className={styles.see_all} onClick={() => setShowAll(!showAll)}>
          {showAll ? " إخفاء الباقي" : `عرض الكل  (${appointments.length})`}
        </button>
      )}
    </div>
  );
}

function Appointment({ name, type, time }) {
  return (
    <div className={styles.container_card}>
      <div className={styles.today_info}>
        <p className={styles.names}>{name}</p>
        <p>{type}</p>
      </div>
      <p>{time}</p>
    </div>
  );
}

export default DataCardAppointment;
