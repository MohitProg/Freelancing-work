"use client";

import React, { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CompanyScroller from "../components/CompanyScroller";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const LandingPage = () => {
  // animation ref for screent shot on home screen
  const ScreenAnimeRef = useRef(null);
  console.log(ScreenAnimeRef);

  useGSAP(() => {
    gsap.from(ScreenAnimeRef.current, {
      y: 700,
      opacity: 0,
      duration: 2,
    });
  });

  return (
    <>
      <main>
        {/* section 1 */}

        <section className=" p-3   relative    ">
          {/* animation div  */}
          <div
            ref={ScreenAnimeRef}
            className=" w-full  p-2 lg:w-[80%]     h-screen overflow-hidden relative  mx-auto rounded-xl   "
          >
            <img
              className="w-[80%] md:w-[70%] lg:w-[55%]  shadow-2xl shadow-black absolute bottom-0 sm:left-0  right-0 mx-auto z-50 rounded-t-xl "
              src="https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png"
              alt=""
            />
            <img
              className="  md:w-[60%] lg:w-[40%] shadow-black shadow-2xl absolute bottom-0 left-0  mx-auto rounded-xl"
              src="https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png?fm=avif&q=50"
              alt=""
            />
            <img
              className=" w-[90%] lg:block hidden lg:w-[40%] md:w-[60%] shadow-black shadow-2xl absolute bottom-0  right-0 mx-auto rounded-xl"
              src="https://images.ctfassets.net/w8fc6tgspyjz/3Rdwyyo4HE9409nPMNTN1y/1132f37adc35603d75741af29d6b7ea3/home-tabs-v3-time-tracking.png"
              alt=""
            />
          </div>

          <div className="flex  absolute   top-[10%]  left-0 right-0  z-50    flex-col gap-5 md:gap-4  lg:gap-5  text-center justify-center items-center">
            <h1>The everything app,for work</h1>

            <p>
              <strong> Get everyone working in a single platform</strong>{" "}
              designed to manage any type of work
            </p>

            <div className="flex flex-col items-center gap-2">
              <Link
                href={"/"}
                className="  text-lg py-3 lg:text-2xl lg:py-4  px-5 lg:px-18 gap-2  primary-btn    "
              >
                Get started.its FREE <FaArrowRightLong size={16} />
              </Link>
              {/* <p className=" font-semibold text-[#7970ae]">
                Free Forever No Credit Card{" "}
              </p> */}
            </div>
          </div>
        </section>

        {/* section 2  */}

        <section className="common-section ">
          <h3>Trusted by 3 millions+ teams</h3>

          {/* company features */}

          <div className=" mx-auto">
            <CompanyScroller />
          </div>
        </section>

        {/* section 3  */}

        <section className="common-section  ">
          <h2>Everthing your team is looking for</h2>
          <h5>
            <strong>
              ClickUp exceptional flexiability can handle any type of work
            </strong>
            .And we never stop innovating
          </h5>

          <div className=" grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-3  md:mt-12 gap-9 mt-3 sm:p-5 ">
            {/* image  div 1 */}
            <div className="bg-gradient-to-b z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative from-[#c00ff9]   flex flex-col justify-end rounded-xl to-[#5037e6]  ">
              {/* info div  */}
              <div className=" px-5 py-8 absolute  top-0 bottom-0 left-0 right-0 flex text-start flex-col gap-2 ">
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
            </div>
            {/* image div 2  */}
            <div className="bg-gradient-to-b z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative from-[#4da7fa]    flex flex-col justify-around rounded-xl to-[#604cef]  ">
              {/* info div  */}
              <div className=" px-6 py-8   flex text-start flex-col gap-2 ">
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
            </div>

            <div className="bg-[#252a31] z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex text-start flex-col gap-2 ">
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
            </div>

            <div className="col-span-2 hidden md:flex   items-center justify-between bg-gradient-to-b from-[#c40df9]  via-[#951ef1]  to-[#5332de] p-8 rounded-xl gap-4 ">
              <div className="flex flex-col gap-3 items-start ">
                <div className="text-start flex flex-col gap-2 ">
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
                <div className="text-start flex flex-col gap-2 ">
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
            </div>

            <div className="bg-[#252a31] z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex text-start flex-col gap-2 ">
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
            </div>

            <div className="bg-gradient-to-b from-[#eb3f9b] via-[#f95a68] to-[#ff674e] z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex text-start flex-col gap-2 ">
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
            </div>
            <div className="col-span-2  hidden md:flex bg-image   justify-between bg-gradient-to-b from-[#0c1947]  via-[#0c1947]  to-[#0c1947] rounded-xl gap-4 ">
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

             
            </div>
          </div>
        </section>

        <footer className=" py-5 lg:mt-30 mt-10  px-10  w-full lg:w-[80%]  mx-auto gap-2   flex  flex-col  md:flex-row lg:justify-between       ">
          <div className="flex items-center gap-1 justify-center">
            <img
              className="h-4"
              src="https://clickup.com/assets/brand/logo-v3-clickup-symbol-only.svg"
              alt=""
            />{" "}
            <span className="text-sm font-bold">
              The Everthing app for work
            </span>
          </div>

          <ul className="flex text-gray-500 text-sm flex-row-reverse  items-center  justify-center md:text-sm  gap-4 ">
            <li>@ 2025 Clickup</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>terms</li>
          </ul>
        </footer>
      </main>
    </>
  );
};

export default LandingPage;
