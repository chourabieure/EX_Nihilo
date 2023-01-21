// @ts-nocheck
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

// Import Sections
import Hero from "@/components/Sections/Hero";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";
import Section5 from "@/components/Sections/Section5";

const Home = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";

  // shapesContainer

  return (
    <div
      id="scroll_snap_container"
      className="relative h-screen overflow-y-scroll  overflow-x-hidden snap-y snap-mandatory "
    >
      {/* Lines */}

      {/* Hero Section */}
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      {/* <section className={` ${sectionStyle} items-center justify-center`}>
        Section 2
      </section>
      <section className={`${sectionStyle} items-center justify-center`}>
        Section 3
      </section>
      <section className={`${sectionStyle} items-center justify-center`}>
        Section 4
      </section>
      <section className={`${sectionStyle} items-center justify-center`}>
        Section 5
      </section> */}
    </div>
  );
};

export default Home;
