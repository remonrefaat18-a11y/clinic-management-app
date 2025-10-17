import InputCard from "../InputCard/InputCard";
import styles from "./BasicInfo.module.css";
import { BsPersonGear } from "react-icons/bs";

function BasicInfo() {
  return (
    <div className={styles.basic_contaier}>
      <h2>
        <BsPersonGear className={styles.contact} />
        Basic information
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label={"full name"}
          type={"text"}
          placeholder={""}
          // value={}
          name={"fullname"}
        />
        <InputCard
          label={"specialization"}
          type={"text"}
          placeholder={""}
          // value={""}
          name={"specialization"}
        />
        <InputCard
          label={"Years of experience"}
          type={"text"}
          placeholder={""}
          // value={""}
          name={"YearsOfExperience"}
        />
        <InputCard
          label={"Education"}
          type={"text"}
          placeholder={""}
          // value={""}
          name={"Education"}
        />
        <InputCard
          label={"Introduction"}
          type={"text"}
          placeholder={""}
          // value={""}
          name={"Introduction"}
        />
      </div>
    </div>
  );
}
export default BasicInfo;
