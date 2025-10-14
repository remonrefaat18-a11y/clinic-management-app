import AllCard from "../AllCard/AllCard";
import "./Appointments.css";
import { FaRegMessage } from "react-icons/fa6";
const appoin = [
  {
    name: "Aisha Mohammed",
    status: "First reveal",
    info: "9:00 AM",
    conf: "conf",
  },
  {
    name: "Aisha Mohammed",
    status: "First reveal",
    info: "9:00 AM",
    conf: "not",
  },
  {
    name: "Aisha Mohammed",
    status: "First reveal",
    info: "9:00 AM",
    conf: "conf",
  },
  {
    name: "Aisha Mohammed",
    status: "First reveal",
    info: "9:00 AM",
    conf: "conf",
  },
  {
    name: "Aisha Mohammed",
    status: "First reveal",
    info: "9:00 AM",
    conf: "not",
  },
  {
    name: "Aisha Mohammed",
    status: "First reveal",
    info: "9:00 AM",
    conf: "conf",
  },
];

function Appointments() {
  return (
    <div className="container_appointment">
      <h2>Next Appoientments</h2>
      {appoin.map((appoin, index) => (
        <AllCard
          key={index}
          name={appoin.name}
          info={appoin.info}
          status={appoin.status}
          conf={appoin.conf}
          bgColor={appoin.conf === "conf" ? "#0a0000" : "#555"}
          color={appoin.conf === "conf" ? "fffffff" : "#555"}
          SecIcon={FaRegMessage}
        />
      ))}
    </div>
  );
}
export default Appointments;
