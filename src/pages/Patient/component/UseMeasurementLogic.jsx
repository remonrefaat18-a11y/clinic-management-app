import { useState, useEffect } from "react";

export default function useMeasurementLogic() {
  const [measurement, setMeasurement] = useState({
    date: "",
    time: "",
    systolic: "",
    diastolic: "",
    sugar: "",
    heartRate: "",
    weight: "",     
    notes: "",         
  });

  const [statuses, setStatuses] = useState({
    bloodPressure: "",
    sugar: "",
    heartRate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurement((prev) => ({ ...prev, [name]: value }));
  };





  useEffect(() => {
    const newStatuses = {};

    // ضغط الدم
    if (measurement.systolic && measurement.diastolic) {
      if (
        measurement.systolic > 140 ||
        measurement.diastolic > 90
      ) {
        newStatuses.bloodPressure = "مرتفع";
      } else if (
        measurement.systolic < 90 ||
        measurement.diastolic < 60
      ) {
        newStatuses.bloodPressure = "منخفض";
      } else {
        newStatuses.bloodPressure = "طبيعي";
      }
    }

    // السكر
    if (measurement.sugar) {
      if (measurement.sugar > 140) {
        newStatuses.sugar = "مرتفع";
      } else if (measurement.sugar < 70) {
        newStatuses.sugar = "منخفض";
      } else {
        newStatuses.sugar = "طبيعي";
      }
    }

    // النبض
    if (measurement.heartRate) {
      if (measurement.heartRate > 100) {
        newStatuses.heartRate = "سريع";
      } else if (measurement.heartRate < 60) {
        newStatuses.heartRate = "بطيء";
      } else {
        newStatuses.heartRate = "طبيعي";
      }
    }
    setStatuses(newStatuses);
  }, [measurement]);






  const handleSave = () => {
    console.log("تم حفظ البيانات ✅:", measurement);
  };




  const isFormValid =
    measurement.date && measurement.time && measurement.systolic && measurement.diastolic && measurement.sugar && measurement.heartRate;

  
  return {
    measurement,
    statuses,
    handleChange,
    handleSave,
    isFormValid,
  };
}
