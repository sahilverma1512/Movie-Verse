import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Header() {
  const [toggle, setToggle] = useState(false);
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
    // Yahan absoulte add karna h paheli div me navbar ko transparent karne ke liye
    <div className="absolute z-30 w-full md:mt-[-70px] bg-gradient-to-b from-[#1e2126] to-transparent flex justify-between items-center p-4 px-10">
      <img src={logo} className="h-[150px] w-[150px] md:w-[250px] md:h-[250px] " />
      <ul className=" hidden md:flex gap-8">
        {menu.map((item) => (
          <li className={`text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out
          ${item.id == 1 ? "bg-gray-700 text-white" : null}
          `}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="absolute right-10 md:hidden">
        <h2 className="text-white font-medium flex items-center bg-gray-700 rounded-md cursor-pointer px-3 pb-2 py-1 "
        onClick={()=>setToggle(!toggle)}
        >
          Home
          {!toggle ? (
            <IoIosArrowDown className="mt-1 ml-2" />
          ) : (
            <IoIosArrowUp className="mt-1 ml-2" />
          )}
        </h2>
        {toggle ? (
          <ul className="absolute bg-gray-700 w-[100px] md:w-[250px] text-center mt-3 left-0 right-0 ml-auto mr-auto rounded-md px-2">
            {menu.map((item) => (
              <li className="text-gray-400 text-[14px] md:text-[18px] font-medium cursor-pointer mb-3 mt-2 hover:bg-gray-600 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out">
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex gap-10">
        <IoSearch className="hidden md:block text-[35px] text-gray-300 cursor-pointer hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] rounded-md hover:text-white transition-all duration-500 ease-in-out " />
        <h2 className="hidden md:block px-[10px] text-[20px] text-gray-300 border-[2px] rounded-full border-white">
          S
        </h2>
      </div>
    </div>
  );
}

export default Header;
