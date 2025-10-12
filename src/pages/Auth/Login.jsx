import "./login.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Login() {
    return (
        <Container maxWidth="sm">
        <Typography variant="h4" align="center" sx={{ mt: 3 }}>
            <span style={{color:"blue"}}> <FavoriteBorderIcon/></span> صحتي 
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
            أهلاً بك في منصة إدارة الصحة الذكية
        </Typography>

        <Paper
            elevation={3}
            sx={{
            p: 4,
            mt: 2,
            width: "100%",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
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
            maxWidth: "400px",
            mx: "auto",
            mt: 5,
        }}
        >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="email" style={{ fontWeight: "bold", marginBottom: "5px" }}>
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
                    }}
                    required
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="password" style={{ fontWeight: "bold", marginBottom: "5px" }}>
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
                    }}
                    required
                    />
                </Box>

                <Button variant="contained" disableElevation sx={{ py: 1.5 }}>
                    دخول
                </Button>
        </Box>
            <Typography variant="h5" align="center">
            ليس لديك حساب؟ <Link to="/register" style={{color:"green"}}>إنشاء حساب</Link>
            </Typography>
        </Paper>
    </Container>
    );
}

export default Login;
