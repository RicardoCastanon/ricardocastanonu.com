import React from "react";
import Link from "next/link";

export const MyResearch = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Physics, Math, and Coding!
        </p>
        <h2 className="py-4">{"What I'm Learning."}</h2>
        <p>
          Learning is at the core of my drive, I seek every opportunity I can to
          increase my understanding and insight about the universe. I combine
          the beauty of mathematics and rely deeply on its versatility as a tool
          for studying Physics. Along with mathematics, the tool that helps give
          dimension predictability to the Universe, I utilize programming to be
          the tool that perfects the mathematics involved.
        </p>
        <p className="pt-5">Check out my research and learn with me!</p>
        <Link href={"/MyResearch"}>
          <div className="w-[150px] pt-5">
            <button className="w-full p-2 text-gray-100 hover:scale-105 duration-200">
              My Research!
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
