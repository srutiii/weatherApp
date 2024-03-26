import React, { useState } from "react";

function Topbuttons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Seoul",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex justify-around items-center my-6">
      {cities.map((city) => (
        <button
          onClick={() => setQuery({ q: city.title })}
          key={city.id}
          className="font-medium text-white text-sm lg:text-lg"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Topbuttons;
