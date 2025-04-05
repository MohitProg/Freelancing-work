import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HomeImagedata } from "../data";
import FormSection from "./FormSection";
const MainSection = () => {
  return (
    <>
      <section className="common-section space-y-8">
        <div className="flex    mx-auto  flex-col gap-1 p-2  text-center justify-center items-center">
          <h1>The everything app,for work</h1>

          <p className="primary-para lg:w-[50%]  ">
            One app for projects, knowledge, conversations, and more. Get more
            done faster—together.
          </p>

          <div className="flex flex-col items-center gap-2 mt-7">
            <button className="text-lg py-3 lg:text-2xl lg:py-4  px-5 lg:px-18 gap-2  primary-btn  ">
              Get started.its FREE <FaArrowRightLong size={20} />
            </button>
            <h5 className=" text-sm  lg:text-md  text-[#7970ae]">
              Free Forever No Credit Card
            </h5>
          </div>
        </div>

        <div className=" bg-linear-to-r     relative  drop-shadow-[4px_3px_40px_rgb(81, 102, 130)]  lg:p-10  ">
          <img
            className=" w-full h-[60vh] object-cover blur-[0.1rem] hidden lg:block"
            src="https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png?fm=avif&q=50"
            alt=""
          />

          <div className=" p-2 lg:p-3   lg:drop-shadow-(--my-drop-shadow) w-full  border-[0.2px] border-[#b1b5c8] md:absolute md:w-[35%]  top-[-20px] bg-transparent lg:rounded-2xl  right-[-30px] bottom-0 blur-none  ">
            <div className=" bg-white rounded-2xl  text-center space-y-1 lg:p-6">
              <h2 className="text-xl font-bold ">Set up your Workspace</h2>
              {/* <p className="font-semibold">
                Start with what you need, customize as you go.
              </p> */}

              <div className="w-full mt-3   ">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper p-2 "
                >
                  {HomeImagedata?.map((val, index) => (
                    <SwiperSlide key={index} className="">
                      <img
                        className="h-[50vh] w-full object-cover rounded-lg "
                        src={val}
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <FormSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
