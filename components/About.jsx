import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="text-gray-600 py-2">
            I am studying Computer Engineering at Wichita State University in Wichita, KS.
            Additionally, I am attaining minors in Mathematics and Political Science. I have
            experience in multiple programming languages as well as experience in hardware
            such as FPGAs, Microprocessors, and Arduino. I am a passionate learner with the 
            goal of using all of my knowledge to contribute positively to society. 
          </p>
        </div>
        <div className="md:w-full w-[400px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/headshot.jpg"
            alt="headshot"
            width={384}
            height={586}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
