import Button from "@/components/UI/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Title from "@/components/UI/Title";

const Section4 = () => {
  const info = [
    {
      title: "Conseil",
      paragraph:
        "Travaillant en co-création ou en accompagnement, nous faisons de vos collaborateurs les acteurs du changement à venir.Reconnus, valorisés et motivés au sein d’un groupe de travail, ils sont les meilleurs promoteurs du résultat et les véritables facilitateurs d'adhésion au projet.",
    },
    {
      title: "Design",
      paragraph:
        "Quelque soit l’étape de votre projet, nous analyserons les critères qui seront les garants de la réussite de votre projetRésolument engagés, nous sommes vigilants à favoriser une démarche sociale et responsable et qui minimise l’impact environnemental de vos solutions d’habillement.",
    },
    {
      title: "Expertise",
      paragraph:
        "Ex Nihilo vous accompagne à toutes les phases de projet de vêtements d’image & EPI. Mais l’idéal est de nouer un partenariat dès la naissance de votre projet pour construire une solution efficiente qui tienne compte de toutes vos exigences.",
    },
  ];

  const shapes = ["ShapeConseil", "ShapeDesign", "ShapeExpertise"];

  const [position, setPosition] = useState(0);

  var position_shape1 = 0;

  useEffect(() => {
    const main = document.querySelector("#scroll_snap_container");
    const shapes_container = window.document.querySelector("#shapes_container");

    main.addEventListener("scroll", (event) => {
      if (shapes_container.children[0].getBoundingClientRect().top <= 0) {
        position_shape1 =
          shapes_container.children[0].getBoundingClientRect().top;

        var sections = shapes_container.clientHeight / 3;
        let position = Math.abs(Math.round(position_shape1 / sections));
        if (position <= 2) {
          setPosition(position);
        }

        // if (position <= 3) {
        //   setTitle(info[position].title);
        //   setParagraph(info[position].paragraph);
        // }
      }
    });
  }, []);

  return (
    <section
      id="nos_valeurs"
      className={`snap-start relative flex gap-16 flex-row w-full max-w-5xl m-auto px-8 `}
    >
      {/*--------------------- LEFT ---------------------*/}
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
        className="hidden md:block flex-1"
      >
        <div className="flex sticky top-0  flex-col gap-8 ">
          {/* Title */}
          <Title title={info[position].title} />

          {/* Divider */}
          <div className="h-[0.2rem] bg-ex_normal_purple dark:bg-ex_light_purple w-32 sm:block hidden" />
          {/* Paragraph */}
          <p className="text-justify leading-6 md:leading-7 text-ex_dark_purple dark:text-ex_light_purple">
            {info[position].paragraph}
          </p>
          {/* "Voir Plus" */}
          <Button
            bg_color="bg-ex_light_yellow"
            title="En savoir plus"
            icon="true"
          />
        </div>
      </motion.div>
      {/* Title */}
      {/* --------------------- Right ---------------------*/}
      <div
        id="shapes_container"
        className="flex-1  relative hidden md:flex flex-col justify-center items-center snap-y snap-mandatory "
      >
        <div className="svg-pattern h-full z-[0] w-2 absolute left-0 opacity-20"></div>
        <div className="svg-pattern h-full z-[0] w-2 absolute right-0 opacity-20"></div>
        <div className="svg-pattern h-full z-[0] w-2 absolute opacity-20"></div>

        {shapes.map((item, index) => {
          return (
            <div
              key={index}
              className=" snap-center h-screen flex justify-center items-center"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 1,
                  visibility: "hidden",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.1,

                  visibility: "visible",
                }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
                className="max-w-xs"
                src={`/static/svg/${item}.svg`}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="relative flex flex-col  md:hidden justify-center items-center snap-y snap-mandatory ">
        {info.map((elem, index) => {
          return (
            <motion.div
              key={index}
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
              className="flex h-screen flex-col justify-center gap-8 snap-center"
            >
              {/* Title */}
              <Title title={elem.title} />
              {/* Divider */}
              <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
              {/* Paragraph */}
              <p className="text-justify leading-6 md:leading-7 text-ex_dark_purple dark:text-ex_light_purple">
                {elem.paragraph}
              </p>
              {/* "Voir Plus" */}
              <Button
                bg_color="bg-ex_light_yellow"
                title="En savoir plus"
                icon="true"
              />
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 1,
                  visibility: "hidden",
                }}
                whileInView={{
                  opacity: 0.2,
                  scale: 1.1,

                  visibility: "visible",
                }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
                className="w-full  absolute -z-[1] opacity-20"
                src={`/static/svg/${shapes[index]}.svg`}
                alt=""
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Section4;
