import "./DoctorProfile.css";
import DoctorNavbar from "../../Components/DoctorNavbar/DoctorNavbar";
import CriticalCards from "../../Components/CriticalCards/CriticalCards";
import InfoCards from "../../Components/InfoCards/InfoCards";
import SwitchBar from "../../Components/SwitchBar/SwitchBar";
import OverviewCard from "../../Components/OverviewCard/OverviewCard";
function DoctorProfile() {
  return (
    <>
      <DoctorNavbar />;
      <div className="doctorProfile">
        <CriticalCards />
        <InfoCards />
        <SwitchBar />
        <OverviewCard />
      </div>
    </>
  );
}
export default DoctorProfile;
