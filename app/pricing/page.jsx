import React from "react";
import CompanyScroller from "../components/CompanyScroller";
import FaQ from "../components/FaQ";
import PaymentSection from "../components/PaymentSection";

const PricePage = () => {
  return (
    <main>
      {/* section 1  */}

      <section className="common-section">
        <div className="text-center lg:w-[70%] mx-auto ">
          <h1>The best work solution, for the best price.</h1>

          <span className="text-sm text-para ">
            Trusted by the world's leading businesses
          </span>
        </div>

        <CompanyScroller />
      </section>

      {/* payment section  */}

      <PaymentSection />

      {/* section 3  */}

      <section className="flex  common-section flex-col gap-5  p-2 lg:p-8 py-12">
        <h2>Take your productivity to the next level</h2>

        <div className=" w-full sm:w-[90%] lg:w-[80%]  mx-auto bg-gradient-to-r shadow-lg from-[#fefffe] via-[#eefbef] to-[#ebfaec] p-5  rounded-xl">
          <span className="text-[#3da340] text-xs p-[0.5px] px-2 bg-[#edfced] rounded-full">
            ClickUp Assist
          </span>

          <div className="flex flex-col gap-3 lg:gap-3">
            <h3 className="text-para  text-2xl text-center font-semibold">
              Live training & support
            </h3>
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

      <FaQ />
    </main>
  );
};

export default PricePage;
