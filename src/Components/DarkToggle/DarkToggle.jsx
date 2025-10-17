import styles from "./DarkToggle.module.css";

export default function DarkToggle({ isOn, setIsOn }) {
  return (
    <div
      className={`${styles.toggle} ${isOn ? styles.on : ""}`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className={styles.circle}></div>
    </div>
  );
}
