import { useEffect, useState } from "react";
import AllCard from "../AllCard/AllCard";
import styles from "./Appointments.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function Appointments({ doctorId }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!doctorId) return;

    const fetchAppointments = async () => {
      try {
        const appointmentsSnap = await getDocs(collection(db, "appointments"));
        const doctorAppointments = appointmentsSnap.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((a) => a.doctorId === doctorId)
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setAppointments(doctorAppointments);
      } catch (err) {
        console.error("خطأ في جلب المواعيد:", err);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  return (
    <div className={styles.container_appointment}>
      <h2>المواعيد القادمة</h2>
      {appointments.length === 0 ? (
        <p>لم يتم العثور على مواعيد</p>
      ) : (
        appointments.map((app, index) => (
          <AllCard
            key={index}
            name={app.userName || "مريض غير معروف"}
            info={app.time || app.date || "غير محدد"}
            status={app.serviceType || "غير محدد"}
            phone={app.userPhone || "لا يوجد"}
          />
        ))
      )}
    </div>
  );
}

export default Appointments;
