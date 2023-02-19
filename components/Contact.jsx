import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

function Contact(props) {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }

  // const [isModal, setIsModal] = useState(false);

  const handleOnClick = (data) => {
    props.onClick(data);
  };

  return (
    <div id="contact" className="w-full ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">{"Let's innovate together."}</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  width={6000}
                  height={4000}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpeg"
                  alt="Software Engineer in Wichita Kansas coding"
                />
              </div>
              <div>
                <h2 className="py-2">Brandon Smith | Wichita, KS</h2>
                <p>Software engineer</p>
                <p className="py-4">
                  {"I am available for a chat. Contact me and let's talk."}
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me.</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/brandon-smith-5267b91b5/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link href="https://github.com/Brandonsmith738">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:contact@brandonthedev.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="tel:316-841-3047">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Left */}
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form method="post" action="" onSubmit={handleOnSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone number.
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      name="phone"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-2">
                    <label className="uppercase text-sm py-2" htmlFor="email">
                      Email.
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-2">
                    <label className="uppercase text-sm py-2" htmlFor="subject">
                      Subject.
                    </label>
                    <input
                      className="b-2 rounded-lg p-3 flex border-gray-300"
                      name="subject"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-2">
                    <label className="uppercase text-sm py-2" htmlFor="message">
                      Message.
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      name="message"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <button
                  onClick={() => handleOnClick(true)}
                  className="w-full p-4 text-gray-100"
                >
                  Send message.
                </button>
              </form>
            </div>
          </div>
          {/* deploy */}
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
