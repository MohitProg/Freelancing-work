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
            heading: "Manage and assign tasks effortlessly",
            desc: "Organize and track all your work in one place for enhanced productivity.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Time Line",
            icon: "",
            linKpath: "time-line",
            heading: "Visualize task progress over time",
            desc: "Use a horizontal timeline to schedule and track project progress.",
            image: "https://cdn.dribbble.com/userupload/5943099/...",
          },
          {
            title: "Calender",
            icon: "",
            linKpath: "calender",
            heading: "Plan tasks using a calendar view",
            desc: "Map tasks, meetings, and deadlines on a clear, visual calendar.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Gantt charts",
            icon: "",
            linKpath: "gantt-charts",
            heading: "Track dependencies with Gantt charts",
            desc: "Understand timelines and task relations with drag-and-drop charts.",
            image:
              "https://images.unsplash.com/photo-1726568313407-c7d9c8a8ce88?...",
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
            heading: "Track agile sprints with precision",
            desc: "Organize work into time-boxed iterations for better delivery.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Kanban",
            icon: "",
            linKpath: "kanban",
            heading: "Streamline workflows with Kanban",
            desc: "Manage task status and progress visually with Kanban boards.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Roadmap & Backlog",
            icon: "",
            linKpath: "roadmap-backlog",
            heading: "Prioritize your development pipeline",
            desc: "Plan, organize, and maintain your product vision with roadmaps and backlogs.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
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
            heading: "View and manage team timesheets",
            desc: "Centralized dashboard to track hours logged and work summaries.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "AutoFill TimeSheet",
            icon: "",
            linKpath: "autofill-timesheet",
            heading: "Automate timesheet entries",
            desc: "Use activity data to auto-populate timesheets accurately.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Manual TimeSheet",
            icon: "",
            linKpath: "manual-timesheet",
            heading: "Log time entries manually",
            desc: "Enter daily work hours manually for flexible tracking.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Daily task TimeSheet",
            icon: "",
            linKpath: "daily-task-timesheet",
            heading: "Daily task-level time tracking",
            desc: "Break down work hours by individual tasks each day.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
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
            heading: "Capture employee screens automatically",
            desc: "Track work progress with automated, periodic screenshots.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "liveStreaming",
            icon: "",
            linKpath: "livestreaming",
            heading: "Monitor activity in real time",
            desc: "Stream user screens live for immediate visibility and support.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
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
            heading: "Track employee attendance efficiently",
            desc: "Monitor check-ins, absences, and working hours across teams.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Workload management",
            icon: "",
            linKpath: "workload-load-management",
            heading: "Balance team workloads smartly",
            desc: "Distribute tasks fairly and track utilization with real-time data.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Goals",
            icon: "",
            linKpath: "goals",
            heading: "Set and achieve team goals",
            desc: "Align objectives and measure key results with structured goals.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Dashboard",
            icon: "",
            linKpath: "dashboard",
            heading: "Get a holistic overview of work",
            desc: "Visualize KPIs, tasks, and timelines in one customizable view.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
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
            heading: "Identify productivity trends over time",
            desc: "Spot patterns in work behavior and adjust team strategies.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Productivity Metrices",
            icon: "",
            linKpath: "productivity-matrices",
            heading: "Measure performance with key metrics",
            desc: "Track output, efficiency, and goal completion rates.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Productivity Rules",
            icon: "",
            linKpath: "productivity-rules",
            heading: "Define rules to boost output",
            desc: "Set policies and boundaries to encourage focused work.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Moast used Apps",
            icon: "",
            linKpath: "moast-used-apps",
            heading: "Track most-used applications",
            desc: "See which apps dominate daily use for productivity insights.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
        ],
      },
      {
        title: "Breaks & Alerts ",
        link: "#",
        subCat: [
          {
            title: "Breaks ",
            icon: "",
            linKpath: "breaks",
            heading: "Manage employee break time",
            desc: "Record and analyze break durations to encourage healthy habits.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
          },
          {
            title: "Alert",
            icon: "",
            linKpath: "alerts",
            heading: "Set up alerts and reminders",
            desc: "Notify team members about deadlines, shifts, or anomalies.",
            image:
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?...",
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
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Real Time User Activity",
        linKpath: "real-time-user-activity",
        image:
          "https://cdn.dribbble.com/userupload/38161878/file/original-0db768be4d133be952fb82f42884d554.png?resize=1200x924&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Productive Application or Classification",
        linKpath: "productive-application-or-classification",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Hourly Engagement",
        linKpath: "hourly-engagement",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Activity And Inactivity",
        linKpath: "activity-and-inactivity",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "The real productivity algo",
        linKpath: "real-productivity-algo",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Interactive Desktop Application",
        linKpath: "interactive-desktop-application",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Screenshots",
        linKpath: "screenshots",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Live video streaming",
        linKpath: "live-video-streaming",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Project And Taskmanagement",
        linKpath: "project-and-taskmanagement",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Auto fill timesheet",
        linKpath: "auto-fill-timesheet",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Application & Url Alerts ",
        linKpath: "application-url-alerts",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Application And website Usage ",
        linKpath: "application-webiste-usage",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Goal Setting And Benchmarking ",
        linKpath: "goal-setting-benchmarking",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Work load Balance ",
        linKpath: "work-load-balance",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },

      {
        title: "Repots ",
        linKpath: "repots",
        image:
          "https://cdn.dribbble.com/userupload/16814448/file/original-060f8fe1874d47b247c73cd4af6657ba.png?resize=1200x900&vertical=center",
        desc: "Attendance Management refers to the process of tracking and managing the attendance of employees, students, or members in an organization or institution",
        icon: "",
        data: [
          {
            id: 1,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 2,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },

          {
            id: 3,
            title: "Comprehensive Attendance Tracking",
            points: [
              "Real-time tracking of employee clock-ins and clock-outs",
              "Automatic calculation of total work hours, online hours, active and inactive hours including overtime",
              "Detailed reports for individual and team attendance patterns",
              "Real-time tracking of employee clock-ins and clock-outs",
            ],

            image:
              "https://cdn.dribbble.com/userupload/17467126/file/original-b427ff3edb5617d3921e11b82dddb14e.png?resize=1200x900&vertical=center",
          },
        ],
      },
    ],
  },
];

export default ArrayData;
