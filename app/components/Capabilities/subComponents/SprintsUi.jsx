import AnimateButton from "@/app/utils/AnimateButton";
import AnimateImage from "@/app/utils/AnimateImage";
import { Clock, RotateCcw, Zap } from "lucide-react";
import React from "react";

const SprintsUi = () => {
  const templates = [
    {
      title: "Sprint",
      description: "Get the sprint template.",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Simple Sprint",
      description: "Get the simple sprint template.",
      icon: <RotateCcw className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Agile Management",
      description: "Get the agile management template.",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <>
      {/* section 1  */}
      {/*  */}
      <section className=" px-4  flex flex-col items-center gap-3  ">
        <h2>Here's how they work</h2>

        {/* Section 1 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3 flex flex-col gap-3  items-start">
            <h2 className="text-start leading-tight text-3xl">
              Simplify sprint management
            </h2>
            <p className="text-para text-base leading-relaxed">
              Set sprint dates, assign points, and mark priorities so everyone
              knows what to do and when. Automate unfinished work into your next
              sprint and sync your team's development with GitHub, GitLab, or
              Bitbucket.
            </p>
            <AnimateButton className="primary-btn py-2 px-4 mt-4">
              Gets Started
            </AnimateButton>
          </div>
          <div className="order-1 md:order-2">
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://cdn.dribbble.com/userupload/28505818/file/original-91c710ed3cdb751a8c0791366f995dbc.png?resize=1504x1128&vertical=center"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-1">
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://cdn.dribbble.com/userupload/31330885/file/original-236db4530c18c19b6a64fc2e2319f3bd.png?resize=1504x1128&vertical=center"
              />
            </div>
          </div>
          <div className="order-2 px-4 flex flex-col items-start gap-3">
            <h2 className="text-start text-3xl">Get yourself organized</h2>
            <p className="text-para text-base leading-relaxed">
              Manage your team's workload with a fully customizable point
              system. Roll up points from subtasks, break them out by assignee,
              and easily sort them to track your sprints at a glance.
            </p>

            <AnimateButton className="primary-btn py-2 px-4 mt-4">
              Gets Started
            </AnimateButton>
          </div>
        </div>
      </section>

      {/* section 2  */}

      <section className="common-section">
        <div className=" px-4 py-4  lg:px-20 text-center">
          <div className="py-7 flex flex-col  items-center gap-3">
            <h2>Tasks that connect to the rest of your work</h2>
            <p className="primary-para">
              Tailor tasks to fit your flow with custom fields, categories and
              more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-4 mx-auto">
            {/* Left Card */}
            <div className="bg-primary  rounded-xl overflow-hidden    ">
              <div className="flex flex-col gap-2 items-start  p-3 py-5 ">
                <h2 className="text-3xl ">Automate repetitive tasks</h2>
                <p className="text-para text-base text-start leading-relaxed ">
                  Assignments, status updates, notifications, and workflows can
                  be automated from any action
                </p>
              </div>

              <div className=" w-full h-[40vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/36582829/file/original-c89a6204d849aa34b207efd742df588a.jpg?resize=1024x768&vertical=center"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-primary  rounded-xl overflow-hidden    ">
              <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                <h2 className="text-3xl">Eliminate duplicate tasks</h2>
                <p className="text-base  text-start leading-relaxed">
                  Centralize task discussions across teams by adding the same
                  task to multiple lists.
                </p>
              </div>

              <div className=" w-full h-[40vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
              <div className="bg-primary  rounded-xl overflow-hidden    ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h2 className="text-3xl">Eliminate duplicate tasks</h2>
                  <p className="text-base  text-start leading-relaxed">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center"
                  />
                </div>
              </div>

              <div className="bg-primary  rounded-xl overflow-hidden    ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h2 className="text-3xl">Eliminate duplicate tasks</h2>
                  <p className="text-base  text-start leading-relaxed">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center"
                  />
                </div>
              </div>

              <div className="bg-primary  rounded-xl overflow-hidden    ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h2 className="text-3xl">Eliminate duplicate tasks</h2>
                  <p className="text-base  text-start leading-relaxed">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://cdn.dribbble.com/userupload/11172555/file/original-e26bbf98e7c9fb29f282f379cb6e4c18.jpg?resize=1024x768&vertical=center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3  */}
      {/* 
      <section className="common-section">
        <h2>Start with a template, then make it your own.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto">
          {templates.map((item, idx) => (
            <div
              key={idx}
              className=" rounded-xl px-6 py-10 shadow-sm hover:shadow-md text-center transition bg-white/70 backdrop-blur-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default SprintsUi;
