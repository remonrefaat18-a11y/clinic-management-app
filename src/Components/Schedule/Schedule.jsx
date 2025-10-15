import styles from "./Schedule.module.css";
import ScheduleCard from "../ScheduleCard/ScheduleCard";

const schedule = [
  {
    name: "Yassa emad",
    status: "consultation",
    time: "10.30 AM",
  },
  {
    name: "Yassa emad",
    status: "consultation",
    time: "10.30 AM",
  },
  {
    name: "Yassa emad",
    status: "consultation",
    time: "10.30 AM",
  },
  {
    name: "Yassa emad",
    status: "consultation",
    time: "10.30 AM",
  },
  {
    name: "Yassa emad",
    status: "consultation",
    time: "10.30 AM",
  },
];

function Schedule() {
  return (
    <div className={styles.schedule_container}>
      <h2>Schedule List</h2>
      {schedule.map((sch, index) => (
        <ScheduleCard
          key={index}
          name={sch.name}
          status={sch.status}
          time={sch.time}
        />
      ))}
    </div>
  );
}
export default Schedule;
