import Title from "./components/title/Title";
import Search from "./components/search/Search";
import WeatherCard from "./components/weatherinfo/WeatherCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({});

  function handleSetSelectedLocation(value) {
    setSelectedLocation(() => value);
  }

  return (
    <div className="container">
      <Title />
      <Search onChangeLocation={handleSetSelectedLocation} />
      <WeatherCard selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
