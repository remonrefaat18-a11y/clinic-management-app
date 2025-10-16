import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

export default function Cards({ title, value, status,icon }) {
  return (
    <Card
      sx={{
        width: 250,
        border: "solid #e5e5e5 .5px",
        borderRadius: "10px",
        boxShadow: "none",
        
      }}
    >
      <CardContent >
      
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <div style={{
            display: "flex",
            gap:"8rem",
            alignItems: "center",
            mb: 1,
          }} >
          <Typography sx={{ color: "#555", fontWeight: "500" }}>
            {title}
          </Typography>
          <Typography>
            {icon}
        </Typography>
          </div>
        </Box>

      
        <Typography
          variant="h2"
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "black",
            mb: 1,
          }}
        >
          {value}
        </Typography>
        
              
              
        <Typography
          sx={{
            backgroundColor: "#dbfce7",
            width: "fit-content",
            borderRadius: "20px",
            color: "#016630",
            fontSize: "13px",
            px: 1.5,
            py: 0.3,
            textAlign: "center",
          }}
        >
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}
