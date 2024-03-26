import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeandLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center text-white font-light text-base lg:text-xl my-6">
        <p>{ formatToLocalTime(dt, timezone) }</p>
      </div>
      <div className="text-white text-3xl font-medium flex justify-center items-center my-3">
        <p>
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeandLocation;
