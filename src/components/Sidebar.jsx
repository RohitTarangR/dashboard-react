import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");

    const handleClick = (btn) => {
      setActiveBtn(btn);
    };


  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleAccordion2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
  };

  const toggleAccordion3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
  };

  return (
    <section className="h-[80vh]">
      <div className=" rounded">
        <div
          className={`flex items-center justify-between p-4 cursor-pointer hover:text-blue-500 transition duration-300 ${
            activeBtn === "dropdown1"
              ? "text-[#1677ff] bg-[#e6f5fe]"
              : "text-[#001428]"
          }`}
          onClick={() => {
            toggleAccordion1();
            handleClick("dropdown1");
          }}
        >
          <div className="">Sub nav 1 </div>
          <div className="transform">
            {isOpen1 ? <ArrowDropUp /> : <ArrowDropDown />}
          </div>
        </div>
        {isOpen1 && (
          <div className=" border-t border-gray-200 transition duration-300">
            <p
              className={` py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option1"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option1")}
            >
              option1
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option2"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option2")}
            >
              option2
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option3"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option3")}
            >
              option3
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option4"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option4")}
            >
              option4
            </p>
          </div>
        )}
      </div>
      <div className=" rounded">
        <div
          className={`flex items-center justify-between p-4 cursor-pointer hover:text-blue-500 transition duration-300 ${
            activeBtn === "dropdown2"
              ? "text-[#1677ff] bg-[#e6f5fe]"
              : "text-[#001428]"
          }`}
          onClick={() => {
            toggleAccordion2();
            handleClick("dropdown2");
          }}
        >
          <div className="">Sub nav 2</div>
          <div className="transform">
            {isOpen2 ? <ArrowDropUp /> : <ArrowDropDown />}
          </div>
        </div>
        {isOpen2 && (
          <div className=" border-t border-gray-200 transition duration-300">
            <p
              className={` py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option1"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option1")}
            >
              option1
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option2"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option2")}
            >
              option2
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option3"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option3")}
            >
              option3
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option4"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option4")}
            >
              option4
            </p>
          </div>
        )}
      </div>
      <div className=" rounded">
        <div
          className={`flex items-center justify-between p-4 cursor-pointer hover:text-blue-500 transition duration-300  ${
            activeBtn === "dropdown3"
              ? "text-[#1677ff] bg-[#e6f5fe]"
              : "text-[#001428]"
          }`}
          onClick={() => {
            toggleAccordion3();
            handleClick("dropdown3");
          }}
        >
          <div className="">Sub nav 3</div>
          <div className="transform">
            {isOpen3 ? <ArrowDropUp /> : <ArrowDropDown />}
          </div>
        </div>
        {isOpen3 && (
          <div className=" border-t border-gray-200 transition duration-300">
            <p
              className={` py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option1"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option1")}
            >
              option1
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option2"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option2")}
            >
              option2
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option3"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option3")}
            >
              option3
            </p>
            <p
              className={`py-2 px-4 hover:text-blue-500 cursor-pointer transition duration-300 ${
                activeBtn === "option4"
                  ? "text-[#1677ff] bg-[#e6f5fe]"
                  : "text-[#001428]"
              }`}
              onClick={() => handleClick("option4")}
            >
              option4
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
