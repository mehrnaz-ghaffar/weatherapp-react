import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

function Search() {
  const [searchKey, setSearchKey] = useState("");
  // const [data, setData] = useState({});
  const {
    data: data,
    error,
    loading,
    refetch,
  } = useAxios(
    `http://api.weatherapi.com/v1/current.json?key=d7b29e486645423084d124534251504&q=${searchKey}&aqi=no`,
    "post"
  );

  console.log("data", data);
  console.log("error", error);
  console.log("loading", loading);
  console.log("refetch", refetch);

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
        className=""
        onChange={(event) => {
          setSearchKey(event.target.value);
        }}
      />
    </>
  );
}

export default Search;
