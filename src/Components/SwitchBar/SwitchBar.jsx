import React, { useState } from "react";
import "./SwitchBar.css";

const tabData = ["Overview", "Appointments", "patients", "table"];

function SwitchBar() {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <div className="tabs_container">
      {tabData.map((tabName) => (
        <button
          key={tabName}
          className={`tab_button ${activeTab === tabName ? "active" : ""}`}
          onClick={() => setActiveTab(tabName)}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
}

export default SwitchBar;
