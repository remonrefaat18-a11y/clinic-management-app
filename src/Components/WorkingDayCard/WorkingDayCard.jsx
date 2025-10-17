import DarkToggle from "../DarkToggle/DarkToggle";
import styles from "./WorkingDayCard.module.css";
import { useState } from "react";
function WorkingDayCard({ startTime, setStartTime, setEndTime, endTime, day }) {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <DarkToggle setIsOn={setIsOn} isOn={isOn} />
        <p>{day}</p>
      </div>

      <div className={styles.time_container}>
        <input
          className={styles.time}
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <p>to</p>
        <input
          className={styles.time}
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
    </div>
  );
}
export default WorkingDayCard;
