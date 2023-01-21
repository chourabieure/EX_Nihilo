import Button from "@/components/Button";
import { useEffect, useState } from "react";

const Section4 = () => {
  const title_pool = ["Nous conseillons", "Nous designons", "Nous proposons"];
  const [title, setTitle] = useState(title_pool[0]);
  const paragraph_pool = [
    "Travaillant en co-création ou en accompagnement, nous faisons de vos collaborateurs les acteurs du changement à venir.Reconnus, valorisés et motivés au sein d’un groupe de travail, ils sont les meilleurs promoteurs du résultat et les véritables facilitateurs d'adhésion au projet.",
    "Quelque soit l’étape de votre projet, nous analyserons les critères qui seront les garants de la réussite de votre projetRésolument engagés, nous sommes vigilants à favoriser une démarche sociale et responsable et qui minimise l’impact environnemental de vos solutions d’habillement.",
    "Ex Nihilo vous accompagne à toutes les phases de projet de vêtements d’image & EPI. Mais l’idéal est de nouer un partenariat dès la naissance de votre projet pour construire une solution efficiente qui tienne compte de toutes vos exigences.",
  ];
  const [paragraph, setParagraph] = useState(paragraph_pool[0]);

  const sectionStyle = "snap-start text-slate-800 flex text-slate-200";

  var position_shape1 = 0;

  useEffect(() => {
    const main = document.querySelector("#scroll_snap_container");
    const shapes_container = window.document.querySelector("#shapes_container");

    window.addEventListener("resize", () => {
      console.log(shapes_container.clientHeight);
    });

    console.log();
    main.addEventListener("scroll", (event) => {
      if (shapes_container.children[0].getBoundingClientRect().top <= 0) {
        position_shape1 =
          shapes_container.children[0].getBoundingClientRect().top;

        var sections = shapes_container.clientHeight / 3;
        let position = Math.abs(Math.round(position_shape1 / sections));
        setTitle(title_pool[position]);
        setParagraph(paragraph_pool[position]);
      }
    });
  }, []);

  return (
    <section
      className={` ${sectionStyle} relative flex flex-col md:flex-row w-full max-w-5xl m-auto px-8 `}
    >
      {/*--------------------- LEFT ---------------------*/}
      <div className="left flex-1">
        <div className="sticky top-0 pt-40 flex flex-col gap-8">
          {/* Title */}
          <div className="relative ">
            <h2 className="font-Miju text-5xl pl-0 sm:pl-8 lg:pl-0">{title}</h2>
            <h3 className="font-Miju text-7xl absolute bottom-0 left-1/2  sm:left-0 lg:-left-8 -translate-x-1/2 sm:translate-x-0 whitespace-nowrap opacity-10">
              {title}
            </h3>
          </div>
          {/* Divider */}
          <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
          {/* Paragraph */}
          <p className="text-justify leading-6 md:leading-7 ">{paragraph}</p>
          {/* "Voir Plus" */}
          <Button
            bg_color="bg-ex_light_yellow"
            title="En savoir plus"
            icon="true"
          />
        </div>
      </div>{" "}
      {/* Title */}
      {/* --------------------- Right ---------------------*/}
      <div
        id="shapes_container"
        className="flex-1 flex flex-col justify-center items-center snap-y snap-mandatory"
      >
        {/* Shape 1 */}
        <div className="snap-center h-screen flex justify-center items-center">
          <img className="max-w-xs" src="/static/svg/ShapeConseil.svg" alt="" />
        </div>

        {/* Shape 2 */}
        <div className="snap-center h-screen flex justify-center items-center">
          <img className="max-w-xs" src="/static/svg/ShapeDesign.svg" alt="" />
        </div>

        {/* Shape 3 */}
        <div className="snap-center h-screen flex justify-center items-center">
          <img
            className="max-w-xs"
            src="/static/svg/ShapeExpertise.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
