import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import RainModel from "../components/RainModel";
import TornadoModel from "../components/TornadoModel";

const mesocast = () => {
  return (
    <>
      <Navbar darkMode={true} />
      <div className="relative flex w-full h-screen justify-center items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-full w-full "
            style={{
              backgroundImage: "url('/radar.png')",
              filter: "blur(2px)",
              webkitFilter: "blur(2px)",
              transform: "scale(1.05)",
            }}
          ></div>
        </div>
        <Canvas camera={{ position: [-1, 1, 5] }}>
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <Suspense>
            <TornadoModel />
            <RainModel />
          </Suspense>
        </Canvas>
        <div className="h-1/2 absolute flex flex-col gap-5 right-10 p-5 bg-black backdrop-blur-sm bg-opacity-50 rounded-xl">
          <h2 className="text-5xl font-bold pr-10 text-transparent bg-clip-text bg-gradient-to-r from-[#E8807F] to-[#E6C84F]">
            Mesocast.net
          </h2>
          <div className="text-white font-bold flex gap-2 text-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 stroke-[#E6C84F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
            Hi-Res Weather data from the radar site to clients in under 7
            seconds.
          </div>
          <div className="text-white font-bold flex gap-2 text-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 stroke-[#E6C84F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
            Binary parsing written in Google's GoLang.
          </div>
          <div className="text-white font-bold flex gap-2 text-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 stroke-[#E6C84F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
            First ever web application to GL render raw weather radar data.
          </div>
          <button className="bg-gradient-to-r from-[#E8807F] to-[#E6C84F] w-fit p-2 font-semibold hover:scale-105 hover:bg-gradient-to-l duration-150 ease-in-out shadow-sm text-xl">
            Check it out!
          </button>
        </div>
      </div>
    </>
  );
};

export default mesocast;
