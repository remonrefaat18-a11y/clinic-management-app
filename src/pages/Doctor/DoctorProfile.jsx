import "./DoctorProfile.css";
import DoctorNavbar from "../../Components/DoctorNavbar/DoctorNavbar";
import CriticalCards from "../../Components/CriticalCards/CriticalCards";
import InfoCards from "../../Components/InfoCards/InfoCards";
import SwitchBar from "../../Components/SwitchBar/SwitchBar";
import OverviewCard from "../../Components/OverviewCard/OverviewCard";
import Appointments from "../../Components/Appointments/Appointments";
import Patients from "../../Components/Patients/Patients";
function DoctorProfile() {
  return (
    <>
      <DoctorNavbar />;
      <div className="doctorProfile">
        <CriticalCards />
        <InfoCards />
        <SwitchBar />
        {/* <OverviewCard /> */}
        {/* <Appointments /> */}
        <Patients />
      </div>
    </>
  );
}
export default DoctorProfile;
