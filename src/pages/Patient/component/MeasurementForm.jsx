
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  Stack,
  
} from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";


export default function AddMeasurement() {
 const navigate = useNavigate();

  return (
    <>
     
      


      
      <Box sx={{  minHeight: "100vh",paddingTop:"5px" }}>
        <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
          {/* التاريخ والوقت */}
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              mb: 3,
              border: "solid #e5e5e5 .5px",
              borderRadius: "10px",
              boxShadow: "none",
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              <CalendarMonthIcon
                style={{ marginRight: "15px", marginTop: "2px" }}
              />{" "}
              التاريخ والوقت
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="التاريخ"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="الوقت"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* ضغط الدم */}
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              border: "solid #e5e5e5 .5px",
              borderRadius: "10px",
              boxShadow: "none",
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "#d32f2f" }}
            >
              <ShowChartIcon style={{ color: "red" }} /> ضغط الدم
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="الضغط الانقباضي (العلوي)" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="الضغط الانبساطي (السفلي)" />
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              القيمة الطبيعية: 120-90 / 80-60
            </Typography>
          </Box>

          {/* السكر */}
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              border: "solid #e5e5e5 .5px",
              borderRadius: "10px",
              boxShadow: "none",
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "blue" }}
            >
              <WaterDropOutlinedIcon style={{ color: "blue" }} /> مستوى السكر في
              الدم
            </Typography>

            <TextField fullWidth label="مستوى السكر (mg/dL)" />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              القيمة الطبيعية: 70-100 (أثناء الصيام)
            </Typography>
          </Box>

          {/* النبض */}
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              border: "solid #e5e5e5 .5px",
              borderRadius: "10px",
              boxShadow: "none",
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "#ec407a" }}
            >
              <FavoriteBorderOutlinedIcon style={{ color: "#ec407a" }} /> معدل
              نبضات القلب
            </Typography>

            <TextField fullWidth label="النبض (BPM)" />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              القيمة الطبيعية: 60-100 نبضة في الدقيقة
            </Typography>
          </Box>

          {/* قياسات إضافية */}
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              border: "solid #e5e5e5 .5px",
              borderRadius: "10px",
              boxShadow: "none",
              mb: 3,
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              قياسات إضافية (اختياري)
            </Typography>

            <TextField fullWidth label="الوزن (كيلوجرام)" sx={{ mb: 2 }} />
            <TextField fullWidth multiline minRows={3} label="ملاحظات" />
          </Box>

          {/* الأزرار */}
          <Stack
            spacing={2}
            direction="row"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="outlined"
              style={{ color: "#000", border: "solid #dfd3d3ff .5px" }}
              onClick={() => navigate("/patient/profile")}
            >
              الغاء
            </Button>
            <Button
              variant="contained"
              style={{ borderRadius: "8px", gap: "8px" }}
            >
              <SaveAsIcon /> حفظ القياسات
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
