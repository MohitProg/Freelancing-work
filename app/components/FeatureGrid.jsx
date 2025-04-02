import ArrayData from "../data";
import React from "react";
import { CiSearch } from "react-icons/ci";

const FeatureGrid = () => {
  return (
    <>
      <section className=" w-full space-y-4 mt-6 py-10  bg-[#f8f2ff]">
        <div className=" text-center space-y-2  lg:p-10 px-3 py-10 lg:w-[60%] mx-auto">
          <h3 className="lg:text-xl  text-lg text-center italic text-[#7815fa]">
            Features
          </h3>
          <h2>Every feature your team needs to complete work faster</h2>
          <p className="text-xl  font-semibold">
            100+ features to take productivity to the next level.
          </p>

          <button className="secondary-btn mx-auto">
            Discover all features
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 grid-rows-6 gap-3 p-4 w-full   ">
          {ArrayData.map((value, index) => {
            //  remember index not 13 14 27 28
            if ([13, 14, 27, 28].includes(index)) {
              return (
                <div
                  key={index}
                  className="col-span-2 row-span-2 cursor-pointer  p-4 py-8 hover:outline-2 hover:outline-[#7815fa] hover:text-[#7815fa] flex flex-col  gap-1  rounded-xl justify-center items-center  bg-white shadow-xl"
                >
                  <div className="flex  gap-2 ">
                    {<value.icon size={28} />}
                    <span className="text-lg font-semibold ">
                      {value?.title}
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="  p-4 py-8 hover:outline-2  cursor-pointer hover:outline-[#7815fa] hover:text-[#7815fa] flex flex-col  gap-1  rounded-xl justify-center items-center  bg-white shadow-xl"
              >
                {<value.icon size={28} />}
                <span className="text-lg ">{value?.title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeatureGrid;
