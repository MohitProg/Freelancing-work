import AnimateImage from "@/app/utils/AnimateImage";
import Link from "next/link";
import React from "react";

const KanbanUi = () => {
  const FeatureArray = [
    {
      id: 1,
      title: " Kanban Board: Visual Workflow for Agile Teams",
      description:
        " A dynamic, column-based interface that clearly shows each task’s progress—ideal for enhancing team accountability and process transparency",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Real-Time Task Management with Kanban",
      description:
        "Track, move, and update tasks across stages instantly—perfect for distributed teams needing real-time visibility and collaboration.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },
  ];

  // main section feature  array
  const mainFeatureArray = [
    {
      id: 1,
      title: " Kanban Board: Visual Workflow for Agile Teams",
      description:
        " A dynamic, column-based interface that clearly shows each task’s progress—ideal for enhancing team accountability and process transparency",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
      link: "section1",
    },

    {
      id: 2,
      title: "Real-Time Task Management with Kanban",
      description:
        "Track, move, and update tasks across stages instantly—perfect for distributed teams needing real-time visibility and collaboration.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
      link: "section2",
    },
  ];
  return (
    <>
      <section className="min-h-screen  common-section flex flex-col items-center p-3 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="">Here's how our Kanban works</h2>
          <p className="primary-para">
            Track trends and analyze data with the first AI that connects your
            Tasks to the rest of your work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full">
          {FeatureArray?.map((value) => (
            <div
              key={value?.id}
              className=" rounded-xl  bg-primary overflow-hidden  flex flex-col justify-between "
            >
              <div className="p-6 space-y-2 ">
                <h2 className=" text-2xl md:text-3xl  ">{value?.title}</h2>
                <p className="primary-para">{value?.description}</p>
              </div>

              <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2">
                <div className=" w-full relative h-[30vh] md:h-[40vh]  rounded-xl   overflow-hidden ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src={value?.src}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section 2  */}

      <section className="min-h-screen common-section flex flex-col items-center p-3 space-y-12">
        <div className="w-full grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6 min-h-screen space-y-8">
            {mainFeatureArray?.map((val) => (
              <div
                id={val?.link}
                key={val?.id}
                className=" bg-primary   rounded-xl  overflow-hidden "
              >
                <div className="p-6 space-y-2">
                  <h2 className=" text-start">{val?.title}</h2>
                  <p className="primary-para">{val?.description}</p>
                </div>
                <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2 md:p-3">
                  <div className=" w-full relative h-[30vh] md:h-[60vh]  rounded-xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center hover:scale-105"
                      fill
                      alt="Please wait "
                      src={val?.src}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2  h-[400px] hidden md:block sticky top-[10%] p-4 rounded-lg">
            <div className="w-64 max-h-96  bg-primary overflow-y-auto rounded-2xl border border-gray-200 ">
              <ul className="space-y-2 p-2">
                {mainFeatureArray?.map((val) => (
                  <li
                    key={val?.link}
                    className="secondary-btn text-white  md:text-sm lg:text-[1rem] font-semibold rounded-xl px-2 py-3 cursor-pointer"
                  >
                    <Link href={`#${val?.link}`}>{val?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KanbanUi;
