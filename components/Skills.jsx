import React from "react";
import Image from "next/image";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* how to loop lol */}
          <SkillCard i={1} />
          <SkillCard i={2} />
          <SkillCard i={3} />
          <SkillCard i={4} />
          <SkillCard i={5} />
          <SkillCard i={6} />
          <SkillCard i={7} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
