/* eslint-disable react-refresh/only-export-components */

import { createContext,useContext,useEffect,useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {db,auth} from "../firebase/firebaseConfig" ;
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);

    const [loading, setLoading] = useState(true);

        useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setCurrentUser(user);
        if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setUserData(docSnap.data());
        }
        } else {
        setUserData(null);
        }
        setLoading(false);
    });
    return unsubscribe;
    }, []);


    const signup=async(email,password,role,extraData={}) => {
        const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        role, 
        ...extraData,
        });

    return userCredential;
    };

    const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
    return signOut(auth);
    };

    const value = { currentUser,userData, signup, login, logout };


    return (
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
    );


    };



















