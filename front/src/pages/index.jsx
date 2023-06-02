// @ts-nocheck
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import Sections
import Card from "@/components/card/card"
import Hero from "@/components/Sections/Hero";
import Section from "@/components/Sections/Section";
import Divider from "@/components/UI/Divider";
import Valeurs from "@/components/Sections/Valeurs";
import Footer from "@/components/Sections/Footer";
import Faq from "@/components/Sections/Faq";
import Team from "@/components/Sections/Team";

const Home = () => {
  return (
    <div id="main_container" className="relative pt-[84px] flex justify-center">
      {/* Lines */}

      {/* Component card - dev Mel */}
      <Card />

      {/* Hero Section */}
      {/* <Hero /> */}
      {/* 
      <Divider />

      <Section title="Qui sommes-nous ?" section_id="qui_sommes_nous">
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
          className="z-10 text-justify leading-[1.40rem] md:leading-6 text-ex_dark_purple dark:text-ex_light_purple"
        >
          Nous sommes le partenaire de votre ambition. Nous sommes{" "}
          <span className="font-Miju">Ex Nihilo</span> !
          <br />
          <br />
          Une agence de <span className="text-ex_red">Conseil</span>,{" "}
          <span className="text-ex_red">Design</span> et d'{" "}
          <span className="text-ex_red">Expertise</span> spécialiste des
          vêtements professionnels. Nous intervenons à tout moment dans votre
          projet. Bien sûr, si c'est au début, c'est encore mieux !
          <br />
          <br />
          Nous appréhendons ainsi toutes vos valeurs, votre organisation et vos
          enjeux. Nous vous apportons une expertise textile et design afin de
          faire de vos vêtements pros un outil de valorisation et de cohésion.
          <br />
          <br />
          Notre approche systémique des vêtements d’image et EPI vous assure
          d’une réponse sur mesure aux exigences particulières de vos projets.
        </motion.p>
        <div className="z-10 w-full  flex-grow hidden min-[479px]:block">
          <motion.img
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
            className=" h-[300px] w-full object-cover object-top rounded-xl  "
            src="/static/images/Image1.jpg"
            alt=""
          />
        </div>

      </Section>

      <Divider /> */}

      {/* <Section title="Que faisons-nous ?" section_id="que_faisons_nous">
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

      </Section>

      <Divider />

      <Valeurs /> 
      <Divider /> */}

      {/* <Section
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
      </Section> */}

      {/* <Divider />

      <Team />

      <Divider />

      <Faq />

      <Footer /> */}
    </div>
  );
};

export default Home;
