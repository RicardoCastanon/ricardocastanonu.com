import React, { useEffect } from "react";
import { useState } from "react";

export const SuccessModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(props.ModalData);
  }, [props]);

  const handleOnClick = (data) => {
    props.onClick(data);
  };

  return (
    <div
      className={
        isOpen
          ? "w-full h-full bg-gray-400/80 flex justify-center items-center fixed z-[999]"
          : "hidden"
      }
    >
      <div className="w-[400px] h-[200px] bg-[#f4f6f7] rounded-lg flex flex-col justify-evenly items-center">
        <p className="font-medium text-lg">Message was successfully sent!</p>
        <div
          onClick={() => {
            setIsOpen(false);
            handleOnClick(false);
          }}
          className="w-[80px] h-[40px] bg-[#5651e5] text-white flex justify-center items-center rounded-lg cursor-pointer hover:scale-105 duration-200"
        >
          <p>close</p>
        </div>
      </div>
    </div>
  );
};
