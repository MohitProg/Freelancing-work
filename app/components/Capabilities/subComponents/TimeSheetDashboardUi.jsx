import React from "react";
import { IoClose } from "react-icons/io5";
import { CornerDownRight } from "lucide-react";
import AnimateImage from "@/app/utils/AnimateImage";
import AnimateButton from "@/app/utils/AnimateButton";
const TimeSheetDashboardUi = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Time Tracking Dashboard: Task & Project Insights",
      description:
        "Break down hours logged per task or project to understand where time is being spent and optimize resource allocation.",
      src: "https://cdn.dribbble.com/userupload/13405032/file/original-b1c5d1370e23c8c5f5a76a36add69d28.png?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "User Timesheet Overview with Role-Based Filtering",
      description:
        "Track how individual team members log their hours—great for performance reviews, accountability, and workload balancing",
      src: "https://cdn.dribbble.com/userupload/42291187/file/original-b159bcc4e17b6cee749b8907f6f2e99f.jpg?resize=1000x750&vertical=center",
    },

    {
      id: 3,
      title: "Flexible Time Views: Daily, Weekly, Monthly",
      description:
        "Toggle between multiple timeframes to analyze productivity patterns, detect time spikes, and plan efficiently.",
      src: "https://cdn.dribbble.com/userupload/12813342/file/original-920860d845e3e0ec3ed7da62dfcbc582.png?resize=1200x900&vertical=center",
    },

    {
      id: 4,
      title: "Timesheet Management Submission & Approval Status",
      description:
        "Monitor timesheet lifecycles with real-time updates on pending, approved, or rejected entries for streamlined project governance.",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },
  ];
  return (
    <>
      {FeatureArray?.map((value) => (
        <section key={value?.id} className="common-section space-y-8 p-3">
          <div className="text-center space-y-2 flex flex-col items-center">
            <h2 className="">{value?.title}</h2>
            <p className="primary-para  mx-auto">{value?.description}</p>
          </div>

          <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
            <AnimateImage
              className="object-cover object-center"
              src={value?.src}
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default TimeSheetDashboardUi;
