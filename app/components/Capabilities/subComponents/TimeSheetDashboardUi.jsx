import React from "react";
import { IoClose } from "react-icons/io5";
import { CornerDownRight } from "lucide-react";
const TimeSheetDashboardUi = () => {
  return (
    <>
      <section className="common-section  flex flex-col gap-8 p-2 items-center">
        {/* Heading Section */}

        <h2>Out with the old, in with the new.</h2>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-6   ">
          {/* Left Card - Old Way */}
          <div className=" bg-primary common-border  rounded-xl  p-2 w-full  shadow-md">
            <h2 className="text-2xl ">Old-school struggles</h2>
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
                  <div className=" text-lg  ">
                    <IoClose color="#933afe" size={25} />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - ClickUp Way */}
          <div className="bg-gradient-to-br  from-[#8b5cf6] to-[#933afe] rounded-xl p-3 w-full shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              New-school solutions
            </h3>
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
    </>
  );
};

export default TimeSheetDashboardUi;
