import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../../../firebase/firebaseConfig";

export default function usePatientMeasurements() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, "measurements"),
        where("userId", "==", user.uid)
      );
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => {
        const d = doc.data();

        const dateValue = d.createdAt?.toDate
          ? d.createdAt.toDate()
          : new Date(d.date);

        const parseNum = (val) => {
          if (val === undefined || val === null) return 0;
          const num = Number(String(val).trim());
          return isNaN(num) ? 0 : num;
        };

        return {
          id: doc.id,
          date: dateValue,
          systolic: parseNum(d.systolic),
          diastolic: parseNum(d.diastolic),
          sugar: parseNum(d.sugar),
          heartRate: parseNum(d.heartRate),
          weight: parseNum(d.weight),
        };
      });

      data.sort((a, b) => a.date - b.date);

      const formatDate = (date) => date.toISOString().split("T")[0];

      const today = new Date();
      const weekAgo = new Date();
      weekAgo.setDate(today.getDate() - 6);

      const weekly = data
        .filter((d) => d.date >= weekAgo)
        .map((d) => ({
          ...d,
          date: formatDate(d.date),
        }));

      const months = [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ];

      const monthGroups = {};
      data.forEach((d) => {
        const monthName = months[d.date.getMonth()];
        if (!monthGroups[monthName]) {
          monthGroups[monthName] = {
            systolic: 0,
            sugar: 0,
            heartRate: 0,
            count: 0,
          };
        }
        monthGroups[monthName].systolic += d.systolic;
        monthGroups[monthName].sugar += d.sugar;
        monthGroups[monthName].heartRate += d.heartRate;
        monthGroups[monthName].count++;
      });

      const monthly = Object.keys(monthGroups).map((month) => ({
        date: month,
        systolic: (
          monthGroups[month].systolic / monthGroups[month].count
        ).toFixed(1),
        sugar: (monthGroups[month].sugar / monthGroups[month].count).toFixed(1),
        heartRate: (
          monthGroups[month].heartRate / monthGroups[month].count
        ).toFixed(1),
      }));

      setWeeklyData(weekly);
      setMonthlyData(monthly);

      console.log("📊 Weekly Data:", weekly);
      console.log("📅 Monthly Data:", monthly);
    };

    fetchData();
  }, []);

  return { weeklyData, monthlyData };
}
