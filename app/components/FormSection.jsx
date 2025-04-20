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

const MotionButton = motion(DialogTrigger);
const FormSection = ({ title, className }) => {
  return (
    <>
      <Dialog>
        <MotionButton className={className}>
          {title} <GoArrowRight size={20} />
        </MotionButton>

        <DialogContent className={" outline-none drop-shadow-2xl border-none"}>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>

          {/* form of data  */}

          <form action="" className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="" className="text-para text-md">
                Name
              </label>
              <input
                type="text"
                className="common-input common-border"
                placeholder="Enter your Name"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label htmlFor="" className="text-para text-md">
                Email
              </label>
              <input
                type="text"
                className="common-input common-border"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label htmlFor="" className="text-para text-md">
                Password
              </label>
              <input
                type="text"
                className="common-input common-border"
                placeholder="Enter your Name"
              />
            </div>

            <button className="primary-btn py-3 mt-3">Submit</button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormSection;
