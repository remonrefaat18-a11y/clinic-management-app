import { useState, useEffect } from "react";
import ProfileEditNav from "../../../Components/ProfileEditNav/ProfileEditNav";
import BasicInfo from "../../../Components/BasicInfo/BasicInfo";
import ContactInformation from "../../../Components/ContactInformation/ContactInformation";
import Prices from "../../../Components/Prices/Prices";
import { BiSave } from "react-icons/bi";
import styles from "./EditDoctor.module.css";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import SaveCardModal from "../../../Components/SaveCardModal/SaveCardModal";

function EditDoctor() {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultData = {
    name: "",
    specialization: "",
    education: "",
    experience: "",
    about: "",
    location: "",
    phone: "",
    email: "",
    price: "",
    followUp: "",
    TelephoneConsultation: "",
  };

  const [doctorData, setDoctorData] = useState(defaultData);
  const [initialData, setInitialData] = useState(defaultData);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Firebase Auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setDoctorId(user.uid);
        console.log(user.uid);
      } else {
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  //get the data from Firestore
  useEffect(() => {
    if (!doctorId) return;

    const fetchDoctorData = async () => {
      try {
        const docRef = doc(db, "users", doctorId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const merged = { ...defaultData, ...data };

          //calc followUp ,Tele
          if (
            !merged.followUp &&
            !merged.TelephoneConsultation &&
            merged.price
          ) {
            const basePrice = parseFloat(merged.price) || 0;
            merged.followUp = Math.max(basePrice - 50, 0);
            merged.TelephoneConsultation = Math.max(basePrice - 150, 0);
          }
          setDoctorData(merged);
          setInitialData(merged);
        } else {
          await setDoc(docRef, defaultData);
        }
      } catch (error) {
        console.error("❌ Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctorId]);

  const handleSave = async () => {
    try {
      let updatedData = { ...doctorData };
      const basePrice = parseFloat(updatedData.price) || 0;

      // first sign
      if (!updatedData.followUp && !updatedData.TelephoneConsultation) {
        updatedData.followUp = Math.max(basePrice - 50, 0);
        updatedData.TelephoneConsultation = Math.max(basePrice - 150, 0);
      }
      //if the doctor change
      else if (
        basePrice !== parseFloat(initialData.price) &&
        updatedData.followUp === initialData.followUp &&
        updatedData.TelephoneConsultation === initialData.TelephoneConsultation
      ) {
        updatedData.followUp = Math.max(basePrice - 50, 0);
        updatedData.TelephoneConsultation = Math.max(basePrice - 150, 0);
      }

      const docRef = doc(db, "users", doctorId);
      await setDoc(docRef, updatedData, { merge: true });

      localStorage.setItem("doctorData", JSON.stringify(updatedData));
      setInitialData(updatedData);

      setModalMessage("✅ Your Data has been Saved Successfully!");
      setIsError(false);
      setIsModalOpen(true);
    } catch (error) {
      console.error("❌ Error saving doctor data:", error);
      setModalMessage("❌ Failed to Save Data. Please Try Again!");
      setIsError(true);
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    setDoctorData(initialData);
    navigate("/doctor/profile");
  };

  return (
    <>
      <ProfileEditNav />
      <div className={styles.editDoctor}>
        {/* Basic Info */}
        <BasicInfo data={doctorData} setData={setDoctorData} />

        {/* Contact Info */}
        <ContactInformation data={doctorData} setData={setDoctorData} />

        {/* Prices */}
        <Prices data={doctorData} setData={setDoctorData} />

        {/* Buttons */}
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

      <SaveCardModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 style={{ color: isError ? "red" : "green" }}>{modalMessage}</h3>
      </SaveCardModal>
    </>
  );
}

export default EditDoctor;
