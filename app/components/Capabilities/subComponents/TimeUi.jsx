import React from "react";
import { IoClose } from "react-icons/io5";
import { CornerDownRight } from "lucide-react";
import AnimateImage from "@/app/utils/AnimateImage";
const TimeUi = () => {
  return (
    <>
      {/* time line  */}

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
            src="https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default TimeUi;
