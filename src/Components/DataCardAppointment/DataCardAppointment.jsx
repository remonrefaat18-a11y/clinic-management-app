import { useState } from "react";
import styles from "./DataCardAppointment.module.css";

const appointments = [
  { name: "Aisha Mohammed", type: "First reveal", time: "9:00 AM" },
  { name: "Ahmed Salem", type: "tracking", time: "9:30 AM" },
  { name: "Ahmed Mohamed Ali", type: "First reveal", time: "10:00 AM" },
  { name: "Fatima Hassan", type: "tracking", time: "10:30 AM" },
  { name: "Mohammed Salem", type: "First reveal", time: "11:00 AM" },
  { name: "Mona Ahmed", type: "consultation", time: "11:30 AM" },
  { name: "Sarah Ibrahim", type: "tracking", time: "12:00 PM" },
  { name: "Hassan Ali", type: "consultation", time: "12:30 PM" },
];

function DataCardAppointment() {
  const [showAll, setShowAll] = useState(false);

  const visibleAppointments = showAll ? appointments : appointments.slice(0, 6);

  return (
    <div className={styles.today_info_container}>
      <p className={styles.types}>Today's schedule</p>

      {visibleAppointments.map((appointment, index) => (
        <Appointment
          key={index}
          name={appointment.name}
          type={appointment.type}
          time={appointment.time}
        />
      ))}

      {appointments.length > 6 && (
        <button className={styles.see_all} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide extra" : `View all  (${appointments.length})`}
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
