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
import AnimateImage from "../utils/AnimateImage";
const MainSection = () => {
  return (
    <>
      <section className="common-backgroundGredient ">
        <div className="space-y-8">
          {/* Heading Section */}
          <div className="grid grid-cols-2  w-full  gap-5 p-5 py-6 mx-auto   ">
            <div className="flex flex-col justify-center items-start gap-4 text-start p-3 ">
              <AnimateContent>
                <h1 className="text-start">The everything app, for work</h1>
              </AnimateContent>
              <AnimateContent>
                <p className="primary-para px-2  ">
                  One app for projects, knowledge, conversations, and more. Get
                  more done faster—together.
                </p>
              </AnimateContent>
              <AnimateContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-5">
                    <AnimateButton className="text-lg py-3 lg:text-xl lg:py-3 px-1 lg:px-5 gap-2 primary-btn flex items-center">
                      Get started. It's FREE{" "}
                      <FaArrowRightLong className="mt-1" size={20} />
                    </AnimateButton>

                    <AnimateButton className="text-lg py-3 lg:text-xl lg:py-3 px-5 lg:px-18 gap-2 secondary-btn flex items-center">
                      Learn More
                    </AnimateButton>
                  </div>
                  <h5 className="text-sm lg:text-md px-1 text-[#7970ae]">
                    Free Forever · No Credit Card
                  </h5>
                </div>
              </AnimateContent>
            </div>

            <div className=" relative h-[60vh] drop-shadow-2xl  overflow-hidden rounded-xl  ">
              <AnimateImage
                className="object-cover"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
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
              <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[50] h-30 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent "></div>

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
