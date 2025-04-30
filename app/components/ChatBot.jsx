"use client";
import React, { useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { MessageCircleMore } from "lucide-react";

const ChatBot = () => {
  // state for chat box

  const [showChat, setShowChat] = useState(false);
  const [answer, setanswer] = useState({
    id: "",
    ans: [],
  });

  const handleClick = (val) => {
    setanswer({ id: val?.id, ans: [...answer.ans, val.answer] });
  };

  // data array for question anwer
  const chatbotQA = [
    {
      question: "What is Prisma?",
      id: 1,
      answer:
        "Prisma is an open-source ORM for Node.js and TypeScript that simplifies database access by providing a type-safe and auto-generated query builder.",
    },
    {
      id: 2,
      question: "How do I connect Prisma to my database?",
      answer:
        "You connect Prisma to your database by setting the connection URL in the `DATABASE_URL` environment variable inside your `.env` file.",
    },
    {
      id: 3,
      question: "What is a Prisma schema?",
      answer:
        "The Prisma schema is a file (`schema.prisma`) where you define your data models, the database provider, and Prisma client generation settings.",
    },
    {
      id: 4,
      question: "How do I run a Prisma migration?",
      answer:
        "You can run a Prisma migration using the command `npx prisma migrate dev --name <migration-name>`.",
    },
  ];

  return (
    <>
      <AnimatePresence>
        <div className=" fixed right-4 bottom-4 flex items-center justify-center ">
          {/* messanger */}

          {!showChat && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={"chatbtn"}
              className="z-[300]"
              onClick={() => setShowChat(!showChat)}
            >
              <MessageCircleMore className="" color="#7b68ee" size={40} />
            </motion.button>
          )}
        </div>

        {showChat && (
          <motion.div
            key={"chatbot"}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={` lg:h-[80vh] h-[70vh]   rounded-lg    bg-white w-[95%] lg:w-[25%] shadow-lg fixed z-[300] right-2 overflow-hidden  bottom-4 lg:right-4  b`}
          >
            <div className="bg-purple-500">
              <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2  p-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-10 rounded-full  object-cover w-10"
                    alt=""
                  />

                  <div className="space-y-[-6px] text-white">
                    <h4 className="font-bold text-sm">Mohit</h4>
                    <span className="text-sm ">Ai chat Bot</span>
                  </div>
                </div>

                <button className="p-3" onClick={() => setShowChat(!showChat)}>
                  <RxCross2 color="#ffffff" size={20} />

                </button>
              </div>
            </div>

            {/* chat box  */}

            <div className=" max-h-[54vh] h-[54vh] lg:max-h-[65vh] lg:h-[65vh] overflow-y-scroll p-3 space-y-4">
              <div className="flex items-center justify-center">
                <span className="text-para text-sm">Sat, Mar 29, 2:15 pm</span>
              </div>

              {/* message  1 */}

              <div className="flex  items-center  justify-start ">
                <div className="bg-[#f1f4f7] relative p-3 py-5 rounded-lg text-sm  shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="rounded-full h-5 w-5 object-cover absolute top-0 left-0"
                    alt=""
                  />

                  <div className="flex flex-col gap-2">
                    {chatbotQA?.map((val) => (
                      <p
                        key={val?.id}
                        onClick={() => handleClick(val)}
                        className="underline text-[0.9rem] text-para/70 cursor-pointer"
                      >
                        {val?.question}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* message 2 */}

              {answer?.ans?.length > 0 && (
                <>
                  {answer?.ans?.map((val, ind) => (
                    <motion.div
                      initial={{ y: 20, scale: 0.9 }}
                      whileInView={{ y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      key={ind}
                      className="flex  items-center  justify-end "
                    >
                      <div className="bg-[#f1f4f7] relative p-2 py-3 rounded-lg text-[0.9rem]">
                        <p className="text-para/70">{val}</p>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </div>

            {/* message input field */}

            {/* <div className="flex items-center gap-1 px-2">
              <input
                type="text"
                placeholder="Enter a message"
                className=" w-full p-2 py-2 focus:border-gray-500  rounded-sm text-sm common-border"
              />

              <button className="  py-[10px] primary-btn ">
                <IoSend size={20} />
              </button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
