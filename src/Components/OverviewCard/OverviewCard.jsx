import DataCardAppointment from "../DataCardAppointment/DataCardAppointment";
import DataCard from "../DataCardAppointment/DataCardAppointment";
import DataCardPatient from "../DataCardPatient/DataCardPatient";
import styles from "./OverviewCard.module.css";
function OverviewCard() {
  return (
    <div className={styles.overview_card}>
      <DataCardAppointment />
      <DataCardPatient />
    </div>
  );
}
export default OverviewCard;
