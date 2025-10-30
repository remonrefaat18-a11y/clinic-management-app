import DataCardAppointment from "../DataCardAppointment/DataCardAppointment";
import DataCard from "../DataCardAppointment/DataCardAppointment";
import DataCardPatient from "../DataCardPatient/DataCardPatient";
import styles from "./OverviewCard.module.css";
function OverviewCard({ doctorId }) {
  return (
    <div className={styles.overview_card}>
      <DataCardAppointment doctorId={doctorId} />
      <DataCardPatient doctorId={doctorId} />
    </div>
  );
}
export default OverviewCard;
