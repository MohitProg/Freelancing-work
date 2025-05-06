import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const BreakUI = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Pre-defined breaks </h2>
          <p className="primary-para ">
            Predefined breakd configuration you can decide for which user and
            which team which break and for how much time you want to assign
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Custom breaks</h2>
          <p className="primary-para ">
            Make your own customised breaks and assign it to team.
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Idle time breaks </h2>
          <p className="primary-para ">
            Automatic breaks , if the user system is in idle state then a break
            will automatically created as per the idle duration of the system,
            idle time is configurable admin can decide the duration of the idle
            time
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default BreakUI;
