import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import Link from "next/link";
import React from "react";
import { MdAddTask } from "react-icons/md";
import { dataArray } from "@/app/data";

const page = () => {
  return (
    <>
      <main className="">
        <section className=" relative common-backgroundGredient h-[60vh]">
          <div className="common-section ">
            <div className="text-center lg:w-[70%] mx-auto  flex flex-col gap-4">
              <AnimateContent>
                <h1>The best work solution, for the best price.</h1>
              </AnimateContent>
              <AnimateContent>
                <p className="primary-para  mx-auto lg:w-[80%]">
                  One app for projects, knowledge, conversations, and more. Get
                  more done faster—together.
                </p>
              </AnimateContent>

              <AnimateButton className="text-lg mx-auto py-3 lg:text-2xl lg:py-3 px-5 lg:px-12 gap-2 primary-btn flex items-center">
                Get started. It's FREE
              </AnimateButton>
            </div>
          </div>

          {/* blur background  */}
          <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] h-30 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
        </section>

        {/* scetion 2 for main content  */}

        <section className="w-[90%] mx-auto p-2  grid grid-cols-8 gap-4 ">
          <div className="col-span-2  common-border common-backgroundGredient relative h-screen  shadow-xl  rounded-xl p-2 ">
            <div className=" absolute top-[3%]   left-[7%] bg-primary w-full    common-border drop-shadow-2xl rounded-xl">
              <h2 className="text-xl text-start p-2 ">Features</h2>

              <div className=" flex flex-col px-2 max-h-screen overflow-y-scroll ">
                {dataArray[1]?.subData?.map((val) => (
                  <Link
                    href="#"
                    className="common-navlink  py-3 border-b-[0.5px]  border-gray-400 "
                  >
                    <MdAddTask size={22} />
                    {val?.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-6 ">div 2</div>
        </section>
      </main>
    </>
  );
};

export default page;
