import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const KanbanUi = () => {
  return (
    <>
      <section className="min-h-screen  common-section flex flex-col items-center p-6 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="">Here's how our Kanban works</h2>
          <p className="primary-para">
            Track trends and analyze data with the first AI that connects your
            Tasks to the rest of your work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden shadow-md ">
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">
                Categorize with subgroup
              </h3>
              <p className="primary-para">
                Generate Task summaries, progress updates, translations, and
                action items.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2">
              <div className=" w-full relative h-[40vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden shadow-md">
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">
                Auto-schedule your work
              </h3>
              <p className="primary-para">
                Time-block Tasks automatically, based on urgency, workload, &
                deadlines.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-blue-800 to-purple-300  p-2">
              <div className=" w-full relative h-[40vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2  */}

      <section className="min-h-screen common-section flex flex-col items-center p-6 space-y-12">
        <div className="w-full grid grid-cols-8 gap-4">
          <div className="col-span-6 min-h-screen space-y-8">
            <div className="common-border bg-primary   rounded-xl  overflow-hidden shadow-lg ">
              <div className="p-6 space-y-2">
                <h2 className="text-start">
                  Manage priorities easier than ever
                </h2>
                <p className="primary-para">
                  Highlight what matters most with color-coded labels, due
                  dates, and priority tags. Easily update several tasks at once
                  by multi-selecting cards and dragging them to a new column.
                </p>
              </div>
              <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-5">
                <div className=" w-full relative h-[60vh]  rounded-xl   overflow-hidden ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>

            <div className="common-border bg-primary   rounded-xl  overflow-hidden shadow-lg ">
              <div className="p-6 space-y-2">
                <h2 className="text-start">
                  Manage priorities easier than ever
                </h2>
                <p className="primary-para">
                  Highlight what matters most with color-coded labels, due
                  dates, and priority tags. Easily update several tasks at once
                  by multi-selecting cards and dragging them to a new column.
                </p>
              </div>
              <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-5">
                <div className=" w-full relative h-[60vh]  rounded-xl   overflow-hidden ">
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

          <div className="col-span-2  h-[400px] sticky top-[10%] p-4 rounded-lg">
            <div className="w-64 max-h-96  bg-primary overflow-y-auto rounded-2xl border border-gray-200 shadow-md">
              <ul className="space-y-2 p-2">
                <li className="bg-black text-white font-semibold rounded-xl px-4 py-3 cursor-pointer">
                  Multi select and drag
                </li>
                <li className="hover:outline-2 outline-black rounded-xl px-4 py-3 font-medium cursor-pointer">
                  Collaboration
                </li>
                <li className="px-4 hover:outline-2 outline-black rounded-xl   py-3 font-medium cursor-pointer">
                  WIP Limits
                </li>
                <li className="px-4  hover:outline-2 outline-black rounded-xl py-3 font-medium cursor-pointer">
                  Subgroups
                </li>
                <li className="px-4 hover:outline-2 outline-black rounded-xl py-3 font-medium cursor-pointer">
                  Custom columns
                </li>
                <li className="px-4 hover:outline-2 outline-black rounded-xl py-3 font-medium cursor-pointer">
                  Card customization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KanbanUi;
