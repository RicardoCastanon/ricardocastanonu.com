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
            I am a Physics student at Wichita State University. I have a deep
            passion for deep learning. I have experience in developing machine
            learning algorithms, web development, mobile development, and
            problem solving in general. I spend time whiteboarding the best
            possible solution for a problem given the constraints. I am not just
            a developer, I am a problem solver.
          </p>
          <p className="text-gray-600 py-2">
            I also have a deep passion for learning and I actively research
            various topics in physics, math, and computer science such as
            Quantum Neural Networks. Go to my{" "}
            <Link href={"/#research"}>
              <span className="underline cursor-pointer text-purple-700">
                research section
              </span>
            </Link>{" "}
            if you want to learn with me and learn more about the theory behind
            various concepts in computer science and physics!
          </p>
        </div>
        <div className="md:w-full w-[400px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/headshot.jpg"
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
