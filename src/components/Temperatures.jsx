import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function Temperatures({
  weather: {
    main,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center text-sky-400 text-xl py-2 ">
        <p>{main}</p>
      </div>

      <div className="flex flex-col items-center justify-center text-white py-3 ">
        <div className="flex ">
          <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
          <p className="text-5xl py-5">{Math.round(temp)}°</p>
        </div>

        <div className="flex flex-row justify-between items-center   space-x-5">
          <div className="flex items-center justify-start font-light text-sm">
            <UilTemperature size={18} className="mr-1" />
            <p>
              Real Feel:{" "}
              <span className="font-semibold">{Math.round(feels_like)}°</span>
            </p>
          </div>
          <div className="flex items-center justify-start font-light text-sm">
            <UilTear size={18} className="mr-1" />
            <p>
              Humidity: <span className="font-semibold">{humidity}%</span>
            </p>
          </div>
          <div className="flex items-center justify-start font-light text-sm">
            <UilWind size={18} className="mr-1" />
            <p>
              Wind:{" "}
              <span className="font-semibold">{speed.toFixed()} km/hr</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center text-sm font-light py-2 text-white space-x-1">
        <UilSun />
        <p>
          Rise:{" "}
          <span className="font-semibold">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="px-2">|</p>

        <UilSunset />
        <p>
          Set:{" "}
          <span className="font-semibold">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="px-2">|</p>

        <UilArrowUp />
        <p>
          High: <span className="font-semibold">{Math.round(temp_max)}°</span>
        </p>
        <p className="px-2">|</p>

        <UilArrowDown />
        <p>
          Low: <span className="font-semibold">{Math.round(temp_min)}°</span>
        </p>
      </div>
    </div>
  );
}

export default Temperatures;
