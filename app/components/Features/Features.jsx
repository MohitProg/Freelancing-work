"use client";

import { dataArray } from "@/app/data";
import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import { GoArrowUpRight } from "react-icons/go";
import React, { useEffect, useState } from "react";
import AnimateImage from "@/app/utils/AnimateImage";
import AnimateLink from "@/app/utils/AnimateLink";
import { Clock, RotateCcw, Zap } from "lucide-react";
import { MdAddTask } from "react-icons/md";

const Features = ({ slug }) => {
  console.log(slug);

  const templates = [
    {
      title: "Sprint",
      description: "Get the sprint template.",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Simple Sprint",
      description: "Get the simple sprint template.",
      icon: <RotateCcw className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Agile Management",
      description: "Get the agile management template.",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
    },
  ];

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

                <AnimateButton className="text-lg mx-auto py-3 lg:text-2xl lg:py-3 px-5 lg:px-12 gap-2 primary-btn flex items-center">
                  Get started. It's FREE
                </AnimateButton>
              </div>
            </div>
          </section>

          {/* scetion 2 for main content  */}

          <section className="w-[95%] mx-auto p-2   grid grid-cols-8 gap-4 ">
            <div className="col-span-2 sticky top-[10%] common-border common-backgroundGredient   w-full   shadow-xl  rounded-xl   h-[90vh] p-2  overflow-hidden flex flex-col items-center  justify-start">
              <div className="  top-[5%]  max-h-[90vh] overflow-y-scroll  left-[7%] bg-primary w-full   *  common-border drop-shadow-2xl rounded-xl">
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

            <div className="col-span-6  px-8 flex   min-h-[130vh]  flex-col gap-8 ">
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

                  <div className="bg-gradient-to-tr from-purple-800 rounded-xl overflow-hidden to-purple-300   p-2 ">
                    <div className=" w-full relative  h-[40vh]  rounded-2xl  ">
                      <AnimateImage
                        className="object-cover object-center"
                        fill
                        alt="Please wait "
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
                  </div>
                </div>
              </AnimateContent>

              <AnimateContent>
                <div className="grid grid-cols-2  drop-shadow-xl  gap-3 bg-primary p-4  common-border rounded-xl">
                  <div className="bg-gradient-to-tr from-purple-800 rounded-xl overflow-hidden to-purple-300   p-2 ">
                    <div className=" w-full relative  h-[40vh]  rounded-2xl  ">
                      <AnimateImage
                        className="object-cover object-center"
                        fill
                        alt="Please wait "
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
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

                  <div className="bg-gradient-to-tr from-purple-800 rounded-xl overflow-hidden to-purple-300   p-2 ">
                    <div className=" w-full relative  h-[40vh]  rounded-2xl  ">
                      <AnimateImage
                        className="object-cover object-center"
                        fill
                        alt="Please wait "
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
                  </div>
                </div>
              </AnimateContent>
            </div>
          </section>

          {/* section 3 for common content  */}

          <section className="py-20 text-center  space-y-6">
            <h2>Start with a template, then make it your own.</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {templates.map((item, idx) => (
                <div
                  key={idx}
                  className="common-border  rounded-xl px-6 py-10 shadow-sm hover:shadow-md transition bg-white/70 backdrop-blur-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Features;
