import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-lightest text-gray-600">
            {"ENGINEERING | MATH | SCIENCE"}
          </p>
          <h2 className="py-4 tracking-tight">
            {"Hi, I'm "} <span className="text-[#5651e5]">Brandon</span>
          </h2>
          <h1 className="py-2 text-gray-700">
            An Engineer and Developer in <br /> Wichita, Kansas.
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto font-semibold">
            I am a software engineer based in Wichita, Kansas. I have a passion
            for engineering and science. I have a background in physics and math
            and I have experience in developing machine learning algorithms, web
            development, mobile development, and problem solving in general
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/brandon-smith-5267b91b5/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/Brandonsmith738">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:contact@brandonthedev.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="tel:316-841-3047">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
