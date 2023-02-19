import React from "react";
import Link from "next/link";

const ResearchNavbar = () => {
  return (
    <div className="w-[300px] h-[250px] flex justify-center">
      <ul className="flex w-[fit-content] flex-col justify-around items-center h-full">
        <Link href="/">
          <li className="text-sm uppercase hover:border-b">Home</li>
        </Link>
        <Link href="/MyResearch/Quantum">
          <li className="text-sm uppercase hover:border-b">Quantum</li>
        </Link>
        <Link href="/MyResearch">
          <li className="text-sm uppercase hover:border-b">QNN</li>
        </Link>
      </ul>
    </div>
  );
};

export default ResearchNavbar;
