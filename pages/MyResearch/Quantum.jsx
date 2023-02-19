import React from "react";
import ResearchNavbar from "../../components/ResearchNavbar";

const Quantum = () => {
  return (
    <div className="flex">
      <ResearchNavbar />
      <iframe
        title="static_html"
        src={"/1D_SE_Solver.html"}
        width="100%"
        height="3750"
      ></iframe>
    </div>
  );
};

export default Quantum;
