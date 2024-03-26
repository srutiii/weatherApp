import React from "react";

function Forecast({ title }) {
  return (
    <div>
      <div className="flex justify-start items-center text-white mt-5 w-full">
        <p className="uppercase  font-medium">{title}</p>
      </div>
      <hr className="w-full my-2" />
      <div className="flex items-center justify-between text-white w-full md:space-x-4">
        <div className="flex flex-col items-center justify-center text-sm">
          <p>04:33 PM</p>
          <img
            src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-cute-sun-png-element-png-image_4387392.jpg"
            alt=""
            className="w-12 my-1"
          />
          <p>22°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <p>04:33 PM</p>
          <img
            src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-cute-sun-png-element-png-image_4387392.jpg"
            alt=""
            className="w-12 my-1"
          />
          <p>22°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <p>04:33 PM</p>
          <img
            src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-cute-sun-png-element-png-image_4387392.jpg"
            alt=""
            className="w-12 my-1"
          />
          <p>22°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <p>04:33 PM</p>
          <img
            src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-cute-sun-png-element-png-image_4387392.jpg"
            alt=""
            className="w-12 my-1"
          />
          <p>22°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <p>04:33 PM</p>
          <img
            src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-cute-sun-png-element-png-image_4387392.jpg"
            alt=""
            className="w-12 my-1"
          />
          <p>22°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
