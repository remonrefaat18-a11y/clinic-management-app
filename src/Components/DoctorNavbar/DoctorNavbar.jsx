import "./DoctorNavbar.css";
import { AiOutlineSetting } from "react-icons/ai";
// import { IoMdExit } from "react-icons/io";
import { BiExit } from "react-icons/bi";
function DoctorNavbar() {
  return (
    <div className="doctor-navbar shadow-sm">
      <div className="doctor_name">
        <span>D</span>

        <div className="doctor_info">
          <h1>Hello, Dr. Sara Ahmed</h1>
          <h2>Doctor's Control Panal</h2>
        </div>
      </div>

      <div className="btns">
        <button className="profile_btn">
          <AiOutlineSetting />
          Profile Mangment
        </button>
        <button className="exit_btn">
          <BiExit />
          Exit
        </button>
      </div>
    </div>
  );
}
export default DoctorNavbar;
