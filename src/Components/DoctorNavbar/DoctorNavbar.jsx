import styles from "./DoctorNavbar.module.css";
import { AiOutlineSetting } from "react-icons/ai";
// import { IoMdExit } from "react-icons/io";
import { BiExit } from "react-icons/bi";
function DoctorNavbar() {
  return (
    <div className={`${styles.doctor_navbar} shadow-sm`}>
      <div className={styles.doctor_name}>
        <span>D</span>

        <div className={styles.doctor_info}>
          <h1>Hello, Dr. Sara Ahmed</h1>
          <h2>Doctor's Control Panal</h2>
        </div>
      </div>

      <div className={styles.btns}>
        <button className={styles.profile_btn}>
          <AiOutlineSetting />
          Profile Mangment
        </button>
        <button className={styles.exit_btn}>
          <BiExit />
          Exit
        </button>
      </div>
    </div>
  );
}
export default DoctorNavbar;
