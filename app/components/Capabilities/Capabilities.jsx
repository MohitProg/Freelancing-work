"use client";

import { dataArray } from "@/app/data";
import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import AnimateImage from "@/app/utils/AnimateImage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TaskUi from "./subComponents/TaskUi";
import TimeUi from "./subComponents/TimeUi";
import GenChartUi from "./subComponents/GenChartUi";
import SprintsUi from "./subComponents/SprintsUi";
import KanbanUi from "./subComponents/KanbanUi";
import RoadmapUi from "./subComponents/RoadmapUi";

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

  console.log(Maindata);

  return (
    <>
      {Maindata && (
        <main className="flex flex-col   gap-4">
          {/* section 2  */}

          <section className="  flex flex-col gap-7 h-[80vh] common-backgroundGredient relative w-full   ">
            <div className="grid common-section grid-cols-5 bg-gradient-to-r from-prink-800 rounded-xl    to-purple-400 gap-4">
              <div className="flex flex-col gap-3 p-3 py-6  rounded-xl    col-span-2 items-start">
                <h1 className="text-start leading-[4rem]">
                  A Task Management Platform that saves time
                  {/* {Maindata?.heading} */}
                </h1>

                <p className="primary-para">
                  Automate, prioritize, and keep work moving—all while staying
                  connected to Docs, Whiteboards, Chat, and more
                  {/* {Maindata?.desc} */}
                </p>

                <AnimateButton className="primary-btn py-3 px-7">
                  Gets Started
                </AnimateButton>
              </div>

              <div className="  relative  col-span-3  rounded-xl  overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center"
                  fill
                  alt="Please wait "
                  src={
                    Maindata?.image ||
                    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>
            </div>

            <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] h-[10vh] bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
          </section>

          {slug === "tasks" && <TaskUi />}
          {slug === "time-line" && <TimeUi />}
          {slug === "gantt-charts" && <GenChartUi />}
          {slug === "sprints" && <SprintsUi />}
          {slug === "kanban" && <KanbanUi />}
          {slug === "roadmap-backlog" && <RoadmapUi />}
        </main>
      )}
    </>
  );
};

export default Capabilities;
