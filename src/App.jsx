import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import Temperatures from "./components/Temperatures";
import TimeandLocation from "./components/TimeandLocation";
import Topbuttons from "./components/Topbuttons";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "kolkata" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      );
      // console.log(data);
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "bg-gradient-to-br from-sky-400 to-bg-sky-950 ";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp >= threshold)
      return "bg-gradient-to-br from-yellow-400 to bg-red-800 ";
    return "bg-gradient-to-br from-sky-400 to bg-sky-950 ";
  };
  return (
    <div
      className={`w-full  lg:mx-auto lg:mt-5 lg:rounded-xl lg:max-w-screen-md px-10 lg:px-32 py-4 lg:h-[600px] h-screen lg:shadow-xl shadow-gray-500  ${formatBackground()}`}
    >
      <Topbuttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units setUnits={setUnits} />

      {weather && (
        <div>
          <TimeandLocation weather={weather} />
          <Temperatures weather={weather} />

          {/* <Forecast title="hourly forecast" />
          <Forecast title="daily forecast" /> */}
        </div>
      )}
    </div>
  );
}

export default App;
