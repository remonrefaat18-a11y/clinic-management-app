import { useState } from "react";
import WorkingDayCard from "../WorkingDayCard/WorkingDayCard";
import styles from "./WorkingHours.module.css";
import { FaRegClock } from "react-icons/fa";
function WorkingHours() {
  const [workingHours, setWorkingHours] = useState({
    sunday: { startTime: "09:00", endTime: "18:00" },
    monday: { startTime: "09:00", endTime: "18:00" },
    tuesday: { startTime: "09:00", endTime: "18:00" },
    wednesday: { startTime: "09:00", endTime: "18:00" },
    thursday: { startTime: "09:00", endTime: "18:00" },
    friday: { startTime: "09:00", endTime: "18:00" },
    saturday: { startTime: "09:00", endTime: "18:00" },
  });

  return (
    <div className={styles.working_container}>
      <h2>
        <FaRegClock />
        Working hours
      </h2>
      {Object.entries(workingHours).map(([day, times]) => (
        <WorkingDayCard
          key={day}
          day={day}
          startTime={times.startTime}
          endTime={times.endTime}
          setStartTime={(newStart) =>
            setWorkingHours((prev) => ({
              ...prev,
              [day]: { ...prev[day], startTime: newStart },
            }))
          }
          setEndTime={(newEnd) =>
            setWorkingHours((prev) => ({
              ...prev,
              [day]: { ...prev[day], endTime: newEnd },
            }))
          }
        />
      ))}
    </div>
  );
}
export default WorkingHours;
