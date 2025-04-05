"use client";
import React, { useRef, useState } from "react";

const HoverVideoSection = () => {
  const videoArray = [
    {
      title: "",
      video: "./video/video1.mp4",
    },
    {
      title: "",
      video: "./video/video2.mp4",
    },
    {
      title: "",
      video: "./video/video2.mp4",
    },

    {
      title: "",
      video: "./video/video2.mp4",
    },
  ];
  // ref for video
  const videoRef = useRef([]);

  // state for selected video

  const [playvideoIndex, setPlayvideoIndex] = useState();

  const HandleOnHover = (index) => {
    // checking current video ref

    let hovervideo = videoRef.current[index];

    if (hovervideo) {
      setPlayvideoIndex(index);

      hovervideo?.play();
    }
  };

  const HandleOnleave = (index) => {
    let hovervideo = videoRef.current[index];
    console.log(hovervideo);

    if (hovervideo) {
      setPlayvideoIndex(null);
      hovervideo.pause();
    }
  };

  return (
    <>
      <section className="common-section">
        <h1>Common video section</h1>

        <div className="w-full  flex flex-col   overflow-hidden  md:flex-row items-center justify-start shadow rounded-xl ">
          {videoArray.map((val, ind) => (
            <div
              key={ind}
              onMouseOver={() => HandleOnHover(ind)}
              onMouseLeave={() => HandleOnleave(ind)}
              className={`md:w-[30%] transition-all  ease-in duration-300  w-full md:h-[60vh]  overflow-hidden relative ${
                playvideoIndex === ind
                  ? " h-[40vh] md:w-[100%]"
                  : " h-[20vh] md:w-[30%]"
              }`}
            >
              <video
                ref={(el) => (videoRef.current[ind] = el)}
                src={val.video}
                className="h-full w-full absolute top-0 bottom-0 left-0 right-0 object-cover"
                muted
              >
                <source />
              </video>

              <div
                className={`absolute  inset-0 transition-all ease-in-out duration-300   ${
                  playvideoIndex === ind ? "bg-black/0" : "bg-black/40"
                } bg-opacity-50`}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HoverVideoSection;
