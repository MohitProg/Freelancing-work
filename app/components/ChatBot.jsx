"use client";
import React, { useEffect, useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { MessageCircleMore, MessageSquareText } from "lucide-react";
import { Input } from "@/components/ui/input";
import AnimateImage from "../utils/AnimateImage";

const ChatBot = () => {
  // state for chat box
  const chatbotData = [
    {
      id: 1,
      type: "chatbot",
      message:
        "Hi there! 👋 Welcome to our support chat. How can I assist you today?",
      questions: [
        {
          id: 1,
          type: "chatbot",
          question: "What are your business hours?",
          response:
            "We’re open Monday to Friday, 9 AM to 6 PM (EST). Let us know if you need help outside these hours!",

          subQuestions: [
            {
              id: 1,
              type: "chatbot",
              question: "What are your business hours?",
              response:
                "We’re open Monday to Friday, 9 AM to 6 PM (EST). Let us know if you need help outside these hours!",
            },
            {
              id: 2,
              type: "chatbot",
              question: "How can I track my order?",
              response:
                "You can track your order using the tracking number sent to your email. Or visit 'My Orders' in your account.",
            },
          ],
        },
        {
          id: 2,
          type: "chatbot",
          question: "How can I track my order?",
          response:
            "You can track your order using the tracking number sent to your email. Or visit 'My Orders' in your account.",
        },
        {
          id: 3,
          type: "chatbot",
          question: "Can I cancel my order?",
          response:
            "Orders can be canceled within 2 hours of placement. Please provide your order number to proceed.",
        },
        {
          id: 4,
          type: "chatbot",
          question: "Do you have a return policy?",
          response:
            "Yes! You can return items within 30 days of delivery. Make sure the item is unused and in original packaging.",
        },
        {
          id: 5,
          type: "chatbot",
          question: "How do I change my shipping address?",
          response:
            "If your order hasn’t shipped yet, we can help you update the address. Please provide your order ID.",
        },
      ],
    },
    {
      id: 2,
      type: "chatbot",

      message: "Hello again! 😊 Need help with anything else?",
      questions: [
        {
          id: 6,
          type: "chatbot",
          question: "How do I apply a discount code?",
          response:
            "You can enter a discount code at checkout in the promo code field before completing your payment.",
        },
        {
          id: 7,
          type: "chatbot",
          question: "I received a damaged item. What now?",
          response:
            "We’re sorry about that! Please share a photo of the item and your order number, and we’ll resolve it quickly.",
        },
        {
          id: 8,
          type: "chatbot",
          question: "Where do you ship from?",
          response:
            "We ship from our main warehouse located in New Jersey, USA.",
        },
        {
          id: 9,
          type: "chatbot",
          question: "Can I change items in my order?",
          response:
            "Once an order is placed, we can’t change the items. You can cancel the order and place a new one if it’s not shipped.",
        },
        {
          id: 10,
          type: "chatbot",
          question: "What payment methods do you accept?",
          response:
            "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay.",
        },
      ],
    },
    {
      id: 3,
      type: "chatbot",
      message: "Still here to help! What else can I assist you with?",
      questions: [
        {
          id: 11,
          type: "chatbot",
          question: "Is my data secure with you?",
          response:
            "Yes, we use top-level encryption and security standards to protect your personal and payment data.",
        },
        {
          id: 12,
          type: "chatbot",
          question: "Do you offer gift wrapping?",
          response:
            "Yes! Gift wrapping is available at checkout for a small additional fee.",
        },
        {
          id: 13,
          type: "chatbot",
          question: "Can I subscribe to your newsletter?",
          response:
            "Absolutely! You can subscribe via the footer on our website to get the latest deals and news.",
        },
        {
          id: 14,
          type: "chatbot",
          question: "How long does shipping take?",
          response:
            "Standard shipping takes 3–5 business days in the US. International orders may take 7–14 days depending on location.",
        },
        {
          id: 15,
          type: "chatbot",
          question: "How do I leave a review?",
          response:
            "You can leave a review by going to the product page and clicking 'Write a Review'. We appreciate your feedback!",
        },
      ],
    },
  ];
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState([]);
  const [answer, setanswer] = useState({
    id: "",
    ans: [],
  });

  const [userResponse, setUserResponse] = useState("");

  const HandleClick = ({ question }) => {
    console.log(question, "answer");
    if (question) {
      const findAnswer = chatbotData?.filter((value) =>
        value?.questions?.some((val) => val?.question === question)
      );

      const anwervalue = findAnswer[0]?.questions?.filter(
        (val) => val?.question === question
      )[0];

      setChatMessage([
        ...chatMessage,
        {
          id: chatMessage?.length + 1,
          message: anwervalue?.response,
          type: anwervalue?.type,
          questions: anwervalue?.subQuestions,
        },
      ]);

      console.log(anwervalue, chatMessage, "answer");
    }
  };

  const HandleSubmitMessge = () => {
    if (!userResponse) return;

    // Step 1: Add user message
    setChatMessage((prevMessages) => {
      const updatedMessages = [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          message: userResponse,
          type: "user",
        },
      ];

      // Step 2: Search after message is added
      const questiondata = chatbotData?.flatMap((val) => val?.questions);

      const searchTerm = userResponse?.toLowerCase()?.trim();

      // result of question
      const result = questiondata?.find((val) =>
        val?.question?.toLowerCase()?.includes(searchTerm)
      );

      console.log(result, "answer");
      let botMessage;

      if (result) {
        // Step 3: Add chatbot response
        botMessage = {
          id: updatedMessages.length + 1,
          message: "Please pick a suitable option",
          type: "chatbot",
          questions: [result],
        };
      } else {
        botMessage = {
          id: updatedMessages.length + 1,
          message:
            "Not Able to get You Can connect with Our Faccilitator 354351324",
          type: "chatbot",
        };
      }

      return [...updatedMessages, botMessage];
    });

    setUserResponse(""); // clear input field
  };
  useEffect(() => {
    setChatMessage([chatbotData[0]]);
  }, []);

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
              className="z-[300] bg-primary rounded-full p-1 shadow-sm"
              onClick={() => setShowChat(!showChat)}
            >
              <MessageCircleMore className="" color="#7b68ee" size={40} />
              {/* <MessageSquareText color="#7b68ee" size={40} /> */}
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
            className={` lg:h-[80vh] min-h-[70vh]   rounded-lg    bg-white w-[95%] sm:w-[60%] md:w-[50%] lg:w-[25%] shadow-lg fixed z-[300] right-2 overflow-hidden  bottom-4 lg:right-4  b`}
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

            <div className=" max-h-[70vh] h-[70vh] lg:max-h-[63vh] lg:h-[63vh] overflow-y-scroll p-3 space-y-4">
              <div className="flex items-center justify-center">
                <span className="text-para text-sm">Sat, Mar 29, 2:15 pm</span>
              </div>

              {/* message  1 */}
              {chatMessage?.length > 0 &&
                chatMessage?.map((val) => {
                  if (val?.type === "chatbot") {
                    return (
                      <motion.div
                        initial={{ y: 20, scale: 0.9 }}
                        whileInView={{ y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={val?.id}
                        className="flex   items-start flex-col   justify-start "
                      >
                        <div className=" relative flex items-start gap-1 rounded-lg text-sm  ">
                          <div className="relative h-5 w-5 rounded-full  overflow-hidden ">
                            <AnimateImage
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              className=" object-cover "
                              alt=""
                              fill
                            />
                          </div>

                          <div className="flex flex-col ">
                            <motion.div className="flex  bg-[#f1f4f7] p-2 items-center  justify-end">
                              <div className="bg-[#f1f4f7] relative  rounded-lg text-[0.9rem]">
                                <p className="text-para/70">{val?.message}</p>
                              </div>
                            </motion.div>

                            <div className="p-1  text-blue-600 ">
                              <ul className="flex flex-col gap-2 ">
                                {val?.questions?.map((value) => (
                                  <li
                                    key={value?.id}
                                    onClick={() => HandleClick(value)}
                                    className="text-[0.8rem] underline cursor-pointer"
                                  >
                                    {value?.question}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.div
                        initial={{ y: 20, scale: 0.9 }}
                        whileInView={{ y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={val?.id}
                        className="flex   items-end flex-col   justify-center   "
                      >
                        <motion.div className="flex  items-center bg-[#f1f4f7] rounded-lg  p-3   justify-end">
                          <div className=" relative  rounded-lg text-[0.9rem]">
                            <p className="text-para/70">{val?.message}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  }
                })}
            </div>

            {/* message input field */}

            <div className="flex items-center gap-1 px-2 py-2">
              <Input
                type="text"
                placeholder="Enter a message"
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                className=" w-full p-2 py-3 focus:border-gray-500  rounded-sm text-sm common-border"
              />

              <button
                onClick={HandleSubmitMessge}
                className="  py-[10px] primary-btn "
              >
                <IoSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
