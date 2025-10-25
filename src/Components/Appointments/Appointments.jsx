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
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  return (
    <div className={styles.container_appointment}>
      <h2>Next Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        appointments.map((app, index) => (
          <AllCard
            key={index}
            name={app.userName || "Unknown Patient"}
            info={app.time || app.date || "No time"}
            status={app.serviceType || "Scheduled"}
            phone={app.userPhone || "No number"}
          />
        ))
      )}
    </div>
  );
}

export default Appointments;
