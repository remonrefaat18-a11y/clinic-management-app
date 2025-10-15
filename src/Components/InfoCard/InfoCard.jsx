import styles from "./InfoCard.module.css";

function InfoCard({ about, number, note, iconColor, Icon }) {
  return (
    <div className={styles.alert_card}>
      <div className={styles.type_top}>
        <h2>{about}</h2>
        <Icon style={{ color: iconColor }} />
      </div>
      <div className={styles.info_card}>
        <p className={styles.num}>{number}</p>
        <p>{note}</p>
      </div>
    </div>
  );
}

export default InfoCard;
