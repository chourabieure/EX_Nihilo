import Button from "@/components/UI/Button";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Title from "@/components/UI/Title";

const Valeurs = () => {
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
  const controls = useAnimationControls();

  useEffect(() => {
    const shapes_container = window.document.querySelector("#shapes_container");

    window.addEventListener("scroll", (event) => {
      if (shapes_container.children[0].getBoundingClientRect().top <= 0) {
        position_shape1 =
          shapes_container.children[0].getBoundingClientRect().top;

        var sections = shapes_container.clientHeight / 3;
        let position = Math.abs(Math.round(position_shape1 / sections));
        if (position <= 2) {
          setPosition(position);
        }
      }
    });
  }, []);

  useEffect(() => {
    controls.start({
      opacity: [1, 0, 1],
      scale: [1, 0.95, 1],
      transition: { duration: 0.5 },
    });
  }, [position]);

  return (
    <section
      id="nos_valeurs"
      className={`relative flex gap-16 flex-row w-full max-w-5xl m-auto px-8 `}
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
        <div className="sticky top-0 ">
          <div className="flex h-screen flex-col justify-center gap-8 ">
            <Title title={info[position].title} />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="h-[0.2rem] bg-ex_normal_purple dark:bg-ex_light_purple w-32 sm:block hidden"
            />
            <motion.p
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              animate={controls}
              className="text-justify leading-6 md:leading-7 text-ex_dark_purple dark:text-ex_light_purple origin-top-left"
            >
              {info[position].paragraph}
            </motion.p>
          </div>
        </div>
      </motion.div>
      {/* --------------------- Right ---------------------*/}
      <div
        id="shapes_container"
        className="flex-1 relative hidden md:flex flex-col justify-center items-center "
      >
        <div className="svg-pattern h-full z-[0] w-2 absolute left-0 opacity-20"></div>
        <div className="svg-pattern h-full z-[0] w-2 absolute right-0 opacity-20"></div>
        <div className="svg-pattern h-full z-[0] w-2 absolute opacity-20"></div>

        {shapes.map((item, index) => {
          return (
            <div
              key={index}
              className=" snap-center h-screen w-full flex justify-center items-center"
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
                className="w-full"
                src={`/static/svg/${item}.svg`}
                alt=""
              />
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="relative flex flex-col md:hidden justify-center items-center">
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
              className="flex h-screen flex-col justify-center items-center gap-8"
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
                className="w-1/2 "
                src={`/static/svg/${shapes[index]}.svg`}
                alt=""
              />

              <Title title={elem.title} padding={false} />
              <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
              <p className="text-justify leading-6 md:leading-7 text-ex_dark_purple dark:text-ex_light_purple">
                {elem.paragraph}
              </p>
            </motion.div>
          );
        })}
      </div>
      {/* <svg
        className="w-[600px] sm:w-[900px] z-[0] absolute fill-ex_normal_purple left-0 -translate-x-1/2 bottom-0 translate-y-1/2 opacity-20 shape1Animate"
        viewBox="0 0 501 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M501 240C501 265.819 475.501 287.292 467.929 310.585C460.069 334.736 467.806 367.001 453.198 387.122C438.411 407.415 405.182 409.989 384.865 424.755C364.753 439.384 352.117 470.249 327.951 478.089C304.637 485.64 276.37 468.348 250.527 468.348C224.685 468.348 196.418 485.647 173.104 478.089C148.938 470.249 136.302 439.384 116.19 424.755C95.8726 409.989 62.6439 407.415 47.8573 387.122C33.1943 367.001 40.9312 334.736 33.0706 310.585C25.5124 287.292 0 265.819 0 240C0 214.181 25.4987 192.708 33.0706 169.415C40.9312 145.264 33.1943 112.999 47.8023 92.8781C62.5889 72.5854 95.8176 70.0111 116.135 55.2447C136.247 40.6155 148.883 9.7509 173.049 1.91117C196.363 -5.64023 224.63 11.6525 250.473 11.6525C276.315 11.6525 304.583 -5.6471 327.896 1.91117C352.062 9.7509 364.698 40.6155 384.81 55.2447C405.127 70.0111 438.356 72.5854 453.143 92.8781C467.806 112.999 460.069 145.264 467.929 169.415C475.501 192.708 501 214.181 501 240Z" />
      </svg> */}
    </section>
  );
};

export default Valeurs;
