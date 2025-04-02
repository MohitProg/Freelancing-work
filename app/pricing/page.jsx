import React from "react";
import CompanyScroller from "../components/CompanyScroller";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { accordionData } from "../data.js";
const PricePage = () => {
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

  return (
    <main>
      {/* section 1  */}

      <section className="mx-auto container-center">
        <div className="p-3 w-full lg:w-[60%] mx-auto text-center  ">
          <h1 className=" text-3xl  sm:text-5xl lg:text-[3.2rem] sm:p-3 leading-tight font-bold">
            The best work solution, for the best price.
          </h1>

          <span className="text-sm text-[#8c93ad] ">
            Trusted by the world's leading businesses
          </span>
        </div>

        <CompanyScroller />
      </section>

      {/* payment section  */}

      <section className="p-4 mx-auto container-center mt-8  ">
        <div className="flex items-center justify-between p-2 lg:flex-row flex-col gap-3">
          <span className=" text-sm lg:text-xs text-[#7612fa] p-2 bg-[#f1e7fe] rounded-full">
            100% Money-BackGuarantee
          </span>

          <div className="flex items-center gap-2 border-[0.5px] border-gray-300 rounded-xl  ">
            <button className="p-2 px-3  text-sm bg-[#f1f1f9]">Yearly</button>
            <button className="p-2 px-3 text-sm text-gray-500">Monthly</button>
          </div>

          {/* section for payment  */}
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  border-[1px] border-gray-800 rounded-lg overflow-hidden">
          <div className="flex   border-[1px] border-gray-400 px-6 py-8 gap-5 flex-col ">
            <div className="">
              <h1 className="text-xl font-bold text-[#15be8e]">Free Forever</h1>
              <p className="text-lg">Best for personal use</p>
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
              <p className="text-lg">Best for personal use</p>
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
              <h1 className="text-xl flex items-end gap-2 font-bold text-[#1f7cff]">
                Business{" "}
                <span className="text-xs   bg-[#1f7cff] p-1 px-3  font-semibold rounded-full text-white ">
                  Popular
                </span>
              </h1>
              <p className="text-lg">Best for mid-sized teams</p>
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
              <p className="text-lg">Best for many large teams</p>
            </div>

            <div className="space-y-10 ">
              <h1 className="text-xs text-gray-500">
                Get a custom demo and see how ClickUp aligns with your goals.
              </h1>
              <button className="p-2 hover:bg-[#615f71] bg-[#1c1b20] text-lg text-white font-bold rounded-xl w-full">
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

      {/* section 3  */}

      <section className="flex  container-center flex-col gap-5  p-2 lg:p-8 py-12">
        <h1 className="  text-4xl  text-center lg:text-4xl font-bold ">
          Take your productivity to the next level
        </h1>

        <div className=" w-full sm:w-[90%] lg:w-[80%]  mx-auto bg-gradient-to-r shadow-lg from-[#fefffe] via-[#eefbef] to-[#ebfaec] p-5  rounded-xl">
          <span className="text-[#3da340] text-xs p-[0.5px] px-2 bg-[#edfced] rounded-full">
            ClickUp Assist
          </span>

          <div className="flex flex-col gap-3 lg:gap-1">
            <h1 className="text-3xl font-bold">Live training & support</h1>
            <p className="text-md">
              Personalized expert guidance for setup and success.
            </p>

            <ul className="flex flex-col gap-2 mt-2 text-gray-600  ">
              <li className="text-sm ">✔️ 2 hours of 1:1 expert time/month</li>
              <li className="text-sm ">✔️ 2 hours of 1:1 expert time/month</li>
              <li className="text-sm ">✔️ 2 hours of 1:1 expert time/month</li>
            </ul>
          </div>

          <div className="flex items-center gap-3 sm:flex-row flex-col   justify-between mt-6">
            <button className="bg-[#0c8911] p-2 lg:p-3 px-8 text-white rounded-xl font-bold lg:w-[40%]">
              Get ClickUp Assist
            </button>
            <button className="bg-[#c1e6c1] lg:w-[40%] p-2 lg:p-3 px-8  font-bold text-[#0c8911] rounded-xl">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* section 4 accordian  */}

      <section className="flex   container-center    flex-col gap-5  p-2  lg:p-8 py-12">
        <div className="lg:w-[80%] flex flex-col gap-2 text-center mx-auto ">
          <h1 className=" text-4xl lg:text-5xl font-bold">
            Frequently asked questions
          </h1>
          <p className="lg:w-[70%] w-[80%] mx-auto lg:text-lg text-gray-700 leading-tight">
            Find answers to your questions right here, and don't hesitate to
            contact us if you couldn't find what you're looking for.
          </p>
        </div>

        <div className="flex flex-col gap-6   ">
          {accordionData.map((val, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="shadow  rounded-xl"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className={"text-md p-2"}>
                  {val.title} ?
                </AccordionTrigger>
                <AccordionContent
                  className={"bg-gray-200 shadow rounded-b-xl p-2  py-4 "}
                >
                  {val.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PricePage;
