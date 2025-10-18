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

export default function Navbar() {
  const navigate = useNavigate();
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
              <Typography variant="subtitle1">اسم المريض...</Typography>
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
            <Button  onClick={() => navigate("/patient/measurement/add")}
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
              onClick={() => navigate("/login")}
              
              
            >
              <LogoutIcon sx={{ mr: 0.5 }} /> خروج
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
