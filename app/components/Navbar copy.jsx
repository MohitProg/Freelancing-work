"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiCubeAlt } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { PiVideoFill } from "react-icons/pi";
import { IoApps } from "react-icons/io5";
import { MdOutlineTask } from "react-icons/md";
import { PiArrowBendRightUpBold } from "react-icons/pi";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  // variables for category
  let cat1 = "capabilities";
  let cat2 = "All Features";
  let cat3 = "Integration";
  // state for nav toggle

  const [navDropToggle, setNavDropToggle] = useState(false);

  const [categorryData, setCategoryData] = useState({
    cat: cat1,
    data: [],
  });

  const Handlecategory = (cat, data = []) => {
    if (cat) {
      setCategoryData({ data, cat });
    }
  };

  return (
    <>
      <header
        className={`fixed w-full ${
          navDropToggle ? "min-h-screen" : ""
        }  overflow-hidden z-[50]`}
      >
        <nav className=" w-full md:w-[80%]    mx-auto p-3 py-5 flex items-center  justify-between">
          {/* add logo */}

          <Link
            href={"/"}
            className="  gap-2  flex items-center  p-3 md:p-2  px-4 border-[0.5px] bg-white border-gray-300    rounded-xl"
          >
            <img
              src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
              className="h-6"
              alt="Logo"
            />

            <div className="text-[0.7rem] hidden lg:block leading-tight  border-l-[1px] border-gray-300 px-2">
              The everting
              <br /> app for work
            </div>
          </Link>

          {pathname !== "/landing" && (
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4  p-1  border-[0.5px] bg-white border-gray-300  shadow-lg   rounded-lg">
                <li
                  onClick={() => setNavDropToggle(!navDropToggle)}
                  className="p-1   flex items-center gap-2 cursor-pointer  lg:p-2 px-7 rounded-lg hover:bg-[#f1f1f9]"
                >
                  Product <IoIosArrowDown />
                </li>
                <Link
                  href={"/pricing"}
                  className="p-1  lg:p-2 px-6 rounded-lg cursor-pointer hover:bg-[#f1f1f9]"
                >
                  Pricing
                </Link>
              </ul>
            </div>
          )}

          <div className="flex items-center gap-4 px-2 ">
            <button className="p-3 hover:bg-[#f1f1f9] hidden lg:block text-sm px-4 border-[0.5px] bg-white border-gray-300  shadow-lg  rounded-xl">
              Contact Sales
            </button>

            <div className="lg:p-1 flex items-center justify-between gap-3   border-[0.5px] bg-white border-gray-300  shadow-lg  rounded-xl">
              <button className="p-3 md:p-2  text-sm hidden lg:block  rounded-lg hover:bg-[#f1f1f9]">
                Login
              </button>
              <button className="  primary-btn  ">SignUp</button>
            </div>

            <button className="lg:hidden p-2 px-3 rounded-xl border-[0.5px] border-gray-300 bg-white ">
              <FiMenu size={25} />
            </button>
          </div>
        </nav>

        <div className={`${navDropToggle ? "block" : "hidden"}`}>
          <div className=" border-[0.5px] bg-white w-[70%] mx-auto mt-1 space-y-4 border-gray-300  shadow-xl rounded-xl p-4 ">
            {/*  drop down menu 1  for product section */}
            <div className=" grid grid-cols-5  gap-2 ">
              <div className="col-span-1 ">
                <ul className="flex flex-col  w-full  ">
                  <li className="flex items-center justify-between p-1 rounded-xl  text-[#3c3a54] hover:text-black cursor-pointer hover:bg-[#f1f1f9] ">
                    {" "}
                    <p
                      className="common-navlink font-semibold "
                      onClick={() => Handlecategory(cat1)}
                    >
                      <IoSpeedometerOutline size={20} /> {cat1}
                    </p>{" "}
                    <MdKeyboardArrowRight size={24} className="mt-1" />
                  </li>

                  <li className="flex items-center justify-between p-1 rounded-xl  text-[#3c3a54] hover:text-black cursor-pointer hover:bg-[#f1f1f9] ">
                    {" "}
                    <p
                      className="common-navlink w-full font-semibold "
                      onClick={() => Handlecategory(cat2)}
                    >
                      <BiCubeAlt size={20} />
                      {cat2}
                    </p>{" "}
                    <MdKeyboardArrowRight size={24} className="mt-1" />
                  </li>
                  <li className="flex items-center justify-between p-1  rounded-xl  text-[#3c3a54] hover:text-black cursor-pointer hover:bg-[#f1f1f9] ">
                    {" "}
                    <p
                      className="common-navlink w-full font-semibold "
                      onClick={() => Handlecategory(cat3)}
                    >
                      <IoSpeedometerOutline size={20} /> {cat3}
                    </p>{" "}
                    <MdKeyboardArrowRight size={24} className="mt-1" />
                  </li>
                </ul>
              </div>

              {/* section for capability data type  */}

              {categorryData.cat === cat1 && (
                <div className="col-span-4  grid grid-cols-4">
                  <div className="col-span-3 grid grid-cols-3">
                    <div className="p-2  flex flex-col gap-2 ">
                      <p className="text-sm text-para font-semibold">
                        Project Management
                      </p>

                      <ul className="flex flex-col  text-para ">
                        <Link href={"#"} className="common-navlink ">
                          <MdOutlineTask size={18} /> Projects
                        </Link>
                        <Link href={"#"} className="common-navlink ">
                          <MdOutlineTask size={18} /> Tasks
                        </Link>{" "}
                        <Link href={"#"} className="common-navlink ">
                          <MdOutlineTask size={18} /> Portfolio
                        </Link>{" "}
                        <Link href={"#"} className="common-navlink ">
                          <MdOutlineTask size={18} /> Tasks
                        </Link>
                      </ul>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col  items-start ">
                        <h1 className="font-bold text-sm">Powered by</h1>

                        <img
                          className="h-10 mt-[-6px]"
                          src="https://clickup.com/assets/brand/logo-v3-clickup-brain-light.svg"
                          alt=""
                        />
                      </div>

                      <div className="flex flex-col gap-6">
                        <ul className="text-md flex flex-col gap-2  text-[#3c3a54]">
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>

                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                        </ul>

                        <button className="p-2 rounded-lg mx-auto cursor-pointer ">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* type 1 capabilities */}
                </div>
              )}

              {/* section for All features  */}

              {categorryData.cat === cat2 && (
                <div className="col-span-4   grid grid-cols-4">
                  <div className="col-span-3   grid grid-cols-1">
                    {/* div for nav list  */}

                    <div className=" p-3  columns-4  items-start flex-wrap w-full">
                      <Link href={"#"} className="common-navlink">
                        <FaTasks size={18} /> Tasks
                      </Link>
                    </div>

                    <div>
                      <button className="p-3 w-full bg-[#f8f8fc] text-gray-400 rounded-xl">
                        See all features
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col  items-start ">
                        <h1 className="font-bold text-sm">Just Released</h1>
                      </div>

                      <div className="flex flex-col gap-6">
                        <ul className="text-md flex flex-col gap-2  text-[#3c3a54]">
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>

                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                        </ul>

                        <button className="p-2 rounded-lg mx-auto cursor-pointer ">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* type 1 capabilities */}
                </div>
              )}

              {/* section for integration  */}

              {categorryData.cat === cat3 && (
                <div className="col-span-4   grid grid-cols-4">
                  <div className="col-span-3   grid grid-cols-1">
                    {/* div for nav list  */}

                    <div className=" p-3  columns-3  items-start flex-wrap w-full">
                      <Link href="#" className="common-navlink">
                        <FaTasks size={18} /> Tasks
                      </Link>
                    </div>

                    <div>
                      <button className="p-3 w-full bg-[#f8f8fc] text-gray-400 rounded-xl">
                        See all Integration
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col  items-start ">
                        <h1 className="font-bold text-sm">Import</h1>
                      </div>

                      <div className="flex flex-col gap-6">
                        <ul className="text-md flex flex-col gap-2  text-[#3c3a54]">
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>

                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                          <li className="flex items-center gap-2">
                            <PiArrowBendRightUpBold color="#8c0b9fff" />
                            Generate standup
                          </li>
                        </ul>

                        <button className="p-2 rounded-lg mx-auto cursor-pointer ">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* type 1 capabilities */}
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-end text-[#3c3a54] p-3  gap-8">
              <span className="flex items-center text-sm gap-2 ">
                {" "}
                <GrContact size={18} />
                Contact Sales
              </span>
              <span className="flex items-center text-sm gap-2">
                {" "}
                <PiVideoFill size={18} />
                Watch demo
              </span>

              <span className="flex items-center text-sm gap-2">
                <IoApps size={18} />
                Download apps
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
