import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
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
  } = useAxios(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchKey}&aqi=no`,
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
      <TextField
        value={searchKey}
        label="Location"
        className="inputClass"
        variant="outlined"
        onChange={(event) => {
          setSearchKey(event.target.value);
        }}
      />
    </>
  );
}

export default Search;
