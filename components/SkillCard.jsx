import React from "react";
import Image from "next/image";

function SkillCard(props) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="mx-auto">
          <Image
            src={`/assets/skills/asset${props.i}.svg`}
            alt="asset1"
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
