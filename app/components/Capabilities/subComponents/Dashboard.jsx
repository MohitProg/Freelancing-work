import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <section className=" px-4    ">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2>
            Build reports to get all your pressing questions answered, like...
          </h2>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3 flex flex-col gap-3">
            <h2 className="text-3xl ">How did we do?</h2>
            <p className="text-para text-base leading-relaxed">
              Quickly see how your campaigns, pipeline, and sprint delivery have
              been performing. Just decide what you want to track, then ClickUp
              will turn complicated performance metrics into simple visuals.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center "
                fill
                alt="Please wait "
                src="https://cdn.dribbble.com/userupload/12565902/file/original-20384902f5cdadf5c3c2582661354d9a.png?resize=1200x900&vertical=center"
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
                src="https://cdn.dribbble.com/userupload/16012887/file/original-80b2915d7011310558c2fe94906fc3f2.png?resize=1200x900&vertical=center"
              />
            </div>
          </div>
          <div className="order-2 px-4 flex flex-col gap-3 ">
            <h2 className="text-3xl">How long did it take?</h2>
            <p className="text-para text-base leading-relaxed">
              Get answers about billable hours, time spent on tasks, and even
              estimates for future projects. You can setup Timesheet cards for
              clients or Calculation cards that automatic analyze time and give
              projections about work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20">
          <div className="order-2 md:order-1 p-3 flex flex-col gap-3">
            <h2 className="text-3xl ">Who's going to churn?</h2>
            <p className="text-para text-base leading-relaxed">
              ClickUp's CRM reports are easy to use so you can you to you can
              understand who's at risk and what you can do to change their mind.
              Use ClickUp like any CRM, then add cards that show different
              charts, figure calculations, and custom widgets.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className=" w-full relative h-[50vh]  rounded-xl   overflow-hidden ">
              <AnimateImage
                className="object-cover object-center "
                fill
                alt="Please wait "
                src="https://cdn.dribbble.com/userupload/17730954/file/original-1ca571d72aed46b341defcb0bf9a18e1.png?resize=1200x900&vertical=center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="common-section space-y-8">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Plan your everyday work</h2>
          <p className="primary-para ">
            The Calendar module gives you a month-by-month view of what's
            happening in the project. Just by clicking on a day, you can create
            new tasks, milestones, events or bugs, and assign them to the right
            people.
          </p>
        </div>

        <div className="relative h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/13405032/file/original-b1c5d1370e23c8c5f5a76a36add69d28.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
