"use client";

import React, { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
const VideoSection = () => {
  const [data, setData] = useState({
    videoUrl: "/sample.mp4",
    videoNum: 1,
  });

  console.log(data);

  const handleVideoSwitch = (e, video, num) => {
    if (data?.videoNum) {
      setData({ videoUrl: video, videoNum: num });
      gsap.from(e.target.nextSibling, {
        y: 30,
        opacity: "0",
        filter:"blur(2px)",
        duration: 0.6,
      });
    }
  };
  return (
    <>
      <section className="common-section space-y-4 lg:p-10">
        <div className=" text-start lg:text-center space-y-2 px-3">
          <h3 className=" italic text-[#7815fa] text-center">The all-in-one workspace</h3>
          <h2 className="text-start md:text-center">
            Do your most important work, faster
          </h2>
          <p className="primary-para">
            From campaigns to operations and more, this is just the tip of the
            iceberg.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7  lg:mt-10 ">
          <div className="mt-2 lg:py-15 ">
            <div className="space-y-2 p-3 flex items-start gap-1 ">
              <div className="flex flex-col items-start gap-1">
                <h3
                  className={` text-black text-xl font-semibold cursor-pointer ${
                    data?.videoNum === 1 ? "text-[#f42ee8] " : "text-black "
                  }
                      `}
                  onClick={(e) => handleVideoSwitch(e, "/sample.mp4", 1)}
                >
                  Launch any campaign
                </h3>

                <div
                  className={`${
                    data?.videoNum === 1 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <div className={` text-start text-sm text-para px-1  `}>
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
                  className={`text-black text-xl font-semibold  cursor-pointer ${
                    data?.videoNum === 2 ? "text-[#f42ee8] " : "text-black "
                  }
                      `}
                  onClick={(e) => handleVideoSwitch(e, "./video/video1.mp4", 2)}
                >
                  Triage product issues
                </h3>
                <div
                  className={`${
                    data?.videoNum === 2 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <p className={`text-start text-sm px-1 text-para `}>
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
                  className={` text-xl   font-semibold cursor-pointer ${
                    data?.videoNum === 3
                      ? "text-[#f42ee8] font-semibold"
                      : "text-black font-semibold"
                  }
                      `}
                  onClick={(e) => handleVideoSwitch(e, "./video/video2.mp4", 3)}
                >
                  Maintain flawless operations
                </h1>
                <div
                  className={`${
                    data?.videoNum === 3 ? "block" : "hidden"
                  } space-y-4`}
                >
                  <p className={`text-start text-para  px-1 `}>
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

            <button className="secondary-btn mt-10 ml-3">
              See all use cases{" "}
              <FaArrowRightLong size={14} className="mt-1" color="#ffffff" />
            </button>
          </div>

          <div className="col-span-2 hidden lg:block ">
            <video src={data.videoUrl} autoPlay muted className="rounded-xl shadow-2xl">
             
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
