import InputCard from "../InputCard/InputCard";
import styles from "./BasicInfo.module.css";
import { BsPersonGear } from "react-icons/bs";

function BasicInfo({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={styles.basic_contaier}>
      <h2>
        <BsPersonGear className={styles.contact} />
        Basic information
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label="Full name"
          type="text"
          name="fullname"
          value={data.fullname}
          onChange={handleChange}
        />
        <InputCard
          label="Specialization"
          type="text"
          name="specialization"
          value={data.specialization}
          onChange={handleChange}
        />
        <InputCard
          label="Years of experience"
          type="text"
          name="YearsOfExperience"
          value={data.YearsOfExperience}
          onChange={handleChange}
        />
        <InputCard
          label="Education"
          type="text"
          name="Education"
          value={data.Education}
          onChange={handleChange}
        />
        <InputCard
          label="Introduction"
          type="text"
          name="Introduction"
          value={data.Introduction}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default BasicInfo;
