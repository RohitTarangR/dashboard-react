import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from "./ContentArea";

const MainContent = () => {
  return (
    <>
      <section className="flex text-sm">
        <div className="w-52 p-5">
          <Sidebar />
        </div>
        <div className="w-full p-5 bg-[#f4f4f5]">
          <div className="flex space-x-3">
            <p className="text-gray-400">Home </p>
            <span className="text-gray-400"> / </span>
            <p className="text-gray-400">List </p>
            <span className="text-gray-400">/</span>
            <p>App</p>
          </div>
          <div className="bg-white h-[74.2vh] mt-5  rounded-lg">
            <ContentArea />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent