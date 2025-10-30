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
        المعلومات الأساسية
      </h2>

      <div className={styles.form_contaier}>
        <InputCard
          label="الاسم الكامل"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />

        <InputCard
          label="التخصص"
          type="text"
          name="specialization"
          value={data.specialization}
          onChange={handleChange}
        />

        <InputCard
          label="سنوات الخبرة"
          type="text"
          name="experience"
          value={data.experience}
          onChange={handleChange}
        />

        <InputCard
          label="تعليم"
          type="text"
          name="education"
          value={data.education}
          onChange={handleChange}
        />

        <InputCard
          label="مقدمة"
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
