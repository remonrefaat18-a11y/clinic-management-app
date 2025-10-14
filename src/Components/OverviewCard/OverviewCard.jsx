import DataCardAppointment from "../DataCardAppointment/DataCardAppointment";
import DataCard from "../DataCardAppointment/DataCardAppointment";
import DataCardPatient from "../DataCardPatient/DataCardPatient";
import "./OverviewCard.css";
function OverviewCard() {
  return (
    <div className="overview_card">
      <DataCardAppointment />
      <DataCardPatient />
    </div>
  );
}
export default OverviewCard;
