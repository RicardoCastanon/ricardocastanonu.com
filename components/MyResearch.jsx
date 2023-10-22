import React from "react";
import Link from "next/link";

export const MyResearch = () => {
  return (
    <div id="research" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Software/Hardware/Electrical Engineering!
        </p>
        <h2 className="py-4">{"What I'm Learning and Doing."}</h2>
        <p>
          Learning is at the core of my drive, I seek every opportunity I can to
          increase my understanding and insight about the topics that interest me.
        </p>

        <p className="px-6">
          <h3 className = "py-2">{"Electrical/Computer Engineering Undergraduate Research"}</h3>
          Currently I am doing electrical/computer engineering undergraduate research
          with Dr. Abu Asaduzzaman Ph.D. in the topic of <strong>Hetereogeneous computer
          architecture in embedded systems</strong>.

          <h3 className = "py-2">{"Fire Rover: Programming and Documentation Lead"}</h3>
          I am increasing my knowledge on <strong>robotics programming</strong> and <strong>Arduino</strong> through being 
          the Programming Lead in my Senior Design Project, Fire Rover. This project 
          consists of creating an Unmanned Ground Vehicle (UGV) used to lay heavy hose in 
          long-distance, rugged terrain with obstacles. Its objective will be to reduce 
          firefighter injury and fatigue during the weeks after wildfires are extinguished.
          A main goal is to make the vehicle <strong>autonomous</strong> which will be my task to accomplish.

          <h3 className = "py-2">{"Mesocast.net Team Member"}</h3>
          Furthermore, working in the Development Team of Mesocast.net, I am working alongside skilled 
          software engineers that will help improve my software skills including my 
          <strong> front-end development</strong>, <strong>back-end development</strong>, and 
          <strong> machine learning</strong> skills.

          <h3 className = "py-2">{"Increasing knowledge through University"}</h3>
          Lastly, I am gaining a lot of valuable knowledge throughout my final year of 
          university. I have learned the <strong>Functional Paradigm</strong> using <strong>F# </strong> 
          and will continue on learning the <strong>Logical Paradigm</strong> using 
          <strong> Prolog</strong>. I have improved my <strong>Assembly language programming </strong> 
          and learned how to apply it when <strong>programming microprocessors</strong>. I will polish 
          all of my attained skills so far to become a better engineer and apply them on the job. 
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
