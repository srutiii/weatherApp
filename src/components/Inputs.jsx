import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const handleClick = () => {
    if (city) setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div className="flex flex-row justify-center items-center space-x-4 mt-10">
      <div className="flex flex-row justify-center items-center space-x-4 w-3/4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          placeholder="search for city..."
          className="text-lg font-light w-full p-2 focus:outline-none capitalize placeholder:lowercase rounded-xl"
        />
        <button onClick={handleClick}>
          <UilSearch
            size={25}
            className="text-white transition-all ease-out hover:scale-150 cursor-pointer"
          />
        </button>
        <button onClick={handleLocation}>
          <UilLocationPoint
            size={25}
            className="text-white transition-all ease-out hover:scale-150 cursor-pointer"
          />
        </button>
      </div>

      <div className="w-1/4 flex flex-row items-center justify-center text-white font-light ">
        <button
          onClick={handleUnits}
          name="metric "
          className="transition-all ease-out hover:scale-150 cursor-pointer"
        >
          °C
        </button>
        <p className="mx-2">|</p>
        <button
          onClick={handleUnits}
          name="imperial"
          className="transition-all ease-out hover:scale-150 cursor-pointer"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
