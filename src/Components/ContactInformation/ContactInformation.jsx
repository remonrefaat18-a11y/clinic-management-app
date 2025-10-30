import InputCard from "../InputCard/InputCard";
import styles from "./ContactInformation.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

function ContactInformation({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={styles.contact_contaier}>
      <h2>
        <HiOutlineLocationMarker className={styles.contact} />
        معلومات الاتصال والعنوان
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label="ؤقم الهاتف"
          type="text"
          name="phone"
          placeholder="رقم هاتفك"
          value={data.phone}
          onChange={handleChange}
        />
        <InputCard
          label="البريد"
          type="email"
          name="email"
          placeholder="بريدك"
          value={data.email}
          onChange={handleChange}
        />
        <InputCard
          label="العنوان"
          type="text"
          name="area"
          value={data.location}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ContactInformation;
