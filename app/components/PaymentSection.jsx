"use client";

import React, { useEffect, useState } from "react";
import AnimateContent from "../utils/AnimateContent";
import AnimateButton from "../utils/AnimateButton";
import { motion } from "motion/react";
import { Switch } from "@/components/ui/switch";
import { CornerDownRight } from "lucide-react";

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
  const [timeQnt, setTimeQnt] = useState("year");
  // state for money value
  const [amount, setamount] = useState({
    amount1: "",
    amount2: "",
  });
  // state for money switch value
  const [moneychange, setMoneyChange] = useState("USD");

  useEffect(() => {
    if (moneychange === "USD") {
      if (timeQnt === "year") {
        setamount({
          amount1: 30,
          amount2: 12,
        });
      } else {
        setamount({
          amount1: 3,
          amount2: 5,
        });
      }
    } else {
      if (timeQnt === "year") {
        setamount({
          amount1: 30 * 85,
          amount2: 12 * 85,
        });
      } else {
        setamount({
          amount1: 3 * 85,
          amount2: 5 * 85,
        });
      }
    }
  }, [timeQnt, moneychange]);

  console.log(timeQnt);

  return (
    <>
      <section className="p-4 mx-auto common-section   rounded-xl">
        <AnimateContent className="flex  items-start flex-col gap-3">
          <span className=" text-sm lg:text-xs text-[#9049fe] p-2 bg-[#f1e7fe] rounded-full">
            100% Money-BackGuarantee
          </span>

          <div className="flex items-center  w-full justify-between ">
            <div className="flex items-center gap-2 px-3 p-1    rounded-full ">
              <Switch
                onCheckedChange={(e) =>
                  e ? setMoneyChange("INR") : setMoneyChange("USD")
                }
              />
              <span className="primary-para  font-medium">{moneychange}</span>
            </div>

            <div className="flex items-center  common-border  bg-primary overflow-hidden rounded-full  ">
              <motion.button
                animate={{
                  background: timeQnt === "year" ? "#7612fa" : "#f1f1f9",
                  color: timeQnt === "year" ? "#f1f1f9" : "#7612fa",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => setTimeQnt("year")}
                className="p-2 px-3  text-sm font-medium "
              >
                Yearly
              </motion.button>
              <motion.button
                animate={{
                  background: timeQnt === "month" ? "#9049fe" : "#f1f1f9",
                  color: timeQnt === "month" ? "#f1f1f9" : "#9049fe",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => setTimeQnt("month")}
                className="p-2 px-3 text-sm font-medium "
              >
                Monthly
              </motion.button>
            </div>
          </div>

          {/* section for payment  */}
        </AnimateContent>

        <AnimateContent className="grid grid-cols-1  mt-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4   gap-5 lg:gap-0 rounded-lg overflow-hidden">
          {/* payment div 1 */}
          <div className="flex   common-border  bg-primary  rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1">
              <h1 className="text-[1.8rem] font-bold ">Free Forever</h1>
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
              <h1 className="text-[1rem]  font-bold">key features </h1>

              <ul className="flex flex-col gap-2 mt-2  primary-para ">
                {features.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* payment  div 2 */}

          <div className="flex    common-border bg-primary   rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1">
              <h1 className="text-[1.8rem] font-bold ">Unlimited</h1>
              <p className="primary-para text-center">Best for personal use</p>
            </div>

            <div className="space-y-3  ">
              <h2 className="text-6xl uppercase font-bold ">
                {" "}
                {moneychange === "USD"
                  ? `$${amount.amount1}`
                  : `₹ ${amount.amount1}`}
              </h2>
              <AnimateButton className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full">
                Get Started
              </AnimateButton>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-[1rem] font-bold">
                Everything in Free Forever plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2  primary-para ">
                {features.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* payment  div 3 */}
          <div className="flex  common-border bg-primary rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1">
              <h1 className="text-[1.8rem] flex items-center justify-center gap-2 font-bold ">
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
              <h2 className="text-6xl uppercase font-bold ">
                {moneychange === "USD"
                  ? `$${amount.amount2}`
                  : `₹ ${amount.amount2}`}
              </h2>
              <AnimateButton className="p-2  secondary-btn text-lg text-white font-bold rounded-lg w-full">
                Get started
              </AnimateButton>
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-[1rem] font-bold">
                Everything in Unlimited, plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2 primary-para ">
                {features.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* payment  div 4 */}

          <div className="flex   common-border bg-primary rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1">
              <h1 className="text-[1.8rem] font-bold ">Enterprise</h1>
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
              <h1 className="text-[1rem] font-bold">
                Everything in Business, plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2 text-gray-600 ">
                {features.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
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
