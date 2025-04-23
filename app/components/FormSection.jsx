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

const MotionButton = motion(DialogTrigger);
const FormSection = ({ title, className }) => {
  return (
    <>
      <Dialog>
        <MotionButton className={className}>
          {title} <GoArrowRight size={20} />
        </MotionButton>

        <DialogContent
          className={
            " w-[50vw]  !max-w-none  outline-none drop-shadow-2xl border-none"
          }
        >
          <div className="hidden">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>
          </div>

          {/* form of data  */}

          <div className=" flex flex-col gap-3">
            <div className="p-2  space-y-2">
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

            <form action="" className="flex flex-col gap-2 ">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="" className="text-para text-md">
                  Name
                </label>
                <Input
                  type="text"
                  className="common-input "
                  placeholder="Enter your Name"
                />
              </div>


              <div className="flex  items-center gap-3 justify-between">

              <div className="flex flex-col gap-2 w-full ">
                <label htmlFor="" className="text-para text-md">
                  Email
                </label>
                <Input
                  type="text"
                  className="common-input common-border"
                  placeholder="Enter your Email"
                />
              </div>

              <div className="flex flex-col gap-2  w-full">
                <label htmlFor="" className="text-para text-md">
                  Phone No
                </label>
                <Input
                  type="text"
                  className="common-input common-border"
                  placeholder="Enter your Name"
                />
              </div>

              </div>

              <div className="flex flex-col gap-2  w-full">
                <label htmlFor="" className="text-para text-md">
                 message
                </label>
                <Textarea
                  type="text"
                  className="common-input common-border"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="flex items-center justify-center">

              <button className="secondary-btn py-2 mt-3 px-8 shadow-none">Submit</button>
              </div>

            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormSection;
