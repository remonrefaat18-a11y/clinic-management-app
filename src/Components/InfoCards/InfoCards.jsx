import { useEffect, useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import "./InfoCards.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsPeople, BsExclamationTriangle } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function InfoCards({ doctorId }) {
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const [activePatients, setActivePatients] = useState(0);
  const [criticalCases, setCriticalCases] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsSnap = await getDocs(collection(db, "appointments"));
        const doctorAppointments = appointmentsSnap.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((a) => a.doctorId === doctorId);

        const totalAppointments = doctorAppointments.length;

        const doctorPatientIds = doctorAppointments.map((a) => a.userId);
        const measurementsSnap = await getDocs(collection(db, "measurements"));
        const measurementsData = measurementsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const criticals = measurementsData.filter((m) => {
          const systolic = parseFloat((m.systolic || "").toString().trim());
          const diastolic = parseFloat((m.diastolic || "").toString().trim());
          const sugar = parseFloat((m.sugar || "").toString().trim());
          const heartRate = parseFloat((m.heartRate || "").toString().trim());

          return (
            doctorPatientIds.includes(m.userId) &&
            (systolic > 170 ||
              diastolic > 110 ||
              sugar > 250 ||
              heartRate < 50 ||
              heartRate > 120)
          );
        }).length;

        const patientCountMap = {};
        doctorAppointments.forEach((a) => {
          if (a.userId) {
            patientCountMap[a.userId] = (patientCountMap[a.userId] || 0) + 1;
          }
        });
        const repeatedPatients = Object.values(patientCountMap).filter(
          (count) => count > 1
        ).length;

        setAppointmentsCount(totalAppointments);
        setActivePatients(repeatedPatients);
        setCriticalCases(criticals);
      } catch (err) {
        console.error("Error fetching InfoCards data:", err);
      }
    };

    if (doctorId) fetchData();
  }, [doctorId]);

  return (
    <div className="info_cards_container">
      <InfoCard
        Icon={AiOutlineSchedule}
        about={"Total appointments"}
        number={appointmentsCount}
        note={"All patients"}
        iconColor={"#356ac8"}
      />

      <InfoCard
        Icon={BsPeople}
        about={"Active patients"}
        number={activePatients}
        note={"Under follow-up"}
        iconColor={"#e63b5b"}
      />

      <InfoCard
        Icon={BsExclamationTriangle}
        about={"Critical cases"}
        number={criticalCases}
        note={"Need immediate follow-up"}
        iconColor={"#e63b5b"}
      />

      <InfoCard
        Icon={FaRegClock}
        about={"Working hours"}
        number={"8"}
        note={"today"}
        iconColor={"#356ac8"}
      />
    </div>
  );
}

export default InfoCards;
