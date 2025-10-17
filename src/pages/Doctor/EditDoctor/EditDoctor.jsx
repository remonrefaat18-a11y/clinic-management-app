import styles from "./EditDoctor.module.css";
import ProfileEditNav from "../../../Components/ProfileEditNav/ProfileEditNav";
import BasicInfo from "../../../Components/BasicInfo/BasicInfo";
import ContactInformation from "../../../Components/ContactInformation/ContactInformation";
import Prices from "../../../Components/Prices/Prices";
import Added from "../../../Components/Added/Added";
import WorkingHours from "../../../Components/WorkingHours/WorkingHours";
import { BiSave } from "react-icons/bi";
function EditDoctor({ setActivePage }) {
  return (
    <>
      <ProfileEditNav setActivePage={setActivePage} />
      <div className={styles.editDoctor}>
        <BasicInfo />
        <ContactInformation />
        <Prices />
        <Added
          initial={["Eg", "AR"]}
          placeholder="Add a new language"
          label="Languages"
        />
        <Added
          initial={[" insurance", " insurance"]}
          placeholder="Add a new insurance company"
          label="Accepted insurance"
        />
        <WorkingHours />
        <div className={styles.btn}>
          <button className={styles.cancel}>Cancellation</button>
          <button className={styles.save}>
            <BiSave />
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}

export default EditDoctor;
