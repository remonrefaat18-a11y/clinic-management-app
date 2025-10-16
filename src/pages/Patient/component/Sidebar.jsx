import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import GetAppIcon from '@mui/icons-material/GetApp';
import SearchIcon from "@mui/icons-material/Search";

export default function Sidebar() {
  return (
    <box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography>الاجراءات السريعة</Typography>
          <br/>
          <Stack
            direction="row"
            spacing={2}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Button variant="outlined" style={{color:"#000" , border:"solid #e5e5e5  .5px "}} startIcon={<AddIcon />} fullWidth >
              اضافة قياس جديد     
            </Button>
            <Button variant="outlined" style={{color:"#000" , border:"solid #e5e5e5  .5px "}} startIcon={<GetAppIcon />} fullWidth>
              تحميل تقرير pdf
            </Button>
            <Button variant="outlined" style={{color:"#000" , border:"solid #e5e5e5  .5px "}} startIcon={<SearchIcon />} fullWidth>
              البحث عن طبيب
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </box>
  );
}
