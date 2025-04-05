"use client";

import React, { useState } from "react";
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
      <section className="p-4 mx-auto common-section mt-8  ">
        <div className="flex items-center justify-between p-2 lg:flex-row flex-col gap-3">
          <span className=" text-sm lg:text-xs text-[#7612fa] p-2 bg-[#f1e7fe] rounded-full">
            100% Money-BackGuarantee
          </span>

          <div className="flex items-center gap-2 border-[0.5px] border-gray-300 rounded-xl  ">
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
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  border-[1px] border-gray-800 rounded-lg overflow-hidden">
          <div className="flex   border-[1px] border-gray-400 px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold text-[#15be8e]">Free Forever</h1>
              <p className="text-para text-center">Best for personal use</p>
            </div>

            <div className="space-y-3  ">
              <h1 className="text-6xl uppercase font-bold text-[#15be8e]">
                Free
              </h1>
              <button className="p-2 hover:bg-[#40caa3] bg-[#15be8e] text-lg text-white font-bold rounded-lg w-full">
                Free forever
              </button>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">key features :</h1>

              <ul className="flex flex-col gap-2 mt-2 text-gray-600 ">
                {features.map((val, indx) => (
                  <li key={indx} className="text-sm ">
                    ✔️ {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* div 2 */}

          <div className="flex   border-[1px] border-gray-400 px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold text-[#fa12e3]">Unlimited</h1>
              <p className="text-para text-center">Best for personal use</p>
            </div>

            <div className="space-y-3  ">
              <h1 className="text-6xl uppercase font-bold text-[#fa12e3]">
                $7
              </h1>
              <button className="p-2 hover:bg-[#fb4dea] bg-[#fa12e3] text-lg text-white font-bold rounded-lg w-full">
                Get Started
              </button>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">
                Everything in Free Forever plus:
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

          {/* div 3 */}
          <div className="flex   border-[1px] border-gray-400 px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl flex items-end justify-center gap-2 font-bold text-[#1f7cff]">
                Business{" "}
                <span className="text-xs   bg-[#1f7cff] p-1 px-3  font-semibold rounded-full text-white ">
                  Popular
                </span>
              </h1>
              <p className="text-para text-center">Best for mid-sized teams</p>
            </div>

            <div className="space-y-3  ">
              <h1 className="text-6xl uppercase font-bold text-[#1f7cff]">
                $12
              </h1>
              <button className="p-2 hover:bg-[#40caa3] bg-[#1f7cff] text-lg text-white font-bold rounded-lg w-full">
                Get started
              </button>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-sm font-bold">
                Everything in Unlimited, plus:
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

          {/* div 4 */}

          <div className="flex   border-[1px] border-gray-400 px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold text-[#15be8e]">Enterprise</h1>
              <p className="text-para text-center">Best for many large teams</p>
            </div>

            <div className="space-y-10 text-center ">
              <p className="text-para text-sm">
                Get a custom demo and see how ClickUp aligns with your goals.
              </p>
              <button className="p-2 mt-2 hover:bg-[#615f71] bg-[#1c1b20] text-lg text-white font-bold rounded-xl w-full">
                Contact Sales
              </button>
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
        </div>
      </section>
    </>
  );
};

export default PaymentSection;
