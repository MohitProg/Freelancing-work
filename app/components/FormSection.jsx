"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AnimateButton from "../utils/AnimateButton";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MotionButton = motion(DialogTrigger);
const FormSection = ({ title, className, cat }) => {
  const [userdata, setUserdata] = useState({
    name: null,
    organizationName: null,
    location: null,
    linkedinurl: null,
    email: null,
    phoneNo: null,
    teamsize: null,
    message: null,
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      !userdata?.name ||
      !userdata?.organizationName ||
      !userdata?.location ||
      !userdata?.linkedinurl ||
      !userdata?.email ||
      !userdata?.email ||
      !userdata?.phoneNo ||
      !userdata?.teamsize ||
      !userdata?.message
    ) {
      alert("please fill all the required filled");
    } else {
      alert("data submit ");
    }
  };

  console.log(userdata);

  return (
    <>
      <Dialog>
        <MotionButton
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.6,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className={className}
        >
          {title}{" "}
          {cat === "pricing" || cat === "NavMenu" ? (
            ""
          ) : (
            <GoArrowRight size={20} />
          )}
        </MotionButton>

        <DialogContent
          className={
            " w-[95vw] md:w-[60vw]  !max-w-none  outline-none  border-none"
          }
        >
          <div className="hidden">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>
          </div>

          {/* form of data  */}

          <div className=" flex flex-col gap-3">
            <div className="  space-y-2">
              {/* logo */}

              <div className="h-[7vh] w-[7vh] relative">
                <Image
                  fill
                  alt="logo"
                  className="object-cover object-center"
                  src={
                    "https://images.unsplash.com/photo-1646627927874-be8c13d0ae1a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </div>

              <div className="flex flex-col items-start ">
                <h2 className="text-xl px-0 ">InEquary Form</h2>
                <p>we will get in touch with you in shortly</p>
              </div>
            </div>

            <form
              onSubmit={HandleSubmit}
              action=""
              className="flex flex-col gap-2 "
            >
              <div className="flex flex-col gap-2  h-[60vh] md:h-full  overflow-y-scroll md:overflow-hidden   ">
                <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2 p-1 ">
                    <label
                      htmlFor=""
                      className="text-para text-md  after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      className="common-input "
                      onChange={(e) =>
                        setUserdata({ ...userdata, name: e.target.value })
                      }
                      value={userdata?.name || ""}
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label
                      htmlFor=""
                      className="text-para text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Organization Name
                    </label>
                    <Input
                      type="text"
                      className="common-input "
                      onChange={(e) =>
                        setUserdata({
                          ...userdata,
                          organizationName: e.target.value,
                        })
                      }
                      value={userdata?.organizationName || ""}
                      placeholder="Enter organization Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label
                      htmlFor=""
                      className="text-para text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Location
                    </label>
                    <Input
                      type="text"
                      onChange={(e) =>
                        setUserdata({ ...userdata, location: e.target.value })
                      }
                      value={userdata?.location || ""}
                      className="common-input "
                      placeholder="Enter your location"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label htmlFor="" className="text-para text-md">
                      Linkedin Url
                    </label>
                    <Input
                      type="text"
                      onChange={(e) =>
                        setUserdata({
                          ...userdata,
                          linkedinurl: e.target.value,
                        })
                      }
                      value={userdata?.linkedinurl || ""}
                      className="common-input "
                      placeholder="Enter your location"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label
                      htmlFor=""
                      className="text-para text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Email
                    </label>
                    <Input
                      type="text"
                      onChange={(e) =>
                        setUserdata({ ...userdata, email: e.target.value })
                      }
                      value={userdata?.email || ""}
                      className="common-input common-border"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1  ">
                    <label
                      htmlFor=""
                      className="text-para text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Phone No
                    </label>
                    <Input
                      type="text"
                      onChange={(e) =>
                        setUserdata({ ...userdata, phoneNo: e.target.value })
                      }
                      value={userdata?.phoneNo || ""}
                      className="common-input common-border"
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2  p-1 ">
                    <label
                      htmlFor=""
                      className="text-para text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Team Size
                    </label>
                    <Select
                      onValueChange={(e) =>
                        setUserdata({ ...userdata, teamsize: e })
                      }
                      value={userdata?.teamsize || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select team Size " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1–10 employees</SelectItem>
                        <SelectItem value="11-50">11–50 employees</SelectItem>
                        <SelectItem value="51-200">51–200 employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2   p-1">
                  <label
                    htmlFor=""
                    className="text-para text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                  >
                    message
                  </label>
                  <Textarea
                    type="text"
                    onChange={(e) =>
                      setUserdata({ ...userdata, message: e.target.value })
                    }
                    value={userdata?.message || ""}
                    className="common-input common-border  h-30"
                    placeholder="Enter your Name"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="secondary-btn py-2 mt-3 px-8 shadow-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormSection;
