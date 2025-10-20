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
        Prices
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label="First (pound) revealed"
          type="number"
          name="firstRevealed"
          value={data.firstRevealed}
          onChange={handleChange}
        />
        <InputCard
          label="Follow-up disclosure (pound)"
          type="number"
          name="followUp"
          value={data.followUp}
          onChange={handleChange}
        />
        <InputCard
          label="Telephone consultation (pound)"
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
