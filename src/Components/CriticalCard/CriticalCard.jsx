import styles from "./CriticalCard.module.css";
import { BsExclamationTriangle } from "react-icons/bs";

function CriticalCard({ style, name, time, message }) {
  return (
    <div className={styles.critical_card} style={style}>
      <div className={styles["icon-container"]}>
        <BsExclamationTriangle />
      </div>

      <div className={styles.card_data}>
        <h2>{name}</h2>
        <p>{message}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
export default CriticalCard;
