import React from "react";
import CompanyScroller from "../../CompanyScroller";
import Image from "next/image";
import AnimateImage from "@/app/utils/AnimateImage";

const GenChartUi = () => {
  return (
    <>
      <CompanyScroller />

      <section className=" px-4 md:px-16 ">
        <div className="text-center mb-16">
          <h2>Here's how they work</h2>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Set up your Gantt
            </h3>
            <p className="text-para max-w-md">
              In one click, turn entire projects into timelines then color code
              any section you see. It's a great way to grasp your project
              workflow and dependencies.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div
              style={{
                filter:
                  "drop-shadow(0 4px 10px rgba(255, 255, 255, 0.4)) drop-shadow(0 6px 15px rgba(255, 105, 180, 0.493))",
              }}
              className=" w-full relative h-[40vh]  rounded-xl   overflow-hidden "
            >
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-1">
            <div
              style={{
                filter:
                  "drop-shadow(0 4px 10px rgba(255, 255, 255, 0.4)) drop-shadow(0 6px 15px rgba(255, 105, 180, 0.493))",
              }}
              className=" w-full relative h-[40vh]  rounded-xl   overflow-hidden "
            >
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="order-2 px-4">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Get yourself organized
            </h3>
            <p className="text-para max-w-md">
              You can organize your Gantt any number of ways. Quickly
              restructure your views with filters like <strong>Due Date</strong>
              , <strong>Assignees</strong>, and <strong>Priority</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenChartUi;
