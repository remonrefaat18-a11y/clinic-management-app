import { useState, useEffect } from "react";
import ProfileEditNav from "../../../Components/ProfileEditNav/ProfileEditNav";
import BasicInfo from "../../../Components/BasicInfo/BasicInfo";
import ContactInformation from "../../../Components/ContactInformation/ContactInformation";
import Prices from "../../../Components/Prices/Prices";
import { BiSave } from "react-icons/bi";
import styles from "./EditDoctor.module.css";

function EditDoctor({ setActivePage }) {
  const defaultData = {
    basicInfo: {
      fullname: "",
      specialization: "",
      YearsOfExperience: "",
      Education: "",
      Introduction: "",
    },
    contactInfo: {
      phone: "",
      email: "",
      area: "",
      adress: "",
    },
    prices: {
      firstRevealed: "",
      followUp: "",
      TelephoneConsultation: "",
    },
  };

  const [doctorData, setDoctorData] = useState(defaultData);
  const [initialData, setInitialData] = useState(defaultData);

  useEffect(() => {
    const saved = localStorage.getItem("doctorData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setDoctorData(parsed);
      setInitialData(parsed);
    }
  }, []);

  const handleSave = () => {
    // localStorage.removeItem("doctorData");

    localStorage.setItem("doctorData", JSON.stringify(doctorData));
    setInitialData(doctorData);
    alert("✅ Data saved successfully!");
  };

  const handleCancel = () => {
    setDoctorData(initialData);
    setActivePage("profile");
  };

  return (
    <>
      <ProfileEditNav setActivePage={setActivePage} />
      <div className={styles.editDoctor}>
        <BasicInfo
          data={doctorData.basicInfo}
          setData={(newData) =>
            setDoctorData((prev) => ({ ...prev, basicInfo: newData }))
          }
        />

        <ContactInformation
          data={doctorData.contactInfo}
          setData={(newData) =>
            setDoctorData((prev) => ({ ...prev, contactInfo: newData }))
          }
        />

        <Prices
          data={doctorData.prices}
          setData={(newData) =>
            setDoctorData((prev) => ({ ...prev, prices: newData }))
          }
        />

        <div className={styles.btn}>
          <button className={styles.cancel} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.save} onClick={handleSave}>
            <BiSave />
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}

export default EditDoctor;
