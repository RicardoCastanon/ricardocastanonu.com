import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch.</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  width={6000}
                  height={4000}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/assets/contact.jpeg"
                  alt="stock"
                />
              </div>
              <div>
                <h2 className="py-2">Brandon Smith</h2>
                <p>Software engineer</p>
                <p className="py-4">
                  I am available for freelancing. Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me.</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left */}
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Phone number.
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-2">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Email.
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-2">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Subject.
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-2">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Message.
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <button className="w-full p-4 text-gray-100">
                  Send message.
                </button>
              </form>
            </div>
          </div>

          {/* Right */}
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
