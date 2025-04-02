"use client";

import React, { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";
import CompanyScroller from "./components/CompanyScroller";
// import samplevideo from "../public/sample.mp4"
import FeatureGrid from "./components/FeatureGrid";
import { HomeImagedata } from "./data.js";
const HomePage = () => {
  const ref = useRef();
  // state for section3

  const [data, setData] = useState({
    videoUrl: "/sample.mp4",
    videoNum: 1,
  });

  console.log(data.videoUrl);

  const handleVideoSwitch = (e, video, num) => {
    // console.log(e.target.nextSibling, num);
    if (data?.videoNum) {
      setData({ ...data, videoNum: num });
      gsap.from(e.target.nextSibling, {
        y: 50,
        opacity: "0",
        duration: 1,
      });
    }
  };

  return (
    <main className="min-h-screen w-full  space-y-10 ">
      {/* section 1  */}

      <section className="common-section space-y-8">
        <div className="flex    flex-col gap-5 md:gap-4  p-2 lg:gap-5  text-center justify-center items-center">
          <h1>The everything app,for work</h1>

          <h5>
            One app for projects, knowledge, conversations, and more. Get more
            done faster—together.
          </h5>

          <div className="flex flex-col items-center gap-2">
            <button className="text-lg py-3 lg:text-2xl lg:py-4  px-5 lg:px-18 gap-2  primary-btn  ">
              Get started.its FREE <FaArrowRightLong size={20} />
            </button>
            <h5 className=" text-sm  lg:text-md  text-[#7970ae]">
              Free Forever No Credit Card{" "}
            </h5>
          </div>
        </div>

        <div className=" bg-linear-to-r     relative  drop-shadow-[4px_3px_40px_rgb(81, 102, 130)]  lg:p-10  ">
          <img
            className=" w-full h-[60vh] object-cover blur-[0.1rem] hidden lg:block"
            src="https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png?fm=avif&q=50"
            alt=""
          />

          <div className="p-3   lg:drop-shadow-(--my-drop-shadow) w-full  border-[0.2px] border-[#b1b5c8] md:absolute md:w-[35%]  top-[-20px] bg-transparent lg:rounded-2xl  right-[-30px] bottom-0 blur-none  ">
            <div className=" bg-white rounded-2xl  text-center space-y-1 p-6">
              <h2 className="text-xl font-bold ">Set up your Workspace</h2>
              {/* <p className="font-semibold">
                Start with what you need, customize as you go.
              </p> */}

              <div className="w-full mt-3   ">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper p-2 "
                >
                  {HomeImagedata?.map((val, index) => (
                    <SwiperSlide key={index} className="">
                      <img
                        className="h-[50vh] w-full object-cover rounded-xl "
                        src={val}
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button className="primary-btn w-full   py-3 text-lg mt-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 py-7 common-section ">
        <h3>Trusted by the world's leading businesses</h3>

        <div>
          <CompanyScroller />
        </div>
      </section>

      <section className="common-section space-y-4 lg:p-10">
        <div className=" text-start lg:text-center space-y-2 px-3">
          <h3 className=" italic text-[#7815fa]">The all-in-one workspace</h3>
          <h2 className="text-start md:text-center">
            Do your most important work, faster
          </h2>
          <h5 className="text-xl  font-semibold">
            From campaigns to operations and more, this is just the tip of the
            iceberg.
          </h5>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7  lg:mt-10 ">
          <div className="mt-2 lg:py-15 ">
            <div className="space-y-2 p-3 flex items-start gap-1 ">
              <div className="flex flex-col items-start gap-1">
                <h3
                  className={` font-semibold cursor-pointer ${
                    data?.videoNum === 1 ? "text-[#f42ee8] " : "text-black "
                  }
                    `}
                  onClick={(e) => handleVideoSwitch(e, "", 1)}
                >
                  Launch any campaign
                </h3>

                <div
                  className={`${
                    data?.videoNum === 1 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <div className={` text-start px-1  `}>
                    From idea to execution, effortlessly plan, organize, and
                    track campaigns that deliver results.
                  </div>

                  <div className="lg:hidden">
                    <video
                      src={data.videoUrl}
                      autoPlay={true}
                      className="rounded-xl shadow-2xl"
                    >
                      <source src={data.videoUrl} />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 p-3 flex items-start gap-1 ">
              <div className="flex flex-col gap-1 items-start">
                <h3
                  className={` font-semibold  cursor-pointer ${
                    data?.videoNum === 2 ? "text-[#f42ee8] " : "text-black "
                  }
                    `}
                  onClick={(e) => handleVideoSwitch(e, "", 2)}
                >
                  Triage product issues
                </h3>
                <div
                  className={`${
                    data?.videoNum === 2 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <p className={`text-start px-1 `}>
                    Quickly identify, prioritize, and resolve critical issues to
                    keep your team, and users, on track.
                  </p>

                  <div className="lg:hidden">
                    <video
                      src={data.videoUrl}
                      autoPlay={true}
                      className="rounded-xl shadow-2xl"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 p-3 flex items-start gap-1 ">
              <div className="flex items-start flex-col gap-1">
                <h1
                  className={` text-xl  lg:text-2xl cursor-pointer ${
                    data?.videoNum === 3
                      ? "text-[#f42ee8] font-semibold"
                      : "text-black font-semibold"
                  }
                    `}
                  onClick={(e) => handleVideoSwitch(e, "", 3)}
                >
                  Maintain flawless operations
                </h1>
                <div
                  className={`${
                    data?.videoNum === 3 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <p className={`text-start  px-1 `}>
                    Streamline key processes to ensure your team operates at
                    peak efficiency.
                  </p>

                  <div className="lg:hidden">
                    <video
                      src={data.videoUrl}
                      autoPlay={true}
                      className="rounded-xl shadow-2xl"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <button className="secondary-btn">
              See all use cases{" "}
              <FaArrowRightLong size={14} className="mt-1" color="#ffffff" />
            </button>
          </div>

          <div className="col-span-2 hidden lg:block">
            <video autoPlay muted className="rounded-xl shadow-2xl">
              <source src={data.videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <FeatureGrid />

      {/* section 5 */}

      <section className="lg:w-[70%] mx-auto  bg-[#000000] overflow-hidden rounded-xl  grid grid-cols-1  lg:grid-cols-2 gap-2  ">
        <div className=" p-7 lg:p-9  text-white flex flex-col items-start gap-6">
          <span className="flex items-center   ">
            <img
              className="h-10"
              src="https://clickup.com/assets/brand/logo-v3-clickup-dark.svg"
              alt=""
            />
          </span>
          <h2 className="text-start">Supercharge your productivity</h2>

          <p className=" text-lg leading-tight">
            Organize tasks, collaborate on docs, track goals, and streamline
            team communication—all in one place, enhanced by AI.
          </p>

          <button className="text-lg  px-5 gap-4  primary-btn  ">
            Get started. It's FREE <GoArrowRight size={20} />
          </button>
        </div>

        <div className=" flex items-end justify-end">
          <div className="flex w-[80%] ">
            <img
              src="https://images.ctfassets.net/w8fc6tgspyjz/48U3fEhpi2LVBEmCuC4hF/bf29abf01c4e8633048df708c51c8b97/supercharge-your-productivity.png?fm=avif&q=50"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* footer */}
    </main>
  );
};

export default HomePage;
