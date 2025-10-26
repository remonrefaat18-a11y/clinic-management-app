import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";



import { signOut } from "firebase/auth";


export default function Navbar() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchPatientName = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // بنجيب بيانات المريض من Firestore000
          const ref = doc(db, "users", user.uid);
          const snap = await getDoc(ref);
          if (snap.exists()) {
            setUserName(snap.data().name || "مريض بدون اسم");
          } else {
            setUserName("مريض غير معروف");
          }
        } catch (error) {
          console.error("❌ خطأ في جلب بيانات المريض:", error);
        }
      }
    };

    // نعمل مراقبة لتغيير المستخدم
    const unsubscribe = auth.onAuthStateChanged(() => {
      fetchPatientName();
    });

    return () => unsubscribe();
  }, []);





     const handleLogout = async () => {
  try {
    await signOut(auth); 
    console.log("✅ بعد الخروج:", auth.currentUser); 
    navigate("/login"); 
  } catch (error) {
    console.error("❌ خطأ أثناء تسجيل الخروج:", error);
  }
};


  

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FavoriteBorderOutlinedIcon sx={{ color: "blue", fontSize: 30 }} />
            <Box>
              <Typography variant="subtitle1">
                {userName || "اسم المريض..."}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                لوحة تحكم المريض
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(30, 95, 225)",
                textTransform: "none",

                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
              onClick={() => navigate("/patient/doctors/search")}
            >
              <SearchIcon sx={{ mr: 0.5 }} /> البحث عن طبيب
            </Button>
            <Button
              onClick={() => navigate("/patient/measurement/add")}
              variant="contained"
              sx={{
                backgroundColor: "rgb(45, 154, 45)",
                textTransform: "none",

                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              <AddIcon sx={{ mr: 0.5 }} /> إضافة قياس
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e5e5e5",
                textTransform: "none",

                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
              onClick={handleLogout}
            >
              <LogoutIcon sx={{ mr: 0.5 }} /> خروج
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
