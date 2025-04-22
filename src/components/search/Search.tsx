import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Location } from "./interface";
import "./Search.css";

function Search({
  onChangeLocation,
  apiKey,
}: {
  onChangeLocation: (location: Location | null) => void;
  apiKey: string;
}) {
  const [searchKey, setSearchKey] = useState("");
  // const [data, setData] = useState({});
  const { data, error, loading, refetch } = useAxios<Location[]>(
    `/search.json?key=${apiKey}&q=${searchKey}&aqi=no`,
    "post"
  );

  useEffect(() => {
    if (searchKey.length > 3) {
      refetch();
    }
    console.log("searchKey", searchKey);
  }, [searchKey]);

  return (
    <>
      {/* 
      TODO:
      debounce
      add spinner while fetch
      add flag
    */}
      <Autocomplete
        inputValue={searchKey}
        freeSolo
        onInputChange={(event, newInputValue) =>
          setSearchKey(newInputValue || "")
        }
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            onChangeLocation(null); // or handle manual input differently
          } else {
            onChangeLocation(newValue);
          }
        }}
        options={data ?? []}
        className="inputClass"
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="outlined" />
        )}
        renderOption={(props, option) => {
          return (
            <Box
              {...props}
              key={option.id}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            >
              <strong>{option.name} </strong>
              <small>{` ( ${option.region}, ${option.country} )`}</small>
            </Box>
          );
        }}
      />
    </>
  );
}

export default Search;
