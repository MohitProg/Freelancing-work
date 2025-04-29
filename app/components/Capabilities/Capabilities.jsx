"use client";

import { dataArray } from "@/app/data";
import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import AnimateImage from "@/app/utils/AnimateImage";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Capabilities = ({ slug }) => {
  const [Maindata, setMainData] = useState(null);

  console.log(slug);

  useEffect(() => {
    if (slug) {
      const data = dataArray[0]?.subData?.flatMap(
        (item) =>
          item.subCat?.filter((subItem) => subItem.linKpath === slug) || []
      );

      console.log(data[0]);

      setMainData(data[0]);
    }
  }, [slug]);

  return (
    <>
      {Maindata && (
        <main className="flex flex-col gap-8">
          <section className=" relative common-backgroundGredient h-[40vh]">
            <div className="common-section ">
              <div className="text-center lg:w-[70%] mx-auto  flex flex-col gap-4">
                <AnimateContent>
                  <h1>{Maindata.title}</h1>
                </AnimateContent>
                <AnimateContent>
                  <p className="primary-para  mx-auto lg:w-[80%]">
                    One app for projects, knowledge, conversations, and more.
                    Get more done faster—together.
                  </p>
                </AnimateContent>
              </div>
            </div>

            {/* blur background  */}
            <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] h-30 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
          </section>

          {/* section 2  */}

          <section className="common-section  rounded-xl common-border  bg-primary grid grid-cols-5 gap-4 ">
            <div className="flex flex-col gap-3 p-3 py-6  col-span-2 items-start">
              <h2 className="text-start">
                A Task Management Platform that saves time
              </h2>

              <p className="primary-para">
                Automate, prioritize, and keep work moving—all while staying
                connected to Docs, Whiteboards, Chat, and more
              </p>

              <AnimateButton className="primary-btn py-3 px-7">
                Gets Started
              </AnimateButton>
            </div>

            <div className=" w-full relative   rounded-2xl  col-span-3  overflow-hidden ">
              <AnimateImage
                className="object-cover object-center hover:scale-105"
                fill
                alt="Please wait "
                src="https://images.ctfassets.net/w8fc6tgspyjz/793ISpAowLisyMUjQYxIvb/3b323265a2af49c664be1e4bba16d413/tasks.png?fm=avif&q=50"
              />
            </div>
          </section>

          {/* section 3  */}

          <section className="common-section  flex flex-col items-center">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-purple-600 mb-2">
                The ClickUp way
              </p>
              <h2>Task management is broken. We fixed it.</h2>
            </div>

            {/* Two Cards */}
            <div className="grid grid-cols-2 w-full  bg-primary common-border  rounded-xl">
              {/* Left Card - Old Way */}
              <div className=" rounded-2xl p-3 w-full max-w-md shadow-md">
                <h2 className="text-2xl ">The old way</h2>
                <div className=" rounded-2xl p-6 space-y-4">
                  {[
                    "I'm always chasing after project updates",
                    "I should have known we were off track weeks ago",
                    "Where was that task, again?",
                    "I don't know what I should prioritize today.",
                    "Why do we have duplicates of the same task?",
                    "My calendar only shows my meetings.",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-gray-400 text-lg">✖️</div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card - ClickUp Way */}
              <div className="bg-gradient-to-br  from-[#8b5cf6] to-[#933afe] rounded-2xl p-3 w-full shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  The ClickUp way
                </h3>
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
                      <div className="text-purple-600 text-xl">✔️</div>
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

          <section className="min-h-screen bg-white flex flex-col items-center px-6 py-16 space-y-12">
            {/* Heading */}
            <div className="text-center space-y-4">
              <p className="text-purple-600 font-medium text-lg">
                Work smarter
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Make better decisions, faster—
                <br /> with ClickUp AI.
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                Track trends and analyze data with the first AI that connects
                your Tasks to the rest of your work.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
              {/* Card 1 */}
              <div className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-tr from-purple-500 to-purple-300 p-4">
                  <Image
                    src="/q3-campaign-updates.png" // Update with your actual image path
                    alt="Q3 Campaign Updates"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
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
              <div className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-tr from-blue-500 to-blue-300 p-4">
                  <Image
                    src="/auto-schedule-work.png" // Update with your actual image path
                    alt="Auto-schedule Work"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Auto-schedule your work
                  </h3>
                  <p className="text-gray-600">
                    Time-block Tasks automatically, based on urgency, workload,
                    & deadlines.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-tr from-pink-400 to-pink-200 p-4">
                  <Image
                    src="/effortless-task-creation.png" // Update with your actual image path
                    alt="Effortless Task Creation"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Effortless Task creation
                  </h3>
                  <p className="text-gray-600">
                    Auto-create Tasks from conversations, Docs, and previous
                    Tasks.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Capabilities;
