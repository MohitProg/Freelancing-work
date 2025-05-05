import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const Attendence = () => {
  return (
    <>
      <section className="common-section space-y-8">
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className="">Smart Attendance & Activity Analytics Dashboard</h2>
          <p className="primary-para max-w-4xl mx-auto">
            PulseTime offers an intuitive and visually engaging attendance
            tracking experience for both users and administrators. Users can
            monitor their daily, weekly, and monthly attendance patterns through
            a clean, user-friendly interface.
          </p>
        </div>

        <div className="relative h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/15213681/file/original-358ec6d5b0b8ade77d6d79048313ea69.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>

      <section className="common-section  flex flex-col items-center px-6 py-5 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className=""> Empowering Transparent Time Tracking</h2>
          <p className="primary-para">
            Our attendance system is designed to simplify and enhance workforce
            time management. From real-time check-ins to insightful analytics,
            these features help teams and admins maintain transparency, improve
            punctuality, and make informed decisions based on accurate
            attendance data.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
          {/* Card 1 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden shadow-md ">
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
                Self Check-In/Check-Out
              </h3>
              <p className="text-gray-600">
                Generate Task summaries, progress updates, translations, and
                action items.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden shadow-md">
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
                Daily, Weekly, and Monthly View
              </h3>
              <p className="text-gray-600">
                Time-block Tasks automatically, based on urgency, workload, &
                deadlines.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden shadow-md">
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
                Attendance History & Reports
              </h3>
              <p className="text-gray-600">
                Auto-create Tasks from conversations, Docs, and previous Tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Attendence;
