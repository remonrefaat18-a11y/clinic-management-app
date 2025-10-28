/*import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addMeasurement = async (userId, data) => {
  try {
    await addDoc(collection(db, "measurements"), {
      userId,
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("✅ Measurement saved successfully");
  } catch (error) {
    console.error("❌ Error saving measurement:", error);
  }
};
*/
import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// دالة لحفظ قياسات المريض في فايرستور
export const addMeasurement = async (userId, measurement) => {
  try {
    if (!userId) throw new Error("User ID is missing!");
    if (!measurement || Object.keys(measurement).length === 0)
      throw new Error("Measurement data is empty!");

    const docRef = await addDoc(collection(db, "measurements"), {
      userId,
      ...measurement,
      createdAt: serverTimestamp(),
    });

    console.log("✅ Measurement added with ID:", docRef.id);
  } catch (error) {
    console.error("❌ Error adding measurement:", error);
  }
};
