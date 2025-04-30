import AnimateImage from "@/app/utils/AnimateImage";
import { CornerDownRight } from "lucide-react";
import React from "react";
import { IoClose } from "react-icons/io5";
const TaskUi = () => {
  return (
    <>
      <section className="common-section  flex flex-col gap-8 p-2 items-center">
        {/* Heading Section */}

        <h2>Task management is broken. We fixed it.</h2>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-6   ">
          {/* Left Card - Old Way */}
          <div className=" bg-primary common-border  rounded-xl  p-2 w-full  shadow-md">
            <h2 className="text-2xl ">The old way</h2>
            <div className=" rounded-2xl  p-3 space-y-4">
              {[
                "I'm always chasing after project updates",
                "I should have known we were off track weeks ago",
                "Where was that task, again?",
                "I don't know what I should prioritize today.",
                "Why do we have duplicates of the same task?",
                "My calendar only shows my meetings.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-gray-400 text-lg  ">
                    <IoClose color="#933afe" size={25} />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - ClickUp Way */}
          <div className="bg-gradient-to-br  from-[#8b5cf6] to-[#933afe] rounded-xl p-3 w-full shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">The Our Way</h3>
            <div className="bg-primary rounded-2xl p-3 space-y-4 text-gray-800">
              {[
                "Project updates come to me!",
                "Progress predicted months in advance.",
                "I always know which task is most important.",
                "Every task is searchable from anywhere.",
                "All teams can track the same task.",
                "My calendar auto-blocks time for tasks.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-purple-600 text-xl">
                    <CornerDownRight />
                  </div>
                  <p className="text-gray-800">
                    {/* Bold the first few words */}
                    {item.split(" ").slice(0, 3).join(" ")}{" "}
                    <span className="font-medium">
                      {item.split(" ").slice(3).join(" ")}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section className="min-h-screen common-section bg-white flex flex-col items-center px-6 py-16 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="">
            Make better decisions, faster—
            <br /> with ClickUp AI.
          </h2>
          <p className="primary-para">
            Track trends and analyze data with the first AI that connects your
            Tasks to the rest of your work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
          {/* Card 1 */}
          <div className="common-border  rounded-xl  overflow-hidden shadow-md ">
            <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2">
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
              <h3 className="text-xl font-semibold text-gray-900">
                Summaries in seconds
              </h3>
              <p className="text-gray-600">
                Generate Task summaries, progress updates, translations, and
                action items.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="common-border  rounded-xl  overflow-hidden shadow-md">
            <div className="bg-gradient-to-tr from-blue-800 to-purple-300  p-2">
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
              <h3 className="text-xl font-semibold text-gray-900">
                Auto-schedule your work
              </h3>
              <p className="text-gray-600">
                Time-block Tasks automatically, based on urgency, workload, &
                deadlines.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="common-border  rounded-xl  overflow-hidden shadow-md">
            <div className="bg-gradient-to-tr from-pink-800 to-purple-300  p-2">
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
              <h3 className="text-xl font-semibold text-gray-900">
                Effortless Task creation
              </h3>
              <p className="text-gray-600">
                Auto-create Tasks from conversations, Docs, and previous Tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 5  */}

      <section className="common-section">
        <div className=" px-4 py-4 md:px-12 lg:px-20 text-center">
          <div className="py-7">
            <h2>Tasks that connect to the rest of your work</h2>
            <p className="primary-para">
              Tailor tasks to fit your flow with custom fields, categories and
              more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-4 mx-auto">
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
      </section>
    </>
  );
};

export default TaskUi;
