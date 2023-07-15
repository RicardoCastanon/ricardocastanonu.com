import Image from "next/image";
import React from "react";

type DaisyCarouselProps = {
  items: DaisyCarouselItem[];
};

export type DaisyCarouselItem = {
  id: number;
  title?: string;
  description?: string;
  imageUrl: string;
};

const DaisyCarousel = (props: DaisyCarouselProps) => {
  return (
    <div className="self-center absolute top-20 flex flex-col items-center">
      <div className="bg-black backdrop-blur-sm bg-opacity-50 rounded-md carousel carousel-center w-3/4 h-fit">
        {props.items.map((item) => (
          <div
            key={item.id}
            id={`item${item.id}`}
            className="carousel-item gap-10 w-full h-full flex flex-col items-center justify-center"
          >
            <div className="absolute z-50 w-1/2 flex flex-col gap-10">
              <h2 className="text-5xl font-bold pr-10 text-transparent bg-clip-text bg-gradient-to-r from-[#E8807F] to-[#E6C84F]">
                {item.title}
              </h2>
              <div className="text-white font-bold flex gap-2 text-lg items-center">
                <p>{item.description}</p>
              </div>
            </div>
            <Image
              src={item.imageUrl}
              width={1500}
              height={800}
              loading="eager"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {props.items.map((item, index) => (
          <a key={index} href={`#item${item.id}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DaisyCarousel;
