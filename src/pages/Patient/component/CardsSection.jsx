import Cards from "./Cards";
import Box from "@mui/material/Box";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function CardsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        mt: 2,
      }}
    >
      <Cards title="ضغط الدم" value="123/80" status="طبيعي" icon= {<ShowChartIcon style={{color:"red"}}/>} />
      <Cards title="السكر" value="96 mg/dL" status="طبيعي" icon={<WaterDropOutlinedIcon style={{color:"blue"}}/>} />
      <Cards title="النبض" value="72 BPM" status="طبيعي" icon={<FavoriteBorderOutlinedIcon style={{color:"rgb(225, 134, 165)"}}/>} />

    </Box>
  );
}
