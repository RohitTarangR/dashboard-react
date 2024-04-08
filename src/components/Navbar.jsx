import React, { useState } from 'react'

const Navbar = () => {

  const [activeBtn, setActiveBtn] = useState("")

  const handleClick = (btn) =>{
    setActiveBtn(btn)
  }

  return (
    <>
      <section className="bg-[#001428] flex justify-between px-12 items-center h-14">
        <div className="bg-[#324554] h-7 w-[120px] rounded-md"></div>
        <div className="flex text-gray-300 text-sm">
          <p className={`p-5 hover:text-white cursor-pointer ${activeBtn === "nav1" ? "bg-[#1677ff]" : "bg-[#001428]"}`} onClick={()=>handleClick('nav1')}>nav 1</p>
          <p className={`p-5 hover:text-white cursor-pointer ${activeBtn === "nav2" ? "bg-[#1677ff]" : "bg-[#001428]"}`} onClick={()=>handleClick('nav2')}>nav 2</p>
          <p className={`p-5 hover:text-white cursor-pointer ${activeBtn === "nav3" ? "bg-[#1677ff]" : "bg-[#001428]"}`} onClick={()=>handleClick('nav3')}>nav 3</p>
        </div>
      </section>
    </>
  );
}

export default Navbar