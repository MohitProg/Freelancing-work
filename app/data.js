import {
  CiSearch,
  CiCircleCheck,
  CiBellOn,
  CiCalendar,
  CiCloud,
  CiCamera,
  CiCreditCard1,
  CiGlobe,
  CiMail,
  CiHeart,
  CiHome,
  CiLocationArrow1,
  CiLock,
  CiMicrophoneOn,
  CiMusicNote1,
  CiPen,
  CiPhone,
  CiPower,
  CiShoppingCart,
  CiStar,
  CiTrophy,
  CiWallet,
  CiUser,
  CiVideoOn,
  CiTrash,
  CiTimer,
  CiSun,
  CiSettings,
  CiPaperplane,
  CiMap,
  CiKeyboard,
  CiImageOn,
  CiGift,
  CiFileOn,
  CiEdit,
  CiDollar,
  CiClock2,
  CiBookmark,
  CiBatteryFull,
} from "react-icons/ci";
import Google from "../public/images/Google.png";
import Facebook from "../public/images/facebook.png";
import Instagram from "../public/images/insta.png";

// data of accordian

export const accordionData = [
  {
    title: "Project Overview",
    description: "A brief summary of the project's goals and objectives.",
  },
  {
    title: "Task Management",
    description: "Manage tasks, set priorities, and track progress.",
  },
  {
    title: "Team Collaboration",
    description:
      "Facilitate communication and coordination among team members.",
  },
  {
    title: "Deadline Tracking",
    description: "Monitor and meet important project deadlines.",
  },
  {
    title: "File Sharing",
    description: "Upload and share project-related documents securely.",
  },
  {
    title: "Progress Reports",
    description: "Generate reports to analyze project performance.",
  },
  {
    title: "User Roles & Permissions",
    description: "Define roles and assign permissions to team members.",
  },
  {
    title: "Notifications & Alerts",
    description: "Receive timely updates and alerts about project activities.",
  },
  {
    title: "Commenting System",
    description: "Allow team members to discuss and provide feedback on tasks.",
  },
  {
    title: "Project Archiving",
    description: "Store and archive completed projects for future reference.",
  },
];

// data of home image
export const HomeImagedata = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

//  data of company scroller

export const CompanyPreviewdata = [
  {
    text: "google",
    img: Google,
  },
  {
    text: "facebook",
    img: Facebook,
  },
  {
    text: "instagram",
    img: Instagram,
  },
];

const ArrayData = [
  { title: "Dependencies", icon: CiSearch },
  { title: "Completed", icon: CiCircleCheck },
  { title: "Notifications", icon: CiBellOn },
  { title: "Events", icon: CiCalendar },
  { title: "Cloud", icon: CiCloud },
  { title: "Camera", icon: CiCamera },
  { title: "Payments", icon: CiCreditCard1 },
  { title: "Global", icon: CiGlobe },
  { title: "Mail", icon: CiMail },
  { title: "Favorites", icon: CiHeart },
  { title: "Home", icon: CiHome },
  { title: "Location", icon: CiLocationArrow1 },
  { title: "Security", icon: CiLock },
  { title: "Microphone", icon: CiMicrophoneOn },
  { title: "Music", icon: CiMusicNote1 },
  { title: "Edit", icon: CiPen },
  { title: "Phone", icon: CiPhone },
  { title: "Power", icon: CiPower },
  { title: "Cart", icon: CiShoppingCart },
  { title: "Star", icon: CiStar },
  { title: "Achievement", icon: CiTrophy },
  { title: "Wallet", icon: CiWallet },
  { title: "User", icon: CiUser },
  { title: "Video", icon: CiVideoOn },
  { title: "Trash", icon: CiTrash },
  { title: "Timer", icon: CiTimer },
  { title: "Sun", icon: CiSun },
  { title: "Settings", icon: CiSettings },
  { title: "Send", icon: CiPaperplane },
  //   { title: "Moon", icon: CiMoon },
  { title: "Map", icon: CiMap },
  { title: "Keyboard", icon: CiKeyboard },
  { title: "Gallery", icon: CiImageOn },
  { title: "Gifts", icon: CiGift },
  { title: "Files", icon: CiFileOn },
  { title: "Edit Mode", icon: CiEdit },
  { title: "Transactions", icon: CiDollar },
  { title: "Clock", icon: CiClock2 },
  { title: "Bookmark", icon: CiBookmark },
  { title: "Battery", icon: CiBatteryFull },
  { title: "Files", icon: CiFileOn },
  { title: "Edit Mode", icon: CiEdit },
  { title: "Transactions", icon: CiDollar },
  { title: "Clock", icon: CiClock2 },
  { title: "Bookmark", icon: CiBookmark },
  { title: "Battery", icon: CiBatteryFull },
  { title: "Files", icon: CiFileOn },
  { title: "Edit Mode", icon: CiEdit },
  { title: "Transactions", icon: CiDollar },
];

