"use client";

import React, { useEffect, useRef } from "react";

import CompanyScroller from "../components/CompanyScroller";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import HeroSection from "../components/landing/HeroSection";
import AnimateContent from "../utils/AnimateContent";

const LandingPage = () => {
  return (
    <>
      <main className="space-y-8">
        {/* section 1 */}
        <HeroSection />

        {/* section 2  */}

        <CompanyScroller />

        {/* section 3  */}

        <section className="common-section   flex flex-col gap-5 mt-4 ">
          <div className="flex flex-col gap-1">
            <AnimateContent>

            <h2>Everthing your team is looking for</h2>

            </AnimateContent>

            <AnimateContent>

            <p className="text-center primary-para">
              <strong>
                ClickUp exceptional flexiability can handle any type of work
              </strong>
              .And we never stop innovating
            </p>
            </AnimateContent>
          </div>

          <div className=" grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-3  md:mt-12 gap-9 mt-3 sm:p-5 ">
            {/* image  div 1 */}
            <AnimateContent className="bg-gradient-to-b  overflow-hidden  relative from-[#c00ff9]   flex flex-col justify-end rounded-xl to-[#5037e6]  ">
              {/* info div  */}
              <div className=" px-5 py-8 absolute  top-0 bottom-0 left-0 right-0 flex  items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  AI-powered productivity
                </h1>
                <p className="text-md  text-white font-semibold">
                  Get work done faster with the only AI-powered assisitant
                  tailored to your role{" "}
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://images.ctfassets.net/w8fc6tgspyjz/5sEQN5mm48tnX6kyqRXUBU/8377db6638b36ae5aa6bd29bbd708eda/AI-powered-productivity.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>
            {/* image div 2  */}
            <AnimateContent className="bg-gradient-to-b  overflow-hidden   relative from-[#4da7fa]    flex flex-col justify-around rounded-xl to-[#604cef]  ">
              {/* info div  */}
              <div className=" px-6 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  View work your way
                </h1>
                <p className="text-md  text-white font-semibold">
                  Instant switch between 15 views including list,board, and more
                </p>
              </div>

              {/* sample image div  */}

              <div className="  ">
                <img
                  src="https://clickup.com/assets/home-test/view-work-your-way.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>

            <AnimateContent className="bg-[#252a31] overflow-hidden   relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  Search Everything
                </h1>
                <p className="text-md  text-white font-semibold">
                  Find any file in ClickUp, a connected app, or your local
                  drive, from one place.
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://clickup.com/assets/home-test/search-everything.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>

            <AnimateContent className="col-span-2 hidden md:flex   items-center justify-between bg-gradient-to-b from-[#c40df9]  via-[#951ef1]  to-[#5332de] p-8 rounded-xl gap-4 ">
              <div className="flex flex-col gap-3 items-start ">
                <div className="items-start flex flex-col gap-2 ">
                  <h1 className="text-2xl font-bold text-white">
                    Plays Well with others
                  </h1>
                  <p className="text-md w-[70%] font-semibold text-white ">
                    Easily integrate with the tools you already use{" "}
                  </p>
                </div>

                <img
                  className="w-[80%]"
                  src="https://images.ctfassets.net/w8fc6tgspyjz/5eW6fJb73nNo4cjPCd45gT/737151fe3c8828de0aa775444040cd7e/clickup-integrations.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 items-start ">
                <div className="items-start flex flex-col gap-2 ">
                  <h1 className="text-2xl font-bold text-white">
                    Replaces them entirely
                  </h1>
                  <p className="text-md w-[70%] font-semibold text-white ">
                    Eliminate app sprawl and reduce software spend.
                  </p>
                </div>

                <img
                  className="w-[80%]"
                  src="https://images.ctfassets.net/w8fc6tgspyjz/5eW6fJb73nNo4cjPCd45gT/737151fe3c8828de0aa775444040cd7e/clickup-integrations.svg"
                  alt=""
                />
              </div>
            </AnimateContent>

            <AnimateContent className="bg-[#252a31]  overflow-hidden  relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  Search Everything
                </h1>
                <p className="text-md  text-white font-semibold">
                  Find any file in ClickUp, a connected app, or your local
                  drive, from one place.
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://clickup.com/assets/home-test/search-everything.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>

            <AnimateContent className="bg-gradient-to-b from-[#eb3f9b] via-[#f95a68] to-[#ff674e] overflow-hidden  relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  Stay ahead of what’s next
                </h1>
                <p className="text-md  text-white font-semibold">
                  Organize your work, reminders, and calendar events all from
                  your personalized Home.
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://clickup.com/assets/home-test/view-work-your-way.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>
            <AnimateContent className="col-span-2  hidden md:flex bg-image   justify-between bg-gradient-to-b from-[#0c1947]  via-[#0c1947]  to-[#0c1947] rounded-xl gap-4 ">
              <div className=" flex flex-col  px-10  justify-around p-3">
                <h1 className="text-2xl font-bold text-white">
                  Trusted by over 2,000,000 teams
                </h1>

                <div className="flex gap-10">
                  <div>
                    <h1 className="text-xl font-bold text-white">305M+</h1>
                    <span className="text-gray-300 font-semibold">
                      Tasks completed
                    </span>
                  </div>

                  <div>
                    <h1 className="text-xl font-bold text-white">305M+</h1>
                    <span className="text-gray-300 font-semibold">
                      Tasks completed
                    </span>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div>
                    <h1 className="text-xl font-bold text-white">305M+</h1>
                    <span className="text-gray-300 font-semibold">
                      Tasks completed
                    </span>
                  </div>

                  <div>
                    <h1 className="text-xl font-bold text-white">305M+</h1>
                    <span className="text-gray-300 font-semibold">
                      Tasks completed
                    </span>
                  </div>
                </div>

                <button className="bg-[#34416a61] hover:bg-[#373d72] text-md text-white flex  items-center  justify-center p-3 rounded-xl gap-2 font-semibold">
                  Join today for free <MdOutlineArrowRightAlt size={30} />
                </button>
              </div>
            </AnimateContent>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
