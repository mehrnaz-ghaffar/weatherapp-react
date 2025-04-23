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
        ththth {isFerenhit.toString()}
        <CardContent className="" sx={{ px: 6 }}>
          {data && (
            <Grid container spacing={2}>
              <Grid size={6}>
                <div>
                  <h4>{selectedLocation.name}</h4>
                  <h1>
                    <span>icon</span>
                    <span>
                      {isFerenhit
                        ? `${data.current.dewpoint_f} °F`
                        : `${data.current.dewpoint_c} °C`}
                    </span>
                  </h1>
                  <span>weather situation {data.current.condition.text}</span>
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
                  <div> humidity</div>
                  <div>wind</div>
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
