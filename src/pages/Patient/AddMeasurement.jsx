import MeasurementForm from "./component/MeasurementForm";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import UseMeasurementLogic from "../Patient/component/UseMeasurementLogic";

import { Box, Container, Typography } from "@mui/material";

export default function AddMeasurement() {
  const navigate = useNavigate();
  const { measurement, statuses, handleChange, handleSave, isFormValid } =
    UseMeasurementLogic();
  return (
    <Box sx={{ backgroundColor: "#f0f9ff", minHeight: "100vh" }}>
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
              <IconButton
                onClick={() => navigate("/patient/profile")}
                sx={{
                  color: "#1976d2",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#004ba0",
                    transform: "translateX(-3px)",
                  },
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <Typography variant="h6">العودة</Typography>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginLeft: "15px" }}
                >
                  إضافة قياس جديد
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <MeasurementForm
        values={measurement}
        statuses={statuses}
        onChange={handleChange}
        onSave={handleSave}
        isFormValid={isFormValid}
      />
    </Box>
  );
}
