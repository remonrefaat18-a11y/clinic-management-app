import styles from "./ProfileEditNav.module.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { BsPersonGear } from "react-icons/bs";
function ProfileEditNav() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/doctor/profile");
  };
  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={handleBack}>
        <FaArrowLeft className={styles.arrow} />
        <p>العوده</p>
      </button>
      <BsPersonGear className={styles.person} />
      <h1>إدارة الملف الشخصي</h1>
    </div>
  );
}

export default ProfileEditNav;
