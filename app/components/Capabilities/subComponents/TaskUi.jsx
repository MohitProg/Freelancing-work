import AnimateImage from "@/app/utils/AnimateImage";
import { CornerDownRight } from "lucide-react";
import React from "react";
import { IoClose } from "react-icons/io5";
const TaskUi = () => {
  return (
    <>
      <section className="common-section  flex flex-col gap-8 p-2 items-center">
        {/* Heading Section */}
        <h2>Task Creation</h2>
        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-6   ">
          {/* Left Card - Old Way */}
          <div className=" bg-primary  rounded-xl  p-2 w-full  ">
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
          <div className="bg-gradient-to-br  from-[#8b5cf6] to-[#933afe] rounded-xl p-3 md:py-5  md:px-6 w-full  text-white">
            <h3 className="text-2xl font-bold mb-3 text-center">The Our Way</h3>
            <div className="bg-primary rounded-2xl p-3 space-y-2 text-gray-800">
              {[
                "Project updates come to me!",
                "Progress predicted months in advance.",
                "I always know which task is most important.",
                "Every task is searchable from anywhere.",
                "All teams can track the same task.",
                "My calendar auto-blocks time for tasks.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 md:gap-5">
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

      <section className="common-section  flex flex-col items-center  py-5 px-4  space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="">Assign Responsibilities</h2>
          <p className="primary-para">
            Assign tasks to specific team members with clarity
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
          {/* Card 1 */}
          <div className=" bg-primary  rounded-xl  overflow-hidden">
            <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/4380927/file/original-f5def8e719298c59949c11edc6cc237f.png?resize=1504x1128&vertical=center"
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
          <div className=" bg-primary  rounded-xl  overflow-hidden ">
            <div className="bg-gradient-to-tr from-blue-800 to-purple-300  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/41533451/file/original-1414e93c3e78b2d25420f0a4e31d86c2.jpg?resize=1504x1128&vertical=center"
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
          <div className=" bg-primary  rounded-xl  overflow-hidden ">
            <div className="bg-gradient-to-tr from-pink-800 to-purple-300  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/12339808/file/original-4971a87cc84c19a0cbea25b5f98aa177.png?resize=1504x1128&vertical=center"
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
      <section className="common-section px-4">
        <div className="py-7  flex flex-col items-center ">
          <h2>Plan with Timelines</h2>
          <p className="primary-para">
            Set start & due dates to stay on schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
          {/* Card 1 */}
          <div className="bg-primary  overflow-hidden  rounded-xl  flex flex-col justify-between">
            <div className="p-3 py-4">
              <h3 className="text-xl font-semibold text-texthead mb-3">
                Track your time from any device
              </h3>
              <p className="text-para mb-4">
                Record time from your desktop, mobile, or web browser with
                <a href="#" className="text-purple-600 underline">
                  Chrome extension
                </a>
                . Easily link time tracked to any task you're working on in
                ClickUp.
              </p>
            </div>

            <div className="h-[30vh] relative ">
              <AnimateImage
                className={"object-cover"}
                src="https://cdn.dribbble.com/userupload/4380927/file/original-f5def8e719298c59949c11edc6cc237f.png?resize=1504x1128&vertical=center"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-primary  overflow-hidden  rounded-xl   flex flex-col justify-between">
            <div className="p-3 py-4">
              <h3 className="text-xl font-semibold text-texthead mb-3">
                Sync your time with us
              </h3>
              <p className="text-para mb-4">
                Record time from your desktop, mobile, or web browser with
                <a href="#" className="text-purple-600 underline">
                  Chrome extension
                </a>
                . Easily link time tracked to any task you're working on in
                ClickUp.
              </p>
            </div>

            <div className="h-[30vh] relative ">
              <AnimateImage
                className={"object-cover"}
                src="https://images.unsplash.com/photo-1590402494756-10c265b9d736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-primary  overflow-hidden  rounded-xl  flex flex-col justify-between">
            <div className="p-3 py-4">
              <h3 className="text-xl font-semibold text-texthead mb-3">
                Update your time from anywhere
              </h3>
              <p className="text-para mb-4">
                Record time from your desktop, mobile, or web browser with
                <a href="#" className="text-purple-600 underline">
                  Chrome extension
                </a>
                . Easily link time tracked to any task you're working on in
                ClickUp.
              </p>
            </div>

            <div className="h-[30vh] relative ">
              <AnimateImage
                className={"object-cover"}
                src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className=" px-4 py-4 ">
          <div className="py-7 flex flex-col items-center text-center">
            <h2>Break Down Work</h2>
            <p className="primary-para">
              Organize complex projects into smaller, trackable subtasks
            </p>
          </div>

          <div className="w-full h-[50vh] md:h-[80vh] relative  rounded-xl overflow-hidden ">
            <AnimateImage
              className="object-cover"
              src="https://cdn.dribbble.com/userupload/4161840/file/original-b725c82654822e33dbeb49c884bc2e76.png?resize=1504x1128&vertical=center"
            />
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className=" px-4 py-4  ">
          <div className="py-7 flex flex-col items-center text-center ">
            <h2>Track Progress</h2>
            <p className="primary-para">
              Update task status as “To Do,” “In Progress,” or “Done.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" bg-primary overflow-hidden  hover:shadow-xl  rounded-xl flex flex-col">
              <div className=" relative      w-full h-[40vh] flex items-center justify-center overflow-hidden rounded">
                <AnimateImage
                  className="object-cover"
                  src="https://cdn.dribbble.com/userupload/4161840/file/original-b725c82654822e33dbeb49c884bc2e76.png?resize=1504x1128&vertical=center"
                />

                <div className="flex flex-col gap-1 bg-black/50  p-2 py-4 absolute top-0 left-0 right-0 bottom-0  items-start justify-end">
                  <div className="flex flex-col items-start gap-1 ">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Notes
                    </h3>
                    <p className="text-[1rem]  font-medium text-white leading-relaxed text-start">
                      Add notes to your time entries to reference exactly what
                      you spent time on. How to use it and find it and enjoy it
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-primary overflow-hidden  hover:shadow-xl    rounded-xl flex flex-col">
              <div className=" relative      w-full h-[40vh] flex items-center justify-center overflow-hidden rounded">
                <AnimateImage
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1578496479939-722d9dd1cc5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div className="flex flex-col gap-1 bg-black/30  p-2 py-4 absolute top-0 left-0 right-0 bottom-0  items-start justify-end">
                  <div className="flex flex-col items-start gap-1 ">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Notes
                    </h3>
                    <p className="text-[1rem]  font-medium text-white leading-relaxed text-start">
                      Add notes to your time entries to reference exactly what
                      you spent time on. How to use it and find it and enjoy it
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-primary overflow-hidden  hover:shadow-xl   rounded-xl flex flex-col">
              <div className=" relative      w-full h-[40vh]  flex items-center justify-center overflow-hidden rounded">
                <AnimateImage
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1578496479939-722d9dd1cc5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div className="flex flex-col gap-1 bg-black/30  p-2 py-4 absolute top-0 left-0 right-0 bottom-0  items-start justify-end">
                  <div className="flex flex-col items-start gap-1 ">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Notes
                    </h3>
                    <p className="text-[1rem]  font-medium text-white leading-relaxed text-start">
                      Add notes to your time entries to reference exactly what
                      you spent time on. How to use it and find it and enjoy it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskUi;
