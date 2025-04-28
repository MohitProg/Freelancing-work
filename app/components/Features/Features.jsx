"use client";

import { dataArray } from "@/app/data";
import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import { GoArrowUpRight } from "react-icons/go";
import React, { useEffect, useState } from "react";
import AnimateImage from "@/app/utils/AnimateImage";
import AnimateLink from "@/app/utils/AnimateLink";
import { MdAddTask } from "react-icons/md";

const Features = ({ slug }) => {
  console.log(slug);

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (slug) {
      const data = dataArray[1].subData?.filter(
        (val) => val?.linKpath === slug
      );

      setMainData(data[0]);
    }
  }, [slug]);

  return (
    <>
      {mainData && (
        <main className="space-y-5">
          <section className=" relative common-backgroundGredient h-[40vh]">
            <div className="common-section ">
              <div className="text-center lg:w-[70%] mx-auto  flex flex-col gap-4">
                <AnimateContent>
                  <h1>{mainData.title}</h1>
                </AnimateContent>
                <AnimateContent>
                  <p className="primary-para  mx-auto lg:w-[80%]">
                    One app for projects, knowledge, conversations, and more.
                    Get more done faster—together.
                  </p>
                </AnimateContent>

                {/* <AnimateButton className="text-lg mx-auto py-3 lg:text-2xl lg:py-3 px-5 lg:px-12 gap-2 primary-btn flex items-center">
                  Get started. It's FREE
                </AnimateButton> */}
              </div>
            </div>

            {/* blur background  */}
            <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] h-30 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
          </section>

          {/* scetion 2 for main content  */}

          <section className="w-[95%] mx-auto p-2  grid grid-cols-8 gap-4 ">
            <div className="col-span-2  flex flex-col items-center  justify-start">
              <div className=" common-border common-backgroundGredient relative  w-full   shadow-xl  rounded-xl p-2 ">
                <div className="  top-[5%]   left-[7%] bg-primary w-full    common-border drop-shadow-2xl rounded-xl">
                  <h2 className="text-xl text-start p-2 ">Features</h2>

                  <div className=" flex flex-col px-2  gap-3  ">
                    {dataArray[1]?.subData?.map((val, ind) => (
                      <AnimateLink
                        key={ind}
                        href={val?.linKpath}
                        className="common-navlink text-sm  transition-colors duration-300 ease-in-out  py-3 border-b-[0.5px]  border-gray-400 hover:bg-gradient-to-r hover:from-[#33bbfd] hover:to-[#933afe] rounded-xl hover:text-white  font-medium "
                      >
                        <MdAddTask size={22} />
                        {val?.title}
                      </AnimateLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6  px-8 flex  flex-col gap-8 ">
              {/* info divs  */}

              <AnimateContent>
                <div className="grid grid-cols-2 gap-3   drop-shadow-xl bg-primary p-4  common-border rounded-xl">
                  <div className="p-3 flex flex-col gap-5 items-start justify-center ">
                    <h2 className="text-2xl ">
                      Comprehensive Attendance Tracking
                    </h2>
                    <ul className="text-para  list-none  text-[1.08rem] flex flex-col  gap-6">
                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Real-time tracking of employee clock-ins and clock-outs
                      </li>

                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Automatic calculation of total work hours, online hours,
                        active and inactive hours including overtime
                      </li>

                      <li className="flex items-start gap-3  leading-tight">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Detailed reports for individual and team attendance
                        patterns
                      </li>

                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Real-time tracking of employee clock-ins and clock-outs
                      </li>
                    </ul>
                  </div>

                  <div className=" w-full relative  rounded-2xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait "
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                </div>
              </AnimateContent>

              <AnimateContent>
                <div className="grid grid-cols-2  drop-shadow-xl  gap-3 bg-primary p-4  common-border rounded-xl">
                  <div className=" w-full relative  rounded-2xl    overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait "
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                  <div className="p-3 flex flex-col gap-5 items-start justify-center ">
                    <h2 className="text-2xl ">
                      Comprehensive Attendance Tracking
                    </h2>
                    <ul className="text-para  list-none  text-[1.08rem] flex flex-col  gap-6">
                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Real-time tracking of employee clock-ins and clock-outs
                      </li>

                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Automatic calculation of total work hours, online hours,
                        active and inactive hours including overtime
                      </li>

                      <li className="flex items-start gap-3  leading-tight">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Detailed reports for individual and team attendance
                        patterns
                      </li>

                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Real-time tracking of employee clock-ins and clock-outs
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateContent>

              <AnimateContent>
                <div className="grid grid-cols-2 gap-3   drop-shadow-xl bg-primary p-4  common-border rounded-xl">
                  <div className="p-3 flex flex-col gap-5 items-start justify-center ">
                    <h2 className="text-2xl ">
                      Comprehensive Attendance Tracking
                    </h2>
                    <ul className="text-para  list-none  text-[1.08rem] flex flex-col  gap-6">
                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Real-time tracking of employee clock-ins and clock-outs
                      </li>

                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Automatic calculation of total work hours, online hours,
                        active and inactive hours including overtime
                      </li>

                      <li className="flex items-start gap-3  leading-tight">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Detailed reports for individual and team attendance
                        patterns
                      </li>

                      <li className="flex items-start gap-3 leading-tight ">
                        <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                          <GoArrowUpRight color="#ffffff" size={18} />
                        </div>
                        Real-time tracking of employee clock-ins and clock-outs
                      </li>
                    </ul>
                  </div>

                  <div className=" w-full relative  rounded-2xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center hover:scale-105"
                      fill
                      alt="Please wait "
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                </div>
              </AnimateContent>
            </div>
          </section>

          {/* section 3 for common content  */}

          {/* <section className="common-section  p-2  py-20 ">
      <div className="flex flex-col     text-center">
        <h2>How we do it ?</h2>

        <p className="primary-para">
          Nurturing a productive, engaged, and balanced workforce. Get
          started by following these simple steps
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3  ">
        <div>

        </div>
      </div>
    </section> */}
        </main>
      )}
    </>
  );
};

export default Features;
