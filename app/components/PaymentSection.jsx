"use client";

import React, { useState } from "react";
import AnimateContent from "../utils/AnimateContent";
import AnimateButton from "../utils/AnimateButton";
const features = [
  "Task Creation",
  "Task Assignment",
  "Due Date Tracking",
  "Basic Reporting",
  "Team Collaboration",
  "Commenting on Tasks",
  "Project Dashboard",
  "Priority Management",
  "File Attachments",
  "Progress Tracking",
];
const PaymentSection = () => {
  // state for money change
  const [timeQnt, setTimeQnt] = useState(false);

  return (
    <>
      <section className="p-4 mx-auto common-section   rounded-xl mt-8  ">
        <AnimateContent className="flex items-center justify-between p-2 lg:flex-row flex-col gap-3">
          <span className=" text-sm lg:text-xs text-[#7612fa] p-2 bg-[#f1e7fe] rounded-full">
            100% Money-BackGuarantee
          </span>

          <div className="flex items-center gap-2 common-border  bg-primary overflow-hidden rounded-xl  ">
            <button
              disabled={timeQnt ? true : false}
              onClick={() => setTimeQnt(!timeQnt)}
              className="p-2 px-3  text-sm bg-[#f1f1f9]"
            >
              Yearly
            </button>
            <button
              onClick={() => setTimeQnt(!timeQnt)}
              className="p-2 px-3 text-sm text-gray-500"
            >
              Monthly
            </button>
          </div>

          {/* section for payment  */}
        </AnimateContent>

        <AnimateContent className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4   gap-5 lg:gap-0 rounded-lg overflow-hidden">
          <div className="flex   common-border bg-primary  rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold ">Free Forever</h1>
              <p className="primary-para text-center">Best for personal use</p>
            </div>

            <div className="space-y-3  ">
              <h2 className="text-6xl uppercase font-bold ">Free</h2>
              <AnimateButton className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full">
                Free forever
              </AnimateButton>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">key features :</h1>

              <ul className="flex flex-col gap-2 mt-2 primary-para ">
                {features.map((val, indx) => (
                  <li key={indx} className="text-sm ">
                    ✔️ {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* div 2 */}

          <div className="flex    common-border bg-primary   rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold ">Unlimited</h1>
              <p className="primary-para text-center">Best for personal use</p>
            </div>

            <div className="space-y-3  ">
              <h2 className="text-6xl uppercase font-bold ">$7</h2>
              <AnimateButton className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full">
                Get Started
              </AnimateButton>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">
                Everything in Free Forever plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2  primary-para ">
                {features.map((val, indx) => (
                  <li key={indx} className="text-sm ">
                    ✔️ {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* div 3 */}
          <div className="flex  common-border bg-primary rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl flex items-end justify-center gap-2 font-bold ">
                Business{" "}
                <span className="text-xs   secondary-btn p-1 px-3  font-semibold rounded-full text-white ">
                  Popular
                </span>
              </h1>
              <p className="primary-para text-center">
                Best for mid-sized teams
              </p>
            </div>

            <div className="space-y-3  ">
              <h2 className="text-6xl uppercase font-bold ">$12</h2>
              <AnimateButton className="p-2  secondary-btn text-lg text-white font-bold rounded-lg w-full">
                Get started
              </AnimateButton>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">
                Everything in Unlimited, plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2 primary-para ">
                {features.map((val, indx) => (
                  <li key={indx} className="text-sm ">
                    ✔️ {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* div 4 */}

          <div className="flex   common-border bg-primary rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold ">Enterprise</h1>
              <p className="primary-para text-center">
                Best for many large teams
              </p>
            </div>

            <div className="flex flex-col gap-12 text-center ">
              <p className="text-para text-sm">
                Get a custom demo and see how ClickUp aligns with your goals.
              </p>
              <AnimateButton className="p-2 mt-2 secondary-btn text-lg text-white font-bold rounded-xl w-full">
                Contact Sales
              </AnimateButton>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">
                Everything in Business, plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2 text-gray-600 ">
                {features.map((val, indx) => (
                  <li key={indx} className="text-sm ">
                    ✔️ {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateContent>
      </section>
    </>
  );
};

export default PaymentSection;
