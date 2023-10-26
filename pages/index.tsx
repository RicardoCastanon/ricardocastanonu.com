import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { MyResearch } from "../components/MyResearch";
import { SuccessModal } from "../components/SuccessModal";
import { useState } from "react";
import { NextPage } from "next";
import AdditionalSkills from "../components/AdditionalSkills";
import FieldsOfInterest from "../components/FieldsOfInterest";

const Home: NextPage = () => {
  const [isModal, setIsModal] = useState(false);
  const getIsModalOpen = (isOpen: boolean) => {
    setIsModal(isOpen);
    return isOpen;
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ricardo Castanon",
    image: "https://www.occmgmt.com/wp-content/uploads/2022/09/contact.jpeg",
    "@id": "",
    url: "https://www.brandonthedev.com",
    telephone: "3168715799",
    priceRange: "$100",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Wichita",
      postalCode: "67213",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
  return (
    <div className="w-full overflow-hidden" data-theme="light">
      <Head>
        <title>Ricardo Castanon Ureno</title>
        <meta
          name="description"
          content="Ricardo Castanon, a Computer Engineering student who practices engineering principles and the scientific method."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SuccessModal ModalData={isModal} onClick={getIsModalOpen} />
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <MyResearch /> */}
      <AdditionalSkills />
      <FieldsOfInterest />
      <Contact onClick={getIsModalOpen} />
    </div>
  );
};

export default Home;
