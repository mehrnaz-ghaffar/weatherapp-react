import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// hooks
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

// types
import { Location } from "../search/interface";
import WeatherResponse from "./interface";

function WeatherCard({
  selectedLocation,
  apiKey,
}: {
  selectedLocation: Location;
  apiKey: string;
}) {
  const [isFerenhit, setisFerenhit] = useState<boolean>(false);

  const { data, error, loading, refetch } = useAxios<WeatherResponse>(
    `/current.json?key=${apiKey}&q=${selectedLocation.name}&aqi=no`,
    "post"
  );

  // rename
  function handleChangeTempMode() {
    setisFerenhit(() => !isFerenhit);
  }

  useEffect(() => {
    refetch();
  }, [selectedLocation]);

  return (
    <>
      <Card className="my-4" sx={{ mt: 3 }}>
        <CardHeader
          title="Current Weather"
          action={
            <Switch checked={isFerenhit} onChange={handleChangeTempMode} />
          }
        />
        <CardContent className="" sx={{ px: 6 }}>
          {data && (
            <Grid container spacing={2}>
              <Grid size={6}>
                <div>
                  <h4>{selectedLocation.name}</h4>
                  <h1>
                    <span>
                      <img
                        src="//cdn.weatherapi.com/weather/64x64/day/296.png"
                        alt="conditionIcon"
                      />
                    </span>
                    <span>
                      {isFerenhit
                        ? `${data.current.dewpoint_f} °F`
                        : `${data.current.dewpoint_c} °C`}
                    </span>
                  </h1>
                  <h2>{data.current.condition.text}</h2>
                </div>
              </Grid>
              <Grid size={6}>
                <div>
                  <span>
                    {`Feels like ${
                      isFerenhit
                        ? data.current.feelslike_f
                        : data.current.feelslike_c
                    }`}
                  </span>
                  <div>temps</div>
                  <div> humidity {data.current.humidity}% </div>
                  <div>
                    <span>Wind</span>
                    <span>{data.current.wind_kph} kph</span>
                  </div>
                  <div>pressure</div>
                </div>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default WeatherCard;
