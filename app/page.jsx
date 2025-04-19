"use client";

import React from "react";

import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import CompanyScroller from "./components/CompanyScroller";
import FeatureGrid from "./components/FeatureGrid";
import MainSection from "./components/MainSection";
import VideoSection from "./components/VideoSection";
import HoverVideoSection from "./components/HoverVideoSection";
import AnimateContent from "./utils/AnimateContent";
import AnimateButton from "./utils/AnimateButton";
const HomePage = () => {
  return (
    <main className="min-h-screen w-full  space-y-10 ">
      {/* section 1  */}

      <MainSection />

      {/* section 2  */}

      <CompanyScroller />

      {/* section 3  */}
      <VideoSection />

      {/* section 4 */}
      <FeatureGrid />

      <HoverVideoSection />

      {/* section 5 */}

      <AnimateContent>

      <section className="lg:w-[70%] mx-auto  mt-6 bg-gradient-to-r from-gray-500 to-black overflow-hidden rounded-xl  grid grid-cols-1  sm:grid-cols-2 gap-2  ">
        <div className=" p-7 lg:p-9  text-white flex flex-col items-start gap-6">
          <AnimateContent>

          <span className="flex items-center   ">
            <img
              className="h-10"
              src="https://clickup.com/assets/brand/logo-v3-clickup-dark.svg"
              alt=""
            />
          </span>
          </AnimateContent>

          <AnimateContent>

          <h2 className="text-start text-white">
            Supercharge your productivity
          </h2>
          </AnimateContent>

          <AnimateContent>

          <p className=" text-lg leading-tight">
            Organize tasks, collaborate on docs, track goals, and streamline
            team communication—all in one place, enhanced by AI.
          </p>
          </AnimateContent>


          <AnimateButton className="text-lg  px-5 py-3 gap-4  primary-btn  ">
            Get started. It's FREE <GoArrowRight size={20} />
          </AnimateButton>
        </div>

        <div className=" flex items-end justify-end">

          <AnimateContent className="flex w-[80%] ">
            <img
              src="https://images.ctfassets.net/w8fc6tgspyjz/48U3fEhpi2LVBEmCuC4hF/bf29abf01c4e8633048df708c51c8b97/supercharge-your-productivity.png?fm=avif&q=50"
              alt=""
            />
          </AnimateContent>
        </div>
      </section>
      </AnimateContent>

    </main>
  );
};

export default HomePage;
