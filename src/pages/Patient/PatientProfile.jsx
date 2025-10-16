import CardsSection from "./component/CardsSection";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function PatientProfile() {
  return (
    <>
      <Box style={{ backgroundColor: "#f0f9ffff" }}>
          <Navbar />
          <Container maxWidth="lg" >
            <CardsSection />
            <Sidebar/>
        </Container>
      </Box>
    </>
  );
}
