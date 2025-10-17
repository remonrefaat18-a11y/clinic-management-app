import InputCard from "../InputCard/InputCard";
import styles from "./Prices.module.css";
import { FiDollarSign } from "react-icons/fi";

function Prices() {
  return (
    <div className={styles.basic_contaier}>
      <h2>
        <FiDollarSign className={styles.contact} />
        Prices
      </h2>
      <div className={styles.form_contaier}>
        <InputCard
          label={"First (pound) revealed"}
          type={"number"}
          placeholder={""}
          // value={}
          name={"firstRevealed"}
        />
        <InputCard
          label={"Follow-up disclosure (pound)"}
          type={"number"}
          placeholder={""}
          // value={}
          name={"followUp"}
        />
        <InputCard
          label={"Telephone consultation (pound)"}
          type={"number"}
          placeholder={""}
          // value={}
          name={"TelephoneConsultation"}
        />
      </div>
    </div>
  );
}
export default Prices;
