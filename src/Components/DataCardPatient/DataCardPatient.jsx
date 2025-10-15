import { useState } from "react";
import styles from "./DataCardPatient.module.css";

const patients = [
  {
    name: "Ahmed Mohammed",
    condition: "High blood pressure",
    status: "Critical",
  },
  {
    name: "Fatima Hassan",
    condition: "General follow-up",
    status: "Established",
  },
  {
    name: "Mohammed Salem",
    condition: "Diabetes",
    status: "Needs follow-up",
  },
];

function DataCardPatient() {
  const [showAll, setShowAll] = useState(false);

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
    status === "Critical" || status === "Established" ? "#f9e8e1" : "#fef6c6";
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
