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
        Contact info and address
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label="Phone Number"
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={data.phone}
          onChange={handleChange}
        />
        <InputCard
          label="E-mail"
          type="email"
          name="email"
          placeholder="Your E-mail"
          value={data.email}
          onChange={handleChange}
        />
        <InputCard
          label="Location"
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
