import { useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function TestFirestore() {
  useEffect(() => {
    const getData = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    };
    getData();
  }, []);

  return <p>Check console for Firestore data </p>;
}

export default TestFirestore;