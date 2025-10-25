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
        console.error("حدث خطأ أثناء جلب بيانات :", err);
      }
    };

    if (doctorId) fetchData();
  }, [doctorId]);

  return (
    <div className="info_cards_container">
      <InfoCard
        Icon={AiOutlineSchedule}
        about={"إجمالي الحجوزات"}
        number={appointmentsCount}
        note={"جميع المرضى"}
        iconColor={"#356ac8"}
      />

      <InfoCard
        Icon={BsPeople}
        about={"المرضى النشطين"}
        number={activePatients}
        note={"تحت المتابعة"}
        iconColor={"#e63b5b"}
      />

      <InfoCard
        Icon={BsExclamationTriangle}
        about={"الحالات الحرجة"}
        number={criticalCases}
        note={"تحتاج متابعة عاجلة"}
        iconColor={"#e63b5b"}
      />

      <InfoCard
        Icon={FaRegClock}
        about={"ساعات العمل"}
        number={"8"}
        note={"اليوم"}
        iconColor={"#356ac8"}
      />
    </div>
  );
}

export default InfoCards;
