import React from "react";

import CompanyScroller from "@/app/components/CompanyScroller";
import AnimateContent from "@/app/utils/AnimateContent";
import PaymentSection from "@/app/components/PaymentSection";
import AnimateButton from "@/app/utils/AnimateButton";
import FaQ from "@/app/components/FaQ";

const PricePage = () => {
  return (
    <main>
      {/* section 1  */}

      <section className=" relative common-backgroundGradient h-[50vh]">
        <div className="common-section ">
          <div className="text-center lg:w-[70%] mx-auto ">
            <AnimateContent>
              <h1>The best work solution, for the best price.</h1>
            </AnimateContent>

            <AnimateContent>
              <h2 className=" text-xl">
                Trusted by the world's leading businesses
              </h2>
            </AnimateContent>
          </div>
        </div>

        {/* blur background  */}
        <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] h-30 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
      </section>
      {/* payment section  */}

      <PaymentSection />

      <CompanyScroller />

      {/* section 3  */}

      <section className="flex  common-section flex-col  items-center text-center gap-8  mt-4 p-2 lg:p-8 py-12">
        <AnimateContent>
          <h2>Take your productivity to the next level</h2>
        </AnimateContent>

        <AnimateContent className=" w-full sm:w-[90%] lg:w-[80%] space-y-3  text-start  mx-auto common-backgroundGradient  p-5  rounded-xl">
          <button className="secondary-btn text-xs p-[0.5px] px-2 bg-[#edfced] rounded-full">
            ClickUp Assist
          </button>

          <div className="flex flex-col gap-3 lg:gap-1">
            <h2 className="  text-2xl text-start  font-semibold">
              Live training & support
            </h2>
            <p className="primary-para">
              Personalized expert guidance for setup and success.
            </p>

            <ul className="flex flex-col gap-2 mt-5  primary-para  ">
              <li className="text-sm ">✔️ 2 hours of 1:1 expert time/month</li>
              <li className="text-sm ">✔️ 2 hours of 1:1 expert time/month</li>
              <li className="text-sm ">✔️ 2 hours of 1:1 expert time/month</li>
            </ul>
          </div>

          <div className="flex i flex-col items-start gap-3 sm:flex-row    justify-between mt-6">
            <AnimateButton className="secondary-btn p-2 lg:p-3 px-8 text-white rounded-xl font-bold lg:w-[40%]">
              Get ClickUp Assist
            </AnimateButton>
            <AnimateButton className="  bg-primary lg:w-[40%] p-2 lg:p-3 px-8 text-lg  text-black  font-bold  rounded-xl">
              Learn more
            </AnimateButton>
          </div>
        </AnimateContent>
      </section>

      {/* section 4 accordian  */}

      <FaQ />
    </main>
  );
};

export default PricePage;
