import Title from "./components/title/Title";
import Search from "./components/search/Search";
import WeatherCard from "./components/weatherinfo/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Title />
      <Search />
      <WeatherCard />
    </div>
  );
}

export default App;
