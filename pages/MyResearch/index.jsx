import React from "react";
import Link from "next/link";
import ResearchNavbar from "../../components/ResearchNavbar";

function MyResearch() {
  return (
    <div className="flex">
      <ResearchNavbar />

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
