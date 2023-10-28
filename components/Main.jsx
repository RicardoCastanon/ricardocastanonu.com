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
            {"SOFTWARE | HARDWARE | SCIENCE | SPACE | ENVIRONMENT"}
          </p>
          <h2 className="py-4 tracking-tight">
            {"Hi, I'm "} <span className="text-[#df534c]">Ricardo</span>
          </h2>
          <h1 className="py-2 text-gray-700">
            An up-and-coming Engineer and passionate life-long learner in <br /> Wichita, Kansas.
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto font-semibold">
            I am a Computer Engineering student in Wichita State University, interested in software,
            hardware, electrical systems, a combination of all three, as well as other varying fields.
            I have been a problem-solver and technology enthusiast my entire life and want to use my 
            continuously growing knowledge to leave a positive mark on society. 
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/ricardo-castanon">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/RicardoCastanon">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:ricardocastanonu@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="tel:316-871-5799">
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
