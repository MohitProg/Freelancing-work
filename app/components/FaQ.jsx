import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { accordionData } from "../data.js";
const FaQ = () => {
  return (
    <>
      <section className="flex   common-section    flex-col gap-5  p-2  lg:p-8 py-12">
        <div className=" lg:w-[80%] flex flex-col gap-2 text-center mx-auto ">
          <h2>Frequently asked questions</h2>
          <p className="primary-para">
            Find answers to your questions right here, and don't hesitate to
            contact us if you couldn't find what you're looking for.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[75%] mx-auto   ">
          {accordionData.map((val, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="common-border  rounded-xl p-1 bg-primary"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className={"primary-para p-2"}>
                  {val.title} ?
                </AccordionTrigger>
                <AccordionContent className={" text-para  p-2  py-4 "}>
                  {val.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaQ;
