"use client";
import React from "react";
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
const FormSection = ({ title, className }) => {
  return (
    <>
      <Dialog >
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
          {title} <GoArrowRight size={20} />
        </MotionButton>

        <DialogContent
          className={
            " w-[95vw] md:w-[60vw]  !max-w-none  outline-none drop-shadow-2xl border-none"
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

            <form action="" className="flex flex-col gap-2 p-2   ">
              <div className="flex flex-col gap-2   ">
                <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2 p-1 ">
                    <label htmlFor="" className="text-para text-md">
                      Name
                    </label>
                    <Input
                      type="text"
                      className="common-input "
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label htmlFor="" className="text-para text-md">
                      Organization Name
                    </label>
                    <Input
                      type="text"
                      className="common-input "
                      placeholder="Enter organization Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label htmlFor="" className="text-para text-md">
                      Location
                    </label>
                    <Input
                      type="text"
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
                      className="common-input "
                      placeholder="Enter your location"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1 ">
                    <label htmlFor="" className="text-para text-md">
                      Email
                    </label>
                    <Input
                      type="text"
                      className="common-input common-border"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-1  ">
                    <label htmlFor="" className="text-para text-md">
                      Phone No
                    </label>
                    <Input
                      type="text"
                      className="common-input common-border"
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2  p-1 ">
                    <label htmlFor="" className="text-para text-md">
                      Team Size
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select team Size " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">1-10 employee</SelectItem>
                        <SelectItem value="dark">11-50 employee</SelectItem>
                        <SelectItem value="system">51-200 employee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2   p-1">
                  <label htmlFor="" className="text-para text-md">
                    message
                  </label>
                  <Textarea
                    type="text"
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
