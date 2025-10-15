import styles from "./ScheduleCard.module.css";
import { FaRegClock } from "react-icons/fa";
function ScheduleCard({ name, status, time }) {
  return (
    <div className={styles.schedule_card_container}>
      <div className={styles.card_right}>
        <FaRegClock className={styles.clock} />
        <div className={styles.card_right_info}>
          <p className={styles.name}>{name}</p>
          <p>{status}</p>
        </div>
      </div>
      <p className={styles.time}>{time}</p>
    </div>
  );
}
export default ScheduleCard;
