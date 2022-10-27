import React from "react";
import Link from "next/link";

function MyResearch() {
  return (
    <div className="flex">
      <div className="w-[300px] h-[250px] flex justify-center">
        <ul className="flex w-[fit-content] flex-col justify-around items-center h-full">
          <Link href="/">
            <li className="text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/#about">
            <li className="text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/#skills">
            <li className="text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/#projects">
            <li className="text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/#contact">
            <li className="text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
      </div>

      <iframe
        title="static_html"
        src={"/2spin12inmag.html"}
        width="100%"
        height="3750"
      ></iframe>
    </div>
  );
}

export default MyResearch;
