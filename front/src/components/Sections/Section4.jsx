import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  const info = [
    {
      title: "Nous conseillons",
      paragraph:
        "Travaillant en co-création ou en accompagnement, nous faisons de vos collaborateurs les acteurs du changement à venir.Reconnus, valorisés et motivés au sein d’un groupe de travail, ils sont les meilleurs promoteurs du résultat et les véritables facilitateurs d'adhésion au projet.",
    },
    {
      title: "Nous designons",
      paragraph:
        "Quelque soit l’étape de votre projet, nous analyserons les critères qui seront les garants de la réussite de votre projetRésolument engagés, nous sommes vigilants à favoriser une démarche sociale et responsable et qui minimise l’impact environnemental de vos solutions d’habillement.",
    },
    {
      title: "Nous proposons",
      paragraph:
        "Ex Nihilo vous accompagne à toutes les phases de projet de vêtements d’image & EPI. Mais l’idéal est de nouer un partenariat dès la naissance de votre projet pour construire une solution efficiente qui tienne compte de toutes vos exigences.",
    },
  ];

  const sectionStyle = "snap-start text-slate-800 flex text-slate-200";

  const [position, setPosition] = useState(0);

  var position_shape1 = 0;

  useEffect(() => {
    const main = document.querySelector("#scroll_snap_container");
    const shapes_container = window.document.querySelector("#shapes_container");

    window.addEventListener("resize", () => {
      console.log(shapes_container.clientHeight);
    });

    main.addEventListener("scroll", (event) => {
      if (shapes_container.children[0].getBoundingClientRect().top <= 0) {
        position_shape1 =
          shapes_container.children[0].getBoundingClientRect().top;

        var sections = shapes_container.clientHeight / 3;
        let position = Math.abs(Math.round(position_shape1 / sections));
        if (position <= 2) {
          console.log(position);
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
      className={` ${sectionStyle} relative flex gap-16 flex-row w-full max-w-5xl m-auto px-8 `}
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
        <div className="flex sticky top-0 pt-36  flex-col gap-8 ">
          {/* Title */}
          <div className="relative ">
            <h2 className="font-Miju text-4xl lg:text-5xl pl-0 sm:pl-8 lg:pl-0">
              {info[position].title}
            </h2>
            <h3 className="font-Miju text-6xl lg:text-7xl absolute bottom-0 left-1/2  sm:left-0 lg:-left-8 -translate-x-1/2 sm:translate-x-0 whitespace-nowrap opacity-10">
              {info[position].title}
            </h3>
          </div>
          {/* Divider */}
          <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
          {/* Paragraph */}
          <p className="text-justify leading-6 md:leading-7 ">
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
        className="flex-1 relative hidden md:flex flex-col justify-center items-center snap-y snap-mandatory "
      >
        <div className=" svg-pattern h-full w-2 absolute left-0"></div>
        <div className="svg-pattern h-full w-2 absolute right-0"></div>
        <div className="svg-pattern h-full w-2 absolute"></div>
        {/* Shape 1 */}
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
          className=" snap-center h-screen flex justify-center items-center"
        >
          <img className="max-w-xs" src="/static/svg/ShapeConseil.svg" alt="" />
        </motion.div>

        {/* Shape 2 */}
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
          className=" snap-center h-screen flex justify-center items-center"
        >
          <img className="max-w-xs" src="/static/svg/ShapeDesign.svg" alt="" />
        </motion.div>

        {/* Shape 3 */}
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
          className=" snap-center h-screen flex justify-center items-center"
        >
          <img
            className="max-w-xs"
            src="/static/svg/ShapeExpertise.svg"
            alt=""
          />
        </motion.div>

        <svg
          className="w-[600px] sm:w-[900px] -z-[1] absolute right-0 translate-x-1/2 bottom-1/2 translate-y-1/2 opacity-10 shape1Animate"
          viewBox="0 0 501 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M501 240C501 265.819 475.501 287.292 467.929 310.585C460.069 334.736 467.806 367.001 453.198 387.122C438.411 407.415 405.182 409.989 384.865 424.755C364.753 439.384 352.117 470.249 327.951 478.089C304.637 485.64 276.37 468.348 250.527 468.348C224.685 468.348 196.418 485.647 173.104 478.089C148.938 470.249 136.302 439.384 116.19 424.755C95.8726 409.989 62.6439 407.415 47.8573 387.122C33.1943 367.001 40.9312 334.736 33.0706 310.585C25.5124 287.292 0 265.819 0 240C0 214.181 25.4987 192.708 33.0706 169.415C40.9312 145.264 33.1943 112.999 47.8023 92.8781C62.5889 72.5854 95.8176 70.0111 116.135 55.2447C136.247 40.6155 148.883 9.7509 173.049 1.91117C196.363 -5.64023 224.63 11.6525 250.473 11.6525C276.315 11.6525 304.583 -5.6471 327.896 1.91117C352.062 9.7509 364.698 40.6155 384.81 55.2447C405.127 70.0111 438.356 72.5854 453.143 92.8781C467.806 112.999 460.069 145.264 467.929 169.415C475.501 192.708 501 214.181 501 240Z"
            fill="#5448C8"
          />
        </svg>
      </div>
      <div className="flex flex-col md:hidden justify-center items-center snap-y snap-mandatory ">
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
              <div className="relative ">
                <h2 className="font-Miju text-4xl lg:text-5xl pl-0 sm:pl-8 lg:pl-0">
                  {elem.title}
                </h2>
                <h3 className="font-Miju text-5xl md:text-6xl lg:text-7xl absolute bottom-0 left-1/2  sm:left-0 lg:-left-8 -translate-x-1/2 sm:translate-x-0 whitespace-nowrap opacity-10">
                  {elem.title}
                </h3>
              </div>
              {/* Divider */}
              <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
              {/* Paragraph */}
              <p className="text-justify leading-6 md:leading-7 ">
                {elem.paragraph}
              </p>
              {/* "Voir Plus" */}
              <Button
                bg_color="bg-ex_light_yellow"
                title="En savoir plus"
                icon="true"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Section4;
