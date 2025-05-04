import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const WorkLoadManagement = () => {
  return (
    <>
      <section className=" px-4 md:px-16 flex flex-col  items-center ">
        <div className="text-center mb-16">
          <h2>Powerful Features for Smarter Workload Management</h2>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3">
            <h2 className="text-3xl ">Tasks</h2>
            <p className="text-para text-base leading-relaxed">
              Assign tasks to users, set work hours, and track them as they are
              finished. Set priority, add reminders, and enable recurrence if
              needed. You can further break down complicated tasks to subtasks,
              and record the time spent on each task with timesheets or timer{" "}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center "
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
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center"
                fill
                alt="Please wait "
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="order-2 px-4">
            <h2 className="text-3xl ">Milestones</h2>
            <p className="text-para text-base leading-relaxed">
              A milestone is an important progress point along the timeline of
              your project that you need to pass as you move from start to
              finish. You can give your milestone a start and end date and
              assign a person responsible for its completion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3">
            <h2 className="text-3xl ">Kanban</h2>
            <p className="text-para text-base leading-relaxed">
              The Kanban board helps you organize all your tasks as cards in
              different columns. These columns are based on different task
              criteria such as percentage completion or priority. Simply drag
              and drop tasks between columns to update its status quickly.{" "}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center "
                fill
                alt="Please wait "
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkLoadManagement;
