import AnimateButton from "@/app/utils/AnimateButton";
import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const RoadmapUi = () => {
  return (
    <>
      <section className="common-section  flex flex-col gap-8 items-center">
        {/* Heading Section */}

        <div className="py-7">
          <h2>Product management is chaotic, let's fix it</h2>
          <p className="primary-para w-[60%] mx-auto">
            Disconnected tools sabotage software teams. ClickUp unifies your
            backlog, bug tracking, sprints, and roadmaps—so your teams can
            collaborate, build, and ship faster.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-2 w-full gap-4   ">
          {/* Left Card - Old Way */}
          <div className=" bg-primary common-border  rounded-xl  p-3 w-full  shadow-md">
            <h2 className="text-3xl ">The old way</h2>
            <div className=" rounded-2xl p-6 space-y-4">
              {[
                "Sprints, backlogs, and bugs scattered across tools",
                "Manual bug tracking slows down releases and handoffs",
                "Where was that task, again?",
                "Limited visibility into workload and dependencies",
                "Repetitive processes delay launches and fixes",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className=" ">
                    <IoIosCloseCircleOutline color="#933afe" size={25} />
                  </div>
                  <p className="primary-para text-2xl ">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - ClickUp Way */}
          <div className="bg-gradient-to-br  from-[#8b5cf6] to-[#933afe] rounded-xl p-3 w-full shadow-lg text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">The Our Way</h3>
            <div className="bg-primary rounded-2xl p-6 space-y-4 text-gray-800">
              {[
                "Project updates come to me!",
                "Progress predicted months in advance.",
                "I always know which task is most important.",
                "Every task is searchable from anywhere.",
                "All teams can track the same task.",
                "My calendar auto-blocks time for tasks.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-purple-600 text-2xl">✔️</div>
                  <p className="text-gray-800">
                    {/* Bold the first few words */}
                    {item.split(" ").slice(0, 3).join(" ")}{" "}
                    <span className="font-medium">
                      {item.split(" ").slice(3).join(" ")}
                    </span>
                  </p>
                </div>
              ))}

              <AnimateButton className="primary-btn py-3 px-7">
                Gets Started
              </AnimateButton>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white flex flex-col items-center px-6 py-16 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4 w-[60%] mx-auto">
          <h2 className="">The world’s most complete AI for software teams</h2>
          <p className="primary-para">
            Meet the first AI that works across your entire engineering
            cycle—automating backlogs, capturing decisions, and surfacing
            insights that free your team to focus on delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="common-border  bg-gradient-to-tr from-purple-800 to-purple-300 rounded-xl  overflow-hidden shadow-md ">
            <div className="  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-primary text-2xl font-semibold">
                Summaries in seconds
              </h3>
              <p className="text-primary/80">
                Generate Task summaries, progress updates, translations, and
                action items.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="common-border  bg-gradient-to-tr from-blue-800 to-purple-300 rounded-xl  overflow-hidden shadow-md">
            <div className="  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-primary text-2xl font-semibold">
                Auto-schedule your work
              </h3>
              <p className="text-primary/80">
                Time-block Tasks automatically, based on urgency, workload, &
                deadlines.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="common-border  bg-gradient-to-tr from-pink-800 to-purple-300 rounded-xl  overflow-hidden shadow-md">
            <div className="  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-primary text-2xl font-semibold">
                Effortless Task creation
              </h3>
              <p className="text-primary/80">
                Auto-create Tasks from conversations, Docs, and previous Tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className=" px-4 py-4 md:px-12 lg:px-20 text-center">
          <div className="py-7 flex flex-col items-center gap-2">
            <h2>Manage backlogs and bugs in one place</h2>
            <p className="primary-para">
              Align your team, visualize dependencies, and ship faster without
              roadblocks or busywork.
            </p>

            <AnimateButton className="primary-btn py-3 px-7">
              Gets Started
            </AnimateButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-4 mx-auto">
            {/* Left Card */}
            <div className="bg-primary common-border rounded-xl overflow-hidden   shadow-lg">
              <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                <h3 className="text-xl  font-semibold mb-2">
                  Automate repetitive tasks
                </h3>
                <p className="text-para  text-start mb-4">
                  Assignments, status updates, notifications, and workflows can
                  be automated from any action
                </p>
              </div>

              <div className=" w-full h-[30vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1588511986632-592db3d6c81f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-primary common-border rounded-xl overflow-hidden   shadow-lg">
              <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                <h3 className="text-xl font-semibold mb-2">
                  Eliminate duplicate tasks
                </h3>
                <p className="text-para mb-4 text-start">
                  Centralize task discussions across teams by adding the same
                  task to multiple lists.
                </p>
              </div>

              <div className=" w-full h-[30vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-3 mt-5 gap-4">
              <div className="bg-primary common-border  rounded-xl overflow-hidden shadow-lg ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h3 className="text-xl font-semibold mb-2">
                    Eliminate duplicate tasks
                  </h3>
                  <p className="text-para mb-4 text-start">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[30vh] relative    ">
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

                <div className=" w-full h-[30vh] relative    ">
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

                <div className=" w-full h-[30vh] relative    ">
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
    </>
  );
};

export default RoadmapUi;
