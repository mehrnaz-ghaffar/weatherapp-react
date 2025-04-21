import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

function WeatherCard() {
  return (
    <>
      <Card className="my-4" sx={{ mt: 3 }}>
        <CardHeader title="Current Weather" action={<Switch />} />

        <CardContent className="" sx={{ px: 6 }}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <div>
                <h4>city</h4>
                <div>
                  <span>icon</span>
                  <span>number</span>
                </div>
                <span>weather situation</span>
              </div>
            </Grid>
            <Grid size={6}>
              <div>
                <span>feeling</span>
                <div>temps</div>
                <div> humidity</div>
                <div>wind</div>
                <div>pressure</div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default WeatherCard;
