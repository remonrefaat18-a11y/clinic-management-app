/*import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../../../firebase/firebaseConfig";

export default function usePatientMeasurements() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;


      const q = query(collection(db, "measurements"), where("userId", "==", user.uid));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));




console.log("📊 Measurements from Firestore:", data);



      setMeasurements(data);
    };

    fetchData();
  }, []);

  return measurements;
}*/
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../../../firebase/firebaseConfig";

export default function usePatientMeasurements() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(collection(db, "measurements"), where("userId", "==", user.uid));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          date: d.date || "غير محدد",
          systolic: Number(d.systolic || 0),
          sugar: Number(d.sugar || 0),
          heartRate: Number(d.heartRate || 0),
        };
      });

      // ترتيب حسب التاريخ (اختياري)
      data.sort((a, b) => new Date(a.date) - new Date(b.date));

      console.log("📊 Measurements ready for charts:", data);
      setMeasurements(data);
    };

    fetchData();
  }, []);

  return measurements;
}
