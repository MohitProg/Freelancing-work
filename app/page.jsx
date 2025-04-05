"use client";

import React from "react";

import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import CompanyScroller from "./components/CompanyScroller";
import FeatureGrid from "./components/FeatureGrid";
import MainSection from "./components/MainSection";
import VideoSection from "./components/VideoSection";
import HoverVideoSection from "./components/HoverVideoSection";
const HomePage = () => {
  return (
    <main className="min-h-screen w-full  space-y-10 ">
      {/* section 1  */}

      <MainSection />

      {/* section 2  */}
      <section className="p-3 py-7 common-section ">
        <p className=" text-center primary-para ">
          Trusted by the world's leading businesses
        </p>

        <div>
          <CompanyScroller />
        </div>
      </section>

      {/* section 3  */}
      <VideoSection />

      {/* section 4 */}
      <FeatureGrid />

      <HoverVideoSection />

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
