import InputCard from "../InputCard/InputCard";
import styles from "./ContactInformation.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

function ContactInformation() {
  return (
    <div className={styles.contact_contaier}>
      <h2>
        <HiOutlineLocationMarker className={styles.contact} />
        Contact info and address
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label={"Phone Number"}
          type={"text"}
          placeholder={"Your Phone Number"}
          // value={}
          name={"phone"}
        />
        <InputCard
          label={"E-mail"}
          type={"email"}
          placeholder={"Your E-mail"}
          // value={""}
          name={"email"}
        />
        <InputCard
          label={"The Area"}
          type={"text"}
          placeholder={""}
          // value={""}
          name={"area"}
        />
        <InputCard
          label={"Detailed Adrres"}
          type={"text"}
          placeholder={""}
          // value={""}
          name={"adress"}
        />
      </div>
    </div>
  );
}
export default ContactInformation;
