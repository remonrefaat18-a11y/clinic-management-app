import styles from "./DoctorNavbar.module.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function DoctorNavbar({ onEditClick, name }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleExit = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className={`${styles.doctor_navbar} shadow-sm`}>
      <div className={styles.doctor_name}>
        <span>د</span>

        <div className={styles.doctor_info}>
          <h1>{`مرحبا د. ${name}`}</h1>
          <h2>لوحة تحكم الطبيب</h2>
        </div>
      </div>

      <div className={styles.btns}>
        <button className={styles.profile_btn} onClick={onEditClick}>
          <AiOutlineSetting />
          إدارة الملف الشخصي
        </button>

        <button className={styles.exit_btn} onClick={handleExit}>
          <BiExit />
          خروج
        </button>
      </div>
    </div>
  );
}

export default DoctorNavbar;
