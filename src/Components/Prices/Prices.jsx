import InputCard from "../InputCard/InputCard";
import styles from "./Prices.module.css";
import { FiDollarSign } from "react-icons/fi";

function Prices({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={styles.basic_contaier}>
      <h2>
        <FiDollarSign className={styles.contact} />
        الأسعار
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label="كشف أول (جنيه)"
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
        />
        <InputCard
          label="كشف متابعة (جنيه)"
          type="number"
          name="followUp"
          value={data.followUp}
          onChange={handleChange}
        />
        <InputCard
          label="استشارة هاتفية (جنيه)"
          type="number"
          name="TelephoneConsultation"
          value={data.TelephoneConsultation}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Prices;
