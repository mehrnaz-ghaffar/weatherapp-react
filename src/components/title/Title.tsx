import Switch from "@mui/material/Switch";
import "./Title.css";

function Title() {
  return (
    <>
      <div className="title">
        <h2>ReactWeather</h2>

        <div>
          <span>
            <Switch />
          </span>
          <span>gitIcon</span>
        </div>
      </div>
    </>
  );
}

export default Title;
