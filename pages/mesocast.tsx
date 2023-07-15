import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import RainModel from "../components/RainModel";
import TornadoModel from "../components/TornadoModel";
import DaisyCaoursel, { DaisyCarouselItem } from "../components/DaisyCarousel";

const mesocast = () => {
  const content = [
    `Weather radar data from radar sites to clients in under 10 seconds.`,
    `Binary parsing written in Google's GoLang.`,
    `First ever web application to GL render raw weather radar data.`,
  ];

  const listOfCarouselItems: DaisyCarouselItem[] = [
    {
      id: 1,
      title: "Fastest Weather Radar Data",
      description: content[0],
      imageUrl: "/assets/radar.png",
    },
    {
      id: 2,
      title: "Proprietary Binary Parsing",
      description: content[1],
      imageUrl: "/assets/radar2.png",
    },
    {
      id: 3,
      title: "GL Rendered Raw Weather Radar Data",
      description: content[2],
      imageUrl: "/assets/code.png",
    },
  ];
  return (
    <>
      <Navbar darkMode={true} />
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
            <Canvas camera={{ position: [-1, 1, 5] }}>
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
      <div className="z-50 text-white relative h-screen w-full">
        More content
      </div>
    </>
  );
};

export default mesocast;
