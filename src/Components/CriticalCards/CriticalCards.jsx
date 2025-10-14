import CriticalCard from "../CriticalCard/CriticalCard";
import "./CriticalCards.css";
import { BsExclamationTriangle } from "react-icons/bs";

const style = {
  backgroundColor: "#fef2f2",
  border: "0.1rem solid red",
};
const styleTwo = {
  backgroundColor: "#fefbe8",
  border: "0.1rem solid #ffdd88",
};
const critical = [
  {
    name: "Aisha Mohammed",
    message: "الحالة: ارتفاع ضغط الدم",
    time: " 2024-01-05",
    style: style,
  },
  {
    name: "Aisha Mohammed",
    message: "الحالة: ارتفاع ضغط الدم",
    time: " 2024-01-05",
    style: styleTwo,
  },
  {
    name: "Aisha Mohammed",
    message: "الحالة: ارتفاع ضغط الدم",
    time: " 2024-01-05",
    style: styleTwo,
  },
];
function CriticalCards() {
  return (
    <div className="container">
      <h2>
        <span>
          <BsExclamationTriangle />
        </span>
        Critical alerts ( 3 )
      </h2>
      <div className="cards_container">
        {critical.map((critical, index) => (
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
