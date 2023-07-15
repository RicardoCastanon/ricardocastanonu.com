import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import RainModel from "../components/RainModel";
import TornadoModel from "../components/TornadoModel";
import DaisyCaoursel, { DaisyCarouselItem } from "../components/DaisyCarousel";
import { NextPage } from "next";

const Mesocast: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      setIsLoading(false);
    }
  }, [canvasRef]);

  const content = [
    `Weather radar data from radar sites to clients in under 10 seconds.`,
    `Binary parsing written in Google's GoLang.`,
    `First ever web application to GL render raw weather radar data.`,
  ];

  const listOfCarouselItems: DaisyCarouselItem[] = [
    {
      id: 1,
      title: "Fastest Weather App",
      description: content[0],
      imageUrl: "/assets/radar.png",
    },
    {
      id: 2,
      title: "Proprietary Binary Parsing",
      description: content[1],
      imageUrl: "/assets/code.png",
    },
    {
      id: 3,
      title: "GL Rendered Raw Weather Radar Data",
      description: content[2],
      imageUrl: "/assets/radar2.png",
    },
  ];

  return (
    <>
      <Navbar darkMode={true} />
      {isLoading && (
        <div className="w-full h-screen flex justify-center items-center z-50">
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      <div className="relative flex w-full h-screen justify-center items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-full w-full fixed"
            style={{
              backgroundImage: "url('/radar.png')",
              filter: "blur(2px)",
              WebkitFilter: "blur(2px)",
              transform: "scale(1.1)",
            }}
          >
            <Canvas camera={{ position: [-1, 1, 5] }} ref={canvasRef}>
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <directionalLight position={[-10, -10, -5]} intensity={1} />
              <Suspense>
                <TornadoModel />
                <RainModel />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <DaisyCaoursel items={listOfCarouselItems} />
      </div>
      <div className="z-50 text-white relative h-screen w-full flex justify-center items-center">
        <div className="w-1/2 bg-black bg-opacity-80 p-5 flex flex-col gap-5 rounded-md">
          <h3 className="text-2xl">Summary</h3>
          <div className="w-1/3 h-[2px] bg-white"></div>
          <p>
            Mesocast is a weather forecasting application built for weather
            enthusiasts, meteorologists, and scientists. The application
            displays Nexrad Level 3 and Nexrad Level 2 weather radar products in
            real time. The app includes various other weather products such as
            satellite imagery, lightning data, and more. The application is
            built with a proprietary binary parser written in Go that parses the
            raw radar data and renders it in real time using OpenGL.
          </p>
          <a
            href="https://www.mesocast.net"
            className="p-2 font-semibold rounded-lg hover:scale-105 duration-150 w-fit bg-gradient-to-br from-orange-500 to-yellow-500"
          >
            Live Link
          </a>
        </div>
      </div>
      <div className="z-50 text-white relative h-screen w-full flex justify-evenly items-center">
        <div className="w-1/4 h-[500px] bg-black bg-opacity-80 rounded-md flex flex-col gap-5 p-2 leading-relaxed">
          <h3 className="text-2xl">Front End</h3>
          <p>
            Mesocast is a weather forecasting application built for weather
            enthusiasts, meteorologists, and scientists. The application
            displays Nexrad Level 3 and Nexrad Level 2 weather radar products in
            real time. The app includes various other weather products such as
            satellite imagery, lightning data, and more. The application is
            built with a proprietary binary parser written in Go that parses the
            raw radar data and renders it in real time using OpenGL.
          </p>
        </div>
        <div className="w-1/4 h-[500px] bg-black bg-opacity-80 rounded-md flex flex-col gap-5 p-2 leading-relaxed">
          <h3 className="text-2xl">Back End</h3>
          <p>
            Mesocast is a weather forecasting application built for weather
            enthusiasts, meteorologists, and scientists. The application
            displays Nexrad Level 3 and Nexrad Level 2 weather radar products in
            real time. The app includes various other weather products such as
            satellite imagery, lightning data, and more. The application is
            built with a proprietary binary parser written in Go that parses the
            raw radar data and renders it in real time using OpenGL.
          </p>
        </div>
        <div className="w-1/4 h-[500px] bg-black bg-opacity-80 rounded-md flex flex-col gap-5 p-2 leading-relaxed">
          <h3 className="text-2xl">Modeling</h3>
          <p>
            Mesocast is a weather forecasting application built for weather
            enthusiasts, meteorologists, and scientists. The application
            displays Nexrad Level 3 and Nexrad Level 2 weather radar products in
            real time. The app includes various other weather products such as
            satellite imagery, lightning data, and more. The application is
            built with a proprietary binary parser written in Go that parses the
            raw radar data and renders it in real time using OpenGL.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mesocast;
