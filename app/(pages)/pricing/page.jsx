import React from "react";

import CompanyScroller from "@/app/components/CompanyScroller";
import AnimateContent from "@/app/utils/AnimateContent";
import PaymentSection from "@/app/components/PaymentSection";
import AnimateButton from "@/app/utils/AnimateButton";
import FaQ from "@/app/components/FaQ";
import AnimateImage from "@/app/utils/AnimateImage";

const PricePage = () => {
  return (
    <main>
      {/* section 1  */}
      <section className="  flex flex-col gap-7  min-h-screen common-backgroundGradient relative w-full  py-2  ">
        <div className="grid   grid-cols-1  lg:grid-cols-5 p-2 w-[95%] mx-auto  lg:w-[80%]  bg-gradient-to-b  lg:bg-gradient-to-r from-transparent rounded-xl    to-purple-400 gap-4">
          <div className="flex flex-col gap-3 p-3 py-2    justify-center rounded-xl  md:items-center text-start  md:text-center lg:items-start lg:text-start  lg:col-span-2 items-start">
            <h1>The best work solution, for the best price.</h1>

            <p className="primary-para px-2">
              Trusted by the world's leading businesses
            </p>
            <AnimateButton className="primary-btn py-3 px-7">
              Gets Started
            </AnimateButton>
          </div>

          <div className="  relative  lg:col-span-3 col-span-1 h-[40vh] md:h-[50vh] lg:h-[70vh]     rounded-xl  overflow-hidden ">
            <AnimateImage
              className="object-cover object-center"
              fill
              alt="Please wait "
              src={
                "https://cdn.dribbble.com/userupload/16554789/file/original-797a59537249b8666b2aaa1b512d1e04.png?resize=1504x1128&vertical=center"
              }
            />
          </div>
        </div>

        <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] hidden md:block h-[10vh] bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
      </section>

      {/* <section className=" relative common-backgroundGradient h-[50vh]">
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

   
        <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] h-30 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
      </section> */}

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

      <FaQ />
    </main>
  );
};

export default PricePage;
