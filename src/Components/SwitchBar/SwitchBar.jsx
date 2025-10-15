import styles from "./SwitchBar.module.css";

const tabData = ["Overview", "Appointments", "patients", "table"];

function SwitchBar({ activeTab, setActiveTab }) {
  return (
    <div className={styles.tabs_container}>
      {tabData.map((tabName) => (
        <button
          key={tabName}
          className={`${styles.tab_button} ${
            activeTab === tabName ? styles.active : ""
          }`}
          onClick={() => setActiveTab(tabName)}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
}

export default SwitchBar;
