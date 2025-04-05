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

        <div className="relative h-[80vh] bg-linear-to-r drop-shadow-xl p-1 lg:p-10">
          {/* Background Image */}
          <img
            className="hidden md:block absolute inset-0 w-full h-full object-cover blur-[0.1rem]"
            src="https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png?fm=avif&q=50"
            alt=""
          />

          {/* Card Container */}
          <div className="relative md:absolute md:top-1/2 md:right-8 md:-translate-y-1/2 w-full md:w-[50%] lg:w-[35%] border-[0.2px] border-[#b1b5c8] bg-transparent rounded-2xl blur-none">
            <div className="bg-white rounded-2xl text-center space-y-4 p-2 lg:p-6 shadow-md">
              <h2 className="text-xl font-bold">Set up your Workspace</h2>

              {/* Slider */}
              <div className="w-full mt-3">
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
                  className="mySwiper p-2"
                >
                  {HomeImagedata?.map((val, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="w-full h-[60vh] md:h-[50vh] object-cover rounded-lg"
                        src={val}
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Form Section */}
              <FormSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
