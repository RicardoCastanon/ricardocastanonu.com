import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="text-gray-600 py-2">
            I am a Physics student at Wichita State University. I have a deep
            passion for deep learning. I can get any beautiful website setup for
            you from ground zero. If you are in the area, I can meet in-person
            and deliver the highest quality service involving real life research
            and support of your business.
          </p>
        </div>
        <div className="md:w-full w-[400px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/headshot.jpg"
            alt="headshot"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
