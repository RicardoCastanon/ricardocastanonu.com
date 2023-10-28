import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    if (!props.darkMode) {
      window.addEventListener("scroll", handleShadow);
    }
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 bg-white shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/assets/navlogo.png"
            alt="logo"
            width="65"
            height="75"
          ></Image>
        </Link>
        {/* Deploy */}
        <div className={props.darkMode && "text-white"}>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-75">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-75">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-75">
                Skills
              </li>
            </Link>
            <Link href="/#additionalskills">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-75">
                Interests
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-75">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-screen bg-black/60 md:hidden"
              : "fixed"
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
            }
          >
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/navlogo.png"
                alt="logo"
                width={50}
                height={70}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4 text-sm font-semibold">
                {"Let's Build something awesome together."}
              </p>
            </div>
            <div className="py-4 flex flex-col justify-evenly">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/#additionalskills">
                  <li className="py-4 text-sm">Interests</li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  {"Let's connect."}
                </p>
                <div className="flex items-center justify-between my-4 w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
