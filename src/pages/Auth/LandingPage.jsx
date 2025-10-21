import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import {
    Box,
    Container,
    Typography,
    Paper,

    Grid,
    Button,
    Stack
} from "@mui/material";

function LandingPage()
{
    const features = [
        {
        icon: <MonitorHeartIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "تتبع الصحة اليومي",
        desc: "سجل قياسات الضغط والسكر ونبضات القلب يوميًا.",
        },
        {
        icon: <BarChartIcon sx={{ fontSize: 50, color: "green" }} />,
        title: "تقارير وإحصائيات",
        desc: "مخططات شهرية وتقارير قابلة للتحميل PDF.",
        },
        {
        icon: <EventIcon sx={{ fontSize: 50, color: "purple" }} />,
        title: "حجز المواعيد",
        desc: "ابحث عن الأطباء واحجز مواعيدك بسهولة.",
        },
        {
        icon: <PersonIcon sx={{ fontSize: 50, color: "orange" }} />,
        title: "ملف الطبيب الشامل",
        desc: "إدارة الملف الشخصي والأسعار والمواعيد المتاحة.",
        },
        {
        icon: <FavoriteIcon sx={{ fontSize: 50, color: "red" }} />,
        title: "تنبيهات ذكية",
        desc: "تنبيهات فورية للأطباء عند وجود قراءات حرجة.",
        },
        {
        icon: <MonitorHeartIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "متابعة شاملة",
        desc: "متابعة حالة المرضى وإدارة المواعيد بفعالية.",
        },
    ];
    return(
        <>
        <Box
    sx={{
        backgroundColor: "white",
        minHeight: "10vh",
        borderBottom: "2px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 10, // padding في الاتجاهين بدل pr/pl
    }}
    >
    <Typography
        variant="h4"
        sx={{
        display: "flex",
        alignItems: "center",
        color: "black",
        }}
    >
        <FavoriteBorderIcon
        sx={{
            fontSize: 30,
            color: "blue",
            mr: 1,
            verticalAlign: "middle",
        }}
        />
        صحتي
    </Typography>
    <Button
        variant="contained"
        component={Link}
        to="/login"
    >
        تسجيل الدخول
    </Button>
    </Box>
    <Box
    sx={{
        backgroundColor: "#f0f9ffff",
        minHeight: "40vh",
        display: "flex",
        justifyContent: "space-between",
    }}
    >
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" sx={{ pt: 8,fontSize:65 }}>
                منصة إدارة الصحة الذكية
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mb: 3,fontSize:20 }}>
تتبع صحتك اليومية، احجز مواعيد مع أفضل الأطباء، واحصل على تقارير طبية شاملة
            </Typography>
            <Stack spacing={2} direction="row" sx={{justifyContent: "center"}}>
                    <Button variant="contained" component={Link} to="/login"  size="large" sx={{ fontSize:20 }}>انضم كطبيب</Button>
                    <Button variant="outlined" component={Link} to="/login"  size="large" sx={{ fontSize:20 }}>ابدا كمريض</Button>
            </Stack>
        </Container>
    </Box>
    <Box   sx={{
        backgroundColor: "#ffffffff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
            }}
    >
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" sx={{ pt: 12 }}>
                        مميزات المنصة
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{  pt:1,fontSize:20 }}>
                    كل ما تحتاجه لإدارة صحتك في مكان واحد
            </Typography>
                <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid container spacing={3} justifyContent="center">
            {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                elevation={3}
                sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
                >
                {feature.icon}
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                    {feature.desc}
                </Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>
        </Box>
    </Container>
    </Box>
    <Box sx={{backgroundColor: "#111010ff" ,minHeight: "20vh"}}
    >
        <Typography variant="h4" align="center" sx={{ pt: 3,color:"white" }}>
            <span style={{ color: "blue", fontSize: 50 }}>
                <FavoriteBorderIcon
                sx={{ fontSize: 50, verticalAlign: "middle" }}
                />
            </span>{" "}
            صحتي
            </Typography>

            <Typography variant="subtitle1" align="center" sx={{ mb: 3,color:"white" }}>
            منصة إدارة الصحة الذكية - جميع الحقوق محفوظة 2024
            </Typography>

    </Box>
        </>
    );
}
export default LandingPage;