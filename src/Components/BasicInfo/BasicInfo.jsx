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
          name="name"
          value={data.name}
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
          name="experience"
          value={data.experience}
          onChange={handleChange}
        />

        <InputCard
          label="Education"
          type="text"
          name="education"
          value={data.education}
          onChange={handleChange}
        />

        <InputCard
          label="Introduction"
          type="text"
          name="about"
          value={data.about}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default BasicInfo;