// data for navbar all features and capabilitues and integration
export const dataArray = [
  // features for capability
  {
    title: "Capabilities",
    subData: [
      {
        title: "Project Mangement",
        link: "#",
        subCat: [
          {
            title: "Tasks",
            icon: "",
            linKpath: "tasks",
            data: {
              heading: "A Task Management Platform that saves time",
              desc: "Automate, prioritize, and keep work moving—all while staying connected to Docs, Whiteboards, Chat, and more.",
              image:
                "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          },
          {
            title: "Time Line",
            icon: "",
            linKpath: "time-line",
          },
          {
            title: "Calender",
            icon: "",
            linKpath: "calender",
          },
          {
            title: "Gantt charts",
            icon: "",
            linKpath: "gantt-charts",
            data: {
              heading: "Visualize projects as organized timelines",
              desc: "ClickUp's drag-and-drop Gantt Charts give you a clear picture of your team's progress, dependencies, and any dangerously over-optimistic deadlines.",
              image:
                "https://images.unsplash.com/photo-1726568313407-c7d9c8a8ce88?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          },
        ],
      },

      {
        title: "Product Development",
        link: "#",
        subCat: [
          {
            title: "Sprints",
            icon: "",
            linKpath: "sprints",
          },
          {
            title: "Kanban",
            icon: "",
            linKpath: "kanban",
          },
          {
            title: "Roadmap & Backlog",
            icon: "",
            linKpath: "roadmap-backlog",
          },
        ],
      },

      {
        title: "Time Sheet",
        link: "#",
        subCat: [
          {
            title: "Time Sheet DashBoard",
            icon: "",
            linKpath: "time-sheet-dashboard",
          },
          {
            title: "AutoFill TimeSheet",
            icon: "",
            linKpath: "autofill-timesheet",
          },
          {
            title: "Manual TimeSheet",
            icon: "",
            linKpath: "manual-timesheet",
          },
          {
            title: "Daily task TimeSheet",
            icon: "",
            linKpath: "daily-task-timesheet",
          },
        ],
      },

      {
        title: "Screen Monitor",
        link: "#",
        subCat: [
          {
            title: "ScreenShots",
            icon: "",
            linKpath: "screenshots",
          },
          {
            title: "liveStreaming",
            icon: "",
            linKpath: "livestreaming",
          },
        ],
      },

      {
        title: "Resource Management",
        link: "#",
        subCat: [
          {
            title: "Attendence",
            icon: "",
            linKpath: "attendence",
          },
          {
            title: "Time Tracking",
            icon: "",
            linKpath: "time-tracking",
          },
          {
            title: "WorkLoad views",
            icon: "",
            linKpath: "workload-views",
          },
          {
            title: "Goals",
            icon: "",
            linKpath: "goals",
          },

          {
            title: "Dashboard",
            icon: "",
            linKpath: "dashboard",
          },
        ],
      },

      {
        title: "Productivity Tracking ",
        link: "#",
        subCat: [
          {
            title: "Active Trends",
            icon: "",
            linKpath: "active-trends",
          },
          {
            title: "Productivity Metrices",
            icon: "",
            linKpath: "productivity-matrices",
          },
          {
            title: "Productivity Rules",
            icon: "",
            linKpath: "productivity-rules",
          },
          {
            title: "Moast used Apps",
            icon: "",
            linKpath: "moast-used-apps",
          },
        ],
      },

      {
        title: "Breaks ",
        link: "#",
        subCat: [
          {
            title: "Pre-defined breaks ",
            icon: "",
            linKpath: "predefined-breaks",
          },
          {
            title: "Custom Breaks",
            icon: "",
            linKpath: "custom-breaks",
          },
          {
            title: "idle time breaks",
            icon: "",
            linKpath: "idle-time-breaks",
          },
          {
            title: "custom statuses",
            icon: "",
            linKpath: "custom-statuses",
          },
        ],
      },

      {
        title: "Alrets",
        link: "#",
        subCat: [
          {
            title: "Auto Alerts ",
            icon: "",
            linKpath: "auto-alerts",
          },
          {
            title: "Custom Alerts",
            icon: "",
            linKpath: "custom-alerts",
          },
        ],
      },
    ],
  },
  // features for all features
  {
    title: "All Features",
    subData: [
      {
        title: "Attendence Management",
        linKpath: "attendence-management",
        icon: "",
        data: {},
      },

      {
        title: "Real Time User Activity",
        linKpath: "real-time-user-activity",
        icon: "",
        data: {},
      },

      {
        title: "Productive Application or Classification",
        linKpath: "productive-application-or-classification",
        icon: "",
        data: {},
      },

      {
        title: "Hourly Engagement",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Activity And Inactivity",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "The real productivity algo",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Interactive Desktop Application",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Screenshots",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Live video streaming",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Project And Taskmanagement",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Auto fill timesheet",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Application & Url Alerts ",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Application And website Usage ",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Goal Setting And Benchmarking ",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Work load Balance ",
        linKpath: "#",
        icon: "",
        data: {},
      },

      {
        title: "Repots ",
        linKpath: "#",
        icon: "",
        data: {},
      },
    ],
  },
];

export default ArrayData;
