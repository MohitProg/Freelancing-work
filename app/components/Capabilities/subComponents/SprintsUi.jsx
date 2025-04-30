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
      <section className=" px-4 md:px-16 ">
        <div className="text-center mb-16">
          <h2>Here's how they work</h2>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3">
            <h2 className="text-start leading-tight">
              Simplify sprint management
            </h2>
            <p className="text-para max-w-md">
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
            <div
              style={{
                filter:
                  "drop-shadow(0 4px 10px rgba(255, 255, 255, 0.4)) drop-shadow(0 6px 15px rgba(255, 105, 180, 0.493))",
              }}
              className=" w-full relative h-[40vh]  rounded-xl   overflow-hidden "
            >
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-1">
            <div
              style={{
                filter:
                  "drop-shadow(0 4px 10px rgba(255, 255, 255, 0.4)) drop-shadow(0 6px 15px rgba(255, 105, 180, 0.493))",
              }}
              className=" w-full relative h-[40vh]  rounded-xl   overflow-hidden "
            >
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="order-2 px-4">
            <h2 className="text-start">Get yourself organized</h2>
            <p className="text-para max-w-md">
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
        <div className=" px-4 py-4 md:px-12 lg:px-20 text-center">
          <div className="py-7">
            <h2>Tasks that connect to the rest of your work</h2>
            <p className="primary-para">
              Tailor tasks to fit your flow with custom fields, categories and
              more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-4 mx-auto">
            {/* Left Card */}
            <div className="bg-primary common-border rounded-xl overflow-hidden   shadow-sm ">
              <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                <h3 className="text-xl  font-semibold mb-2">
                  Automate repetitive tasks
                </h3>
                <p className="text-para  text-start mb-4">
                  Assignments, status updates, notifications, and workflows can
                  be automated from any action
                </p>
              </div>

              <div className=" w-full h-[40vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-primary common-border rounded-xl overflow-hidden   shadow-sm ">
              <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                <h3 className="text-xl font-semibold mb-2">
                  Eliminate duplicate tasks
                </h3>
                <p className="text-para mb-4 text-start">
                  Centralize task discussions across teams by adding the same
                  task to multiple lists.
                </p>
              </div>

              <div className=" w-full h-[40vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-3 mt-5 gap-4">
              <div className="bg-primary common-border  rounded-xl overflow-hidden   shadow-sm ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h3 className="text-xl font-semibold mb-2">
                    Eliminate duplicate tasks
                  </h3>
                  <p className="text-para mb-4 text-start">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>

              <div className="bg-primary common-border rounded-xl overflow-hidden   shadow-sm ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h3 className="text-xl font-semibold mb-2">
                    Eliminate duplicate tasks
                  </h3>
                  <p className="text-para mb-4 text-start">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>

              <div className="bg-primary common-border rounded-xl overflow-hidden   shadow-sm ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h3 className="text-xl font-semibold mb-2">
                    Eliminate duplicate tasks
                  </h3>
                  <p className="text-para mb-4 text-start">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3  */}

      <section className="py-20 text-center  space-y-6">
        <h2>Start with a template, then make it your own.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templates.map((item, idx) => (
            <div
              key={idx}
              className="common-border  rounded-xl px-6 py-10 shadow-sm hover:shadow-md transition bg-white/70 backdrop-blur-md"
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
      </section>
    </>
  );
};

export default SprintsUi;
