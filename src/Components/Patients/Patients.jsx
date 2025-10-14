import AllCard from "../AllCard/AllCard";
import "./Patients.css";
import { GoFileSubmodule } from "react-icons/go";

const patient = [
  {
    name: "Aisha Mohammed",
    status: "الحالة: ارتفاع ضغط الدم",
    info: " 2024-01-05",
    conf: "dang",
  },
  {
    name: "Aisha Mohammed",
    status: "الحالة: ارتفاع ضغط الدم",
    info: " 2024-01-05",
    conf: "dang",
  },
  {
    name: "Aisha Mohammed",
    status: "الحالة: ارتفاع ضغط الدم",
    info: " 2024-01-05",
    conf: "dang",
  },
  {
    name: "Aisha Mohammed",
    status: "الحالة: ارتفاع ضغط الدم",
    info: " 2024-01-05",
    conf: "no",
  },
  {
    name: "Aisha Mohammed",
    status: "الحالة: ارتفاع ضغط الدم",
    info: " 2024-01-05",
    conf: "dang",
  },
  {
    name: "Aisha Mohammed",
    status: "الحالة: ارتفاع ضغط الدم",
    info: " 2024-01-05",
    conf: "no",
  },
];
function Patients() {
  return (
    <div className="container_patient">
      <h2>Patients List</h2>
      {patient.map((patient, index) => (
        <AllCard
          key={index}
          name={patient.name}
          info={`اخر زياره : ${patient.info}`}
          status={patient.status}
          conf={patient.conf}
          bgColor={patient.conf === "dang" ? "#f9e8e1" : "#fef6c6"}
          color={"#3c7e5b"}
          SecIcon={GoFileSubmodule}
        />
      ))}
    </div>
  );
}
export default Patients;
