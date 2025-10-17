import React from "react";
import CardsSection from "./component/CardsSection";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import WeeklyChart from "./component/charts/WeeklyChart";
import MonthlyChart from "./component/charts/MonthlyChart";
import { weeklyData, monthlyData } from "./component/charts/mockData";




export default function PatientProfile() {
  return (
    <Box sx={{ backgroundColor: "#f0f9ff", minHeight: "100vh" }}>



      {/*  Navbar */}
      <Navbar />
      {/* ========== Navbar========== */}



      {/* content*/}
      <Container maxWidth="lg">
        
        {/*cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: { xs: 2, md: 4 },
            mb: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <CardsSection />
        </Box>
        {/*=========cards =========*/}




       
        {/*charts*/} 
        <Grid container spacing={3} sx={{ mt: 4 }}>
          
          <Grid item xs={12} md={8}>
            
            
              <WeeklyChart data={weeklyData} />
            

           
              <MonthlyChart data={monthlyData} />
            

          </Grid>
          {/*=========charts =========*/}


 
          {/* sidebar*/}
          <Grid item xs={12} md={4}>
            
            <Sidebar />
            
          </Grid>
          {/* =========sidebar=======*/}
        </Grid>




      </Container>








    </Box>
  );
}
