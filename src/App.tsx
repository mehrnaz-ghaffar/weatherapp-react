import Title from "./components/title/Title";
import Search from "./components/search/Search";
import WeatherCard from "./components/weatherinfo/WeatherCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [apiKey, setApiKey] = useState("d7b29e486645423084d124534251504");

  const [selectedLocation, setSelectedLocation] = useState({});

  function handleSetSelectedLocation(value) {
    setSelectedLocation(() => value);
  }

  return (
    <div className="container">
      <Title />
      <Search apiKey={apiKey} onChangeLocation={handleSetSelectedLocation} />
      {selectedLocation && (
        <WeatherCard apiKey={apiKey} selectedLocation={selectedLocation} />
      )}
    </div>
  );
}

export default App;
