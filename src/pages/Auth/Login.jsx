<<<<<<< HEAD
export default function login() {
  return (
    <div>
      <h1>Search Doctor Page</h1>
    </div>
  );
}
=======

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Login() {
    return (
        <Box
  sx={{
    backgroundColor: "#f0f9ff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden", // يمنع أي scroll أفقي
    px: 2, // padding بسيط من الجوانب للموبايل
  }}
>
  <Container
    maxWidth="sm"
    sx={{
      width: "100%",
      maxWidth: "500px", // تأكيد ألا يزيد عن حجم معين
    }}
  >
    <Typography variant="h4" align="center" sx={{ mb: 2 }}>
      <FavoriteBorderIcon
        sx={{ fontSize: 50, color: "blue", verticalAlign: "middle" }}
      />{" "}
      صحتي
    </Typography>

    <Typography
      variant="subtitle1"
      align="center"
      sx={{ mb: 3, color: "text.secondary" }}
    >
      أهلاً بك في منصة إدارة الصحة الذكية
    </Typography>

    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 4 },
        width: "100%",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        boxSizing: "border-box", // يمنع overflow
      }}
    >
      <Typography variant="h5" align="center">
        تسجيل الدخول
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          mt: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="email"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              width: "100%",
              boxSizing: "border-box", // يمنع تمدد الحواف
            }}
            required
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="password"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            كلمة المرور
          </label>
          <input
            id="password"
            type="password"
            placeholder="أدخل كلمة المرور"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              width: "100%",
              boxSizing: "border-box",
            }}
            required
          />
        </Box>

        <Button
          variant="contained"
          disableElevation
          sx={{ py: 1.5, fontSize: "16px" }}
          fullWidth
        >
          دخول
        </Button>
      </Box>

      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        ليس لديك حساب؟{" "}
        <Link to="/register" style={{ color: "green", fontWeight: "bold" }}>
          إنشاء حساب
        </Link>
      </Typography>
    </Paper>
  </Container>
</Box>

        );
    }

    export default Login;
>>>>>>> origin/login-auth
