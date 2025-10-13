import "./CriticalCard.css";
import { BsExclamationTriangle } from "react-icons/bs";

function CriticalCard({ style, name, time, message }) {
  return (
    <div className="critical_card" style={style}>
      <div className="icon-container">
        <BsExclamationTriangle />
      </div>

      <div className="card_data">
        <h2>{name}</h2>
        <p>{message}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
export default CriticalCard;
