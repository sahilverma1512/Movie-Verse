import React from "react";

import { Footer } from "flowbite-react";

export function Component() {
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "TV",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "News",
    },
    {
      id: 6,
      name: "Hubs",
    },
  ];
  return (
    <Footer container className="bg-[#1e2126] border-4 border-gray-700">
      <Footer.Copyright
        by="Made with ♥️ By Sahil Verma"
        year={2025}
        className="text-[15px] flex justify-center "
      />

      <div className="text-white flex md:gap-10 justify-evenly">
        <h4 className="text-gray-500 font-medium cursor-pointer hover:text-gray-300 transition-all duration-200 ease-linear">About</h4>
        <h4 className="text-gray-500 font-medium cursor-pointer hover:text-gray-300 transition-all duration-200 ease-linear">Privacy</h4>
        <h4 className="text-gray-500 font-medium  cursor-pointer hover:text-gray-300 transition-all duration-200 ease-linear">Licensing</h4>
        <h4 className="text-gray-500 font-medium  cursor-pointer hover:text-gray-300 transition-all duration-200 ease-linear">Contact</h4>
      </div>

      {/* <div>
      <ul className=" hidden md:flex gap-8">
        {menu.map((item) => (
          <li className={`text-gray-400 text-[14px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out
          ${item.id == 1 ? "bg-gray-700 text-white" : null}
          `}>
            {item.name}
          </li>
        ))}
      </ul>
      </div> */}
    </Footer>
  );
}

export default Component;
