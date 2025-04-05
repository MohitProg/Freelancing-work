"use client";

import React, { useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";

const ChatBot = () => {
  // state for chat box

  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className=" fixed      right-2 bottom-2 flex items-center justify-center ">
        {/* messanger */}

        {/* messanger call */}

        <button
          className={`${showChat ? "hidden" : "block"}`}
          onClick={() => setShowChat(!showChat)}
        >
          <TbMessageCircleFilled color="#7b68ee" size={45} />
        </button>
      </div>

      <div
        className={` ${
          showChat ? "block" : "hidden"
        } lg:h-[80vh] h-[70vh]   rounded-lg    bg-white w-[95%] lg:w-[25%] shadow-lg fixed z-[300] right-2 overflow-hidden   bottom-4 lg:right-4  b`}
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

          <div className="flex  items-center  justify-start">
            <div className="bg-[#f1f4f7] relative p-3 py-5 rounded-lg text-sm">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-full h-5 w-5 object-cover absolute top-0 left-0"
                alt=""
              />

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti non beatae natus? Facilis sequi quia ad. Dignissimos
                corrupti magni amet maiores, ab, tenetur explicabo id
                repudiandae, suscipit earum numquam cum!
              </p>
            </div>
          </div>

          {/* message 2 */}

          <div className="flex  items-center  justify-end ">
            <div className="bg-[#f1f4f7] relative p-2 py-3 rounded-lg text-sm">
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>

        {/* message input field */}

        <div className="flex items-center gap-1 px-2">
          <input
            type="text"
            placeholder="Enter a message"
            className=" w-full p-2 py-2 focus:border-gray-500  rounded-sm text-sm common-border"
          />

          <button className="  py-[10px] primary-btn ">
            <IoSend size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
