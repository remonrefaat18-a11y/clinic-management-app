import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import AppoinmentsList from "./UpcomingAppointments";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import GetAppIcon from "@mui/icons-material/GetApp";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import SoupKitchenSharpIcon from '@mui/icons-material/SoupKitchenSharp';
import InvertColorsSharpIcon from '@mui/icons-material/InvertColorsSharp';
import { useNavigate } from "react-router-dom";
import UpcomingAppointments from "./UpcomingAppointments";

export default function Sidebar() {
   const navigate = useNavigate();





  const handleDownloadPDF = () => {
  // هنا بنحدد رابط التقرير أو بنولّده
  const fileUrl = "/reports/patient-report.pdf"; // غيّري المسار حسب مكان الملف الفعلي

  // إنشاء رابط تحميل خفي
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "تقرير-المريض.pdf"; // اسم الملف اللي هيتحمل
  link.click(); // يبدأ التحميل فورًا
};







  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 , marginLeft:"25px" }}>









       {/*الاجراءات السريعة*/}
      <Card
        sx={{
          
          width: 350,
          border: "solid #e5e5e5 .5px",
          borderRadius: "10px",
          boxShadow: "none",
          marginRight:"25px",
          
        }}
      >

         
        <CardContent>
          <Typography>الاجراءات السريعة</Typography>
          <br />
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", flexDirection: "column" ,marginRight:"20px",gap:"5px","&:focus": {
      outline: "none",
      boxShadow: "none",
    }, }}
          >
            <Button
              variant="outlined"
              sx={{ color: "#000", border: "solid #e5e5e5  .5px " ,   marginLeft:"15px" ,"&:focus": {
      outline: "none",
      boxShadow: "none",
    },}}
              startIcon={<AddIcon />}
              fullWidth
              onClick={() => navigate("/patient/measurement/add")}
            >
              اضافة قياس جديد 
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#000", border: "solid #e5e5e5  .5px ", "&:focus": {
      outline: "none",
      boxShadow: "none",
    },}}
              startIcon={<GetAppIcon />}
              fullWidth


              
              onClick={handleDownloadPDF}
            >
              تحميل تقرير pdf 
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#000", border: "solid #e5e5e5  .5px " , "&:focus": {
      outline: "none",
      boxShadow: "none",
    }, }}
              startIcon={<SearchIcon />}
              onClick={() => navigate("/patient/doctors/search")}
              fullWidth
              

              
            >
              البحث عن طبيب
            </Button>
          </Stack>
        </CardContent>
      </Card>
      {/*==============الاجراءات السريعة=========*/}

















      {/*المواعيد القادمة*/}
      <UpcomingAppointments/>
      {/*==============المواعيد القادمة========*/}
















      {/*نصائح صحية*/}
      <Card
        sx={{
          
          width: 350,
          border: "solid #e5e5e5 .5px",
          borderRadius: "10px",
          boxShadow: "none",
          marginRight:"25px",
          
        }}
      >

         
        <CardContent>
          <Typography>نصائح صحية</Typography>
          <br />
          <Stack
            direction="row"
            spacing={2}
            style={{ display: "flex", flexDirection: "column" ,marginRight:"20px",gap:"5px"}}
          >
            <Button
              variant="outlined"
              style={{ color: "#3d60ecff",backgroundColor:"#e5f4ff", border: "solid #e5e5e5  .5px " , marginLeft:"15px" }}
              startIcon={<InvertColorsSharpIcon />}
              fullWidth
            >
             تذكر شرب 8 أكواب ماء يوميا
            </Button>
            <Button
              variant="outlined"
              style={{ color: "#016630",backgroundColor:"#dfffe2ff", border: "solid #e5e5e5  .5px " }}
              startIcon={<DirectionsRunSharpIcon />}
              fullWidth
            >
              امش 30 دقيقة يوميا لصحة أفضل
            </Button>
            <Button
              variant="outlined"
              style={{ color: "#f71010ff",backgroundColor:"#ffddddff" ,border: "solid #e5e5e5  .5px " }}
              startIcon={<SoupKitchenSharpIcon />}
              fullWidth
              
            >
              تناول 5 حصص من الخضروات و الفواكه
            </Button>
          </Stack>
        </CardContent>
      </Card>
      {/*==============الاجراءات السريعة=========*/}

















      














    </Box>
  );
}
