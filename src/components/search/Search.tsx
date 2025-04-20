import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Location } from "./interface";
import "./Search.css";

function Search() {
  const [apiKey, setApiKey] = useState("d7b29e486645423084d124534251504");
  const [searchKey, setSearchKey] = useState("");
  // const [data, setData] = useState({});
  const {
    data: data,
    error,
    loading,
    refetch,
  } = useAxios<Location[]>(
    `/search.json?key=${apiKey}&q=${searchKey}&aqi=no`,
    "post"
  );

  console.log("data", data);
  console.log("error", error);
  console.log("loading", loading);

  useEffect(() => {
    if (searchKey.length > 3) {
      refetch();
    }
    console.log("searchKey", searchKey);
  }, [searchKey]);

  return (
    <>
      <Autocomplete
        value={searchKey}
        freeSolo
        onInputChange={(event) => setSearchKey(event.target.value)}
        options={data?.length ? data?.map((location) => location.name) : []}
        className="inputClass"
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="outlined" />
        )}
      />
    </>
  );
}

export default Search;

//   <TextField
//   value={searchKey}
//   className="inputClass"
//   onChange={(event) => setSearchKey(event.target.value)}
// />
