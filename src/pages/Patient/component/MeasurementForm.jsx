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

export default function MeasurementForm({
  values,
  statuses,
  onChange,
  onSave,
  isFormValid,
}) {
  
  const getStatusColor = (status) => {
    if (!status) return "#999";
    if (status === "طبيعي") return "green";
    return "red";
  };


 
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>


      {/* التاريخ والوقت */}
      <Box sx={{ backgroundColor: "white", p: 3, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          <CalendarMonthIcon sx={{ mr: 1 }} /> التاريخ والوقت
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="date"
              fullWidth
              label="التاريخ"
              type="date"
              value={values.date}
              onChange={onChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="time"
              fullWidth
              label="الوقت"
              type="time"
              value={values.time}
              onChange={onChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>


      {/* ضغط الدم */}
      <Box sx={{ backgroundColor: "white", p: 3, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ mb: 2, fontWeight: 600, color: "#d32f2f" }}>
            <ShowChartIcon sx={{ color: "red", mr: 1 }} />
            ضغط الدم
          </Typography>
          <Typography sx={{ fontWeight: 600, color: getStatusColor(statuses.bloodPressure) }}>
            {statuses.bloodPressure || "—"}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="systolic"
              fullWidth
              label="الضغط الانقباضي (العلوي)"
              value={values.systolic}
              onChange={onChange}
            />
            <Typography variant="caption" sx={{ color: "#777" }}>
              القيمة الطبيعية: 90 - 120
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="diastolic"
              fullWidth
              label="الضغط الانبساطي (السفلي)"
              value={values.diastolic}
              onChange={onChange}
            />
            <Typography variant="caption" sx={{ color: "#777" }}>
              القيمة الطبيعية: 60 - 80
            </Typography>
          </Grid>
        </Grid>
      </Box>


      {/* السكر */}
      <Box sx={{ backgroundColor: "white", p: 3, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ mb: 2, fontWeight: 600, color: "#0288d1" }}>
            <WaterDropOutlinedIcon sx={{ color: "#0288d1", mr: 1 }} />
            السكر
          </Typography>
          <Typography sx={{ fontWeight: 600, color: getStatusColor(statuses.sugar) }}>
            {statuses.sugar || "—"}
          </Typography>
        </Box>

        <TextField
          name="sugar"
          fullWidth
          label="مستوى السكر (mg/dL)"
          value={values.sugar}
          onChange={onChange}
        />
        <Typography variant="caption" sx={{ color: "#777" }}>
          القيمة الطبيعية: 70 - 140
        </Typography>
      </Box>

      {/* النبض */}
      <Box sx={{ backgroundColor: "white", p: 3, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ mb: 2, fontWeight: 600, color: "#ec407a" }}>
            <FavoriteBorderOutlinedIcon sx={{ color: "#ec407a", mr: 1 }} />
            النبض
          </Typography>
          <Typography sx={{ fontWeight: 600, color: getStatusColor(statuses.heartRate) }}>
            {statuses.heartRate || "—"}
          </Typography>
        </Box>

        <TextField
          name="heartRate"
          fullWidth
          label="النبض (BPM)"
          value={values.heartRate}
          onChange={onChange}
        />
        <Typography variant="caption" sx={{ color: "#777" }}>
          القيمة الطبيعية: 60 - 100
        </Typography>
      </Box>







       {/* قياسات إضافية (اختيارية) */}
      <Box sx={{ backgroundColor: "white", p: 3, mb: 3, borderRadius: 3, boxShadow: 1 }}>

      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
        قياسات إضافية (اختيارية)
      </Typography>

 
      <TextField
        name="weight"
        fullWidth
        label="الوزن (كيلوجرام)"
        value={values.weight}
        onChange={onChange}
      />
    
    
    
      <TextField
        name="notes"
        fullWidth
        multiline
        rows={3}
        label="ملاحظات"
        placeholder="أي ملاحظات"
        value={values.notes}
        onChange={onChange}
        sx={{marginTop:"15px"}}
      />
    
  
</Box>
















      {/* الأزرار */}
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button
        variant="outline"
        onClick={() => navigate("/patient/profile")}
        sx={{
                borderColor: "#bdb2b2ff",
                "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
              }}
        >
          الغاء
        </Button>
        <Button
          variant="contained"
          disabled={!isFormValid}
          onClick={() => {
              onSave(); 
              navigate("/patient/profile"); 
          }}

          sx={{ borderRadius: "8px", gap: "8px" ,

            "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
          }}
        >
          <SaveAsIcon /> حفظ القياسات
        </Button>
        
        
      </Stack>



    </Container>
  );
}
