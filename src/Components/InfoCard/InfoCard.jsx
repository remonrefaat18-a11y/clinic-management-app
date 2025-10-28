import styles from "./InfoCard.module.css";
import { GoFileSubmodule } from "react-icons/go";

function InfoCard({ about, number, note, iconColor, Icon }) {
  // لو Icon مش موجود، استخدم GoFileSubmodule
  const IconComponent = Icon || GoFileSubmodule;

  return (
    <div className={styles.alert_card}>
      <div className={styles.type_top}>
        <h2>{about}</h2>
        <IconComponent style={{ color: iconColor }} />
      </div>
      <div className={styles.info_card}>
        <p className={styles.num}>{number}</p>
        <p>{note}</p>
      </div>
    </div>
  );
}

export default InfoCard;
