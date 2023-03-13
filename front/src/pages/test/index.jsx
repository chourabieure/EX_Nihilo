// @ts-nocheck
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import Sections
import Hero from "@/components/Sections/Hero";
import Section from "@/components/Sections/Section";
import Divider from "@/components/UI/Divider";
import Valeurs from "@/components/Sections/Valeurs";
import Footer from "@/components/Sections/Footer";
import Faq from "@/components/Sections/Faq";
import Team from "@/components/Sections/Team";

const Test = () => {
  return (
    <div id="main_container" className="relative pt-[84px]">
      {/* Lines */}

      {/* Hero Section */}
      <Hero />


      <section
        id={"qui_sommes_nous"}
        className={` flex flex-col md:flex-row  gap-8 w-full bg-ex_dark_purple px-8 m-auto `}
      >
        


      </section>

      <Divider />

      <Section title="Que faisons-nous ?" section_id="que_faisons_nous">
        <div className="h-[0.2rem] rounded-lg bg-ex_normal_purple dark:bg-ex_light_purple opacity-50 w-32 sm:block hidden" />

        <motion.p
          initial={{
            opacity: 0,
            visibility: "hidden",
          }}
          whileInView={{
            opacity: 1,
            visibility: "visible",
          }}
          transition={{
            duration: 1,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="text-left text-base leading-[1.4rem] text-ex_dark_purple dark:text-ex_light_purple"
        >
          Ouvrons ensemble une page blanche de notre carnet.
          <br />
          <br />
          C’est notre signature et notre exigence :{" "}
          <span className="italic text-ex_red">ex nihilo</span>, locution latine
          signifie «en partant de rien».
          <br />
          Adeptes du design thinking, c’est avec vos équipes que nous
          travaillons le mieux.
          <br />
          <br /> Nous privilégions un travail en co-création pour définir vos
          vêtements d'image et EPI.
          <br />
          <br /> Voici nos 3 domaines d'interventions :{" "}
          <span className=" text-ex_red">le conseil</span>,{" "}
          <span className=" text-ex_red">le design</span>,{" "}
          <span className=" text-ex_red">l'expertise</span>.
        </motion.p>

        <div className="w-full flex justify-center z-[1] pt-20">
          <motion.div
            initial={{
              opacity: 0,
              visibility: "hidden",
            }}
            whileInView={{
              opacity: 1,
              visibility: "visible",
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="mouse-icon  sm:block hidden"
          >
            <div className="mouse bg-ex_medium_purple after:bg-ex_light_purple"></div>
            <span className="arrow arrow-01 border-b-2 border-r-2 border-ex_light_purple"></span>
            <span className="arrow arrow-02 border-b-2 border-r-2 border-ex_light_purple"></span>
            <span className="arrow arrow-03 border-b-2 border-r-2 border-ex_light_purple"></span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              visibility: "hidden",
            }}
            whileInView={{
              opacity: 1,
              visibility: "visible",
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="hand-icon   sm:hidden block"
          >
            <div className="hand bg-ex_normal_purple after:bg-ex_normal_purple before:bg-ex_normal_purple">
              <div className="circle bg-ex_normal_purple"></div>
            </div>
          </motion.div>
        </div>

        {/* <svg
          className="w-[600px] sm:w-[900px] z-[0] absolute fill-ex_normal_purple left-0 -translate-x-1/2 bottom-0 translate-y-1/2 opacity-20 shape1Animate"
          viewBox="0 0 501 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M501 240C501 265.819 475.501 287.292 467.929 310.585C460.069 334.736 467.806 367.001 453.198 387.122C438.411 407.415 405.182 409.989 384.865 424.755C364.753 439.384 352.117 470.249 327.951 478.089C304.637 485.64 276.37 468.348 250.527 468.348C224.685 468.348 196.418 485.647 173.104 478.089C148.938 470.249 136.302 439.384 116.19 424.755C95.8726 409.989 62.6439 407.415 47.8573 387.122C33.1943 367.001 40.9312 334.736 33.0706 310.585C25.5124 287.292 0 265.819 0 240C0 214.181 25.4987 192.708 33.0706 169.415C40.9312 145.264 33.1943 112.999 47.8023 92.8781C62.5889 72.5854 95.8176 70.0111 116.135 55.2447C136.247 40.6155 148.883 9.7509 173.049 1.91117C196.363 -5.64023 224.63 11.6525 250.473 11.6525C276.315 11.6525 304.583 -5.6471 327.896 1.91117C352.062 9.7509 364.698 40.6155 384.81 55.2447C405.127 70.0111 438.356 72.5854 453.143 92.8781C467.806 112.999 460.069 145.264 467.929 169.415C475.501 192.708 501 214.181 501 240Z" />
        </svg> */}
      </Section>

      <Divider />

      <Valeurs />
      <Divider />

      <Section
        title="Ils nous ont fait<br class='block sm:hidden'/> confiance"
        section_id="companies"
        center={true}
      >
        <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

        <motion.ul
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          // viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 "
        >
          {[...Array(16)].map((elem, index) => {
            return (
              <li
                className={`${
                  index == 12 ? "col-start-0 md:col-start-2" : ""
                } p-2 bg-ex_normal_purple rounded-lg`}
                key={index}
              >
                <img
                  className="h-full w-16 md:w-20"
                  src={`/static/images/companies/company_${index + 1}.png`}
                />
              </li>
            );
          })}
        </motion.ul>
      </Section>

      <Divider />

      <Team />

      <Divider />

      <Faq />

      <Footer />
    </div>
  );
};

export default Test;
