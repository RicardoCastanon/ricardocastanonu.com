import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard(props) {
  const altList = [
    "Mesocast Weather Forecasting",
    "Aspiria KC Website",
    "Occidental Management Website",
  ];
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        width={1920}
        height={1080}
        className="rounded-xl group-hover:opacity-10"
        src={`/assets/projects/project${props.i}.png`}
        alt={altList[props.i - 1]}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {props.title}
        </h3>
        <p className="pb-4 pt-2 text-wide text-center text-white">
          {props.framework}
        </p>
        <Link href="/mesocast">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
