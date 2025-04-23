import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HomeImagedata } from "../data";
import FormSection from "./FormSection";
import Image from "next/image";
import AnimateContent from "../utils/AnimateContent";
import AnimateButton from "../utils/AnimateButton";
const MainSection = () => {
  return (
    <>
      <section className="common-backgroundGredient ">
        <div className="space-y-8">
          {/* Heading Section */}
          <div className="flex flex-col gap-1 p-2 text-center justify-center items-center mx-auto max-w-4xl">
            <AnimateContent>
              <h1>The everything app, for work</h1>
            </AnimateContent>

            <AnimateContent>
              <p className="primary-para  mx-auto lg:w-[80%]">
                One app for projects, knowledge, conversations, and more. Get
                more done faster—together.
              </p>
            </AnimateContent>

            <AnimateContent>
              <div className="flex flex-col items-center gap-2 mt-2">
                <AnimateButton className="text-lg py-3 lg:text-2xl lg:py-4 px-5 lg:px-18 gap-2 primary-btn flex items-center">
                  Get started. It's FREE <FaArrowRightLong size={20} />
                </AnimateButton>
                <h5 className="text-sm lg:text-md text-[#7970ae]">
                  Free Forever · No Credit Card
                </h5>
              </div>
            </AnimateContent>
          </div>

          {/* Image + Card Section */}
          <AnimateContent>
            <div className="relative min-h-screen lg:min- h-[80vh] ">
              {/* Background Image */}
              <Image
                fill
                className="opacity-55 object-cover blur-[0.08rem]"
                src="https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png?fm=avif&q=50"
                alt="please wait"
              />

              {/* blur background  */}
              <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[50] h-10 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>

              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-purple-300/30">
                <div className="relative h-full common-section flex items-start justify-center  sm:justify-end p-2 ">

                  
                  <div className="space-y-4 w-[95%] sm:w-[60%] sm:mt-5 md:w-[45%] lg:w-[30%]  mb-3   px-4 py-2 bg-primary common-border  rounded-2xl">
                    <h2 className="text-xl font-bold">Set up your Workspace</h2>

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
                            <div className="w-full h-[50vh] sm:h-[70vh]  md:h-[60vh] relative rounded-lg overflow-hidden">
                              <Image
                                fill
                                src={val}
                                className="object-cover object-center"
                                alt="please wait"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <FormSection
                      title="Get Started"
                      className="text-lg  w-full px-5 py-3 gap-4  primary-btn  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateContent>
        </div>
      </section>
    </>
  );
};

export default MainSection;
