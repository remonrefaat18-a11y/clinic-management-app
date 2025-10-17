import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";



export default function AppoinmentsList(){



    return(
          
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
          <Typography>المواعيد القادمة  <CalendarMonthIcon style={{color:"#3d60ecff" , marginLeft:"11rem"}} /></Typography>
          <br />
          <br/>

          <Card sx={{height:"10rem"}}>
                   المواعيد المتاحة....... 
          </Card>
          
        </CardContent>
      </Card>
     


    );
}