import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brandon Smith",
    image: "https://www.occmgmt.com/wp-content/uploads/2022/09/contact.jpeg",
    "@id": "",
    url: "https://www.brandonthedev.com",
    telephone: "3168413047",
    priceRange: "$100",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Wichita",
      postalCode: "67206",
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
    <div className="w-full overflow-hidden">
      <Head>
        <title>Brandon Smith - Web Developer - Cheap</title>
        <meta
          name="description"
          content="Brandon Smith, a Front End and Back End Web Developer located in Wichita, Kansas. High quality, scalable, and cheap services."
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
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
