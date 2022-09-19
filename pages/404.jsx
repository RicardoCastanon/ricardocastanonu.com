import React from "react";
import Link from "next/link";

function Custom404() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col h-[20%] md:h-[30%] justify-between items-center">
        <h2>Error - 404</h2>
        <p>Page Not Found.</p>

        <Link href={"/"}>
          <div className="rounded-xl w-[220px] h-[100] cursor-pointer p-4 bg-gradient-to-r from-purple-300 to-blue-200 shadow-xl hover:scale-105 duration-100">
            <p>Go back to home page.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
