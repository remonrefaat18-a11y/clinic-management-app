import styles from "./ProfileEditNav.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { BsPersonGear } from "react-icons/bs";
function ProfileEditNav({ setActivePage }) {
  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => setActivePage("profile")}>
        <FaArrowLeft className={styles.arrow} />
        <p>Back</p>
      </button>
      <BsPersonGear className={styles.person} />
      <h1>Profile Management</h1>
    </div>
  );
}

export default ProfileEditNav;
