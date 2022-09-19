import React from "react";
import Image from "next/image";

function SkillCard(props) {
  const altList = [
    "Ability to code HTML",
    "Ability to code CSS",
    "Ability to code JavaScript",
    "Ability to code TypeScript",
    "Ability to code Node JS",
    "Experienced in React JS",
    "Experienced in Vue JS",
  ];
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="mx-auto">
          <Image
            src={`/assets/skills/asset${props.i}.svg`}
            alt={altList[props.i - 1]}
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>For web development.</h3>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
