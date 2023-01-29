import { motion } from "framer-motion";
import { off } from "process";
import { useState } from "react";
import { useEffect } from "react";
import Accordion from "../Accordion";
import Title from "../Title";

const Team = () => {
  const sectionStyle = "snap-center text-slate-800 flex text-slate-200";

  const teamMembers = [
    {
      id: 1,
      name: "Jonathan",
      job: "Directeur Artistique – Styliste ",
      description:
        "Créateur d’Ex Nihilo, je poursuis un seul objectif : associer au vêtement d’image, style et ergonomie pour la valorisation de chacun. Toujours à l’affût des tendances et des développements technologiques des matières, j’apporte aux marques une identification forte et l’adhésion à leurs valeurs à travers un style original et pérenne.",
    },
    {
      id: 2,
      name: "Carine",
      job: "Responsable du BE",
      description:
        "J’accompagne, conseille et chouchoute les clients d’Ex Nihilo dans leur dossiers vêtements. En étroite collaboration avec le design, j’assure le développement et le suivi des différents projets jusqu’à leur industrialisation et leur suivi qualité. Je coordonne le bureau d’étude et reste, toujours en veille de nouvelles solutions et de nouveautés technologiques.",
    },
    {
      id: 3,
      name: "Anaïs",
      job: "Modéliste Industrielle",
      description:
        "Riche d’un parcours de modélisme dans le secteur du prêt-à-porter, j’ai suivi toutes les évolutions technologiques de mon métier avec enthousiasme et curiosité. Je suis l’interlocutrice privilégiée lors du développement des modèles et du suivi de l’industrialisation. En étroite collaboration avec le design je mets mon savoir-faire au service de la création des solutions d’habillement professionnel.",
    },
    {
      id: 4,
      name: "Julien",
      job: "Chargée de développement commercial",
      description:
        "Tourné vers la satisfaction client, j’explore les différentes facettes du développement commercial. Je participe à la communication et à la stratégie commerciale afin d’accroitre le portefeuille clients et la visibilité d’Ex Nihilo. Enthousiaste et plein d’énergie, je vous accompagne dans  vos recherches de solutions d’habillement professionnel. ",
    },
    {
      id: 5,
      name: "Daisy",
      job: "Prototypiste Industrielle",
      description:
        "De formation technique et riche d’une pratique protéiforme, je réalise la mise au point des modèles afin de donner corps aux créations de notre studio créa. J’assure les ajustements et les choix techniques avec le reste de l’équipe afin de garantir la bonne industrialisation de vos modèles et leur bien aller. Curieuse et créative, j’aime la diversité des projets que vous nous confiez.",
    },
  ];

  var offset = 0;

  useEffect(() => {
    const main = document.querySelector(".team");
    const teamLength = teamMembers.length + 1;

    const scrollbar = document.querySelector(".scrollbar");
    const scrollElem = document.querySelector(".scrollElem");
    var scrollInterval = "";

    scrollElem.style.width = scrollbar.offsetWidth / teamLength + "px";
    window.addEventListener("resize", () => {
      scrollElem.style.width = scrollbar.offsetWidth / teamLength + "px";
    });

    main.addEventListener("scroll", (event) => {
      scrollElem.style.left =
        (scrollbar.offsetWidth * main.scrollLeft) /
          (main.offsetWidth * (teamMembers.length + 1)) +
        "px";
    });

    main.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval);
    });
    main.addEventListener("mouseleave", scroll);

    scroll();

    function scroll() {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(() => {
        offset++;
        if (offset < teamLength) {
          main.scrollBy(1, 0);
        } else {
          offset = 0;
          main.scrollLeft = "0px";
        }
        main.scrollLeft = main.scrollLeft + 20 + "px";
      }, 1000);
    }
  }, []);

  return (
    <section
      className={` ${sectionStyle} min-h-screen relative flex-col gap-4 sm:gap-8 items-start justify-start  w-full pt-40`}
    >
      {/* Title */}
      <div className="max-w-5xl px-8 m-auto my-0 flex w-full">
        <Title title={"C'est encore nous"} />
      </div>

      {/* Divider */}

      <div className="team py-0 sm:pb-8 sm:pt-8 flex m-auto my-0 w-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth">
        {/* Section */}

        {teamMembers.map((person) => {
          return (
            <div
              key={person.id}
              className="member w-screen shrink-0 snap-center"
            >
              <div className="w-full gap-8 flex flex-col-reverse sm:flex-row max-w-5xl m-auto justify-between items-center px-8 sm:px-20">
                {/* Left */}
                <div className="flex flex-col  text-ex_dark_purple">
                  <p className="max-w-lg">" {person.description} "</p>
                  <div className="pt-8" />
                  <h4 className="font-bold">{person.name}</h4>
                  <h5 className="text-ex_light_purple font-normal">
                    {person.job}
                  </h5>
                </div>
                {/* Right */}
                <div className="w-[300px] max-w-[300px] h-[200px] sm:h-[300px] bg-purple-500 rounded-lg relative">
                  <div className="h-[150px] w-[150px] bg-red-200 rounded-lg absolute top-8 right-1/2  translate-x-1/2 sm:translate-x-0 sm:-right-8"></div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="member w-screen shrink-0 snap-center">
          <div className="w-full gap-8 flex flex-col h-full max-w-5xl m-auto justify-center items-center px-8 sm:px-20">
            <h4 className="text-3xl font-bold text-ex_dark_purple">
              Et tout les autres ...
            </h4>
            <p className="text-ex_dark_purple font-medium">
              Nous avons à cœur de nous entourer de compétences complémentaires
              au gré des besoins spécifiques que révèlent les dossiers de nos
              clients. C’est donc ici l’occasion de saluer et de remercier tous
              nos partenaires d’un jour ou de toujours qui viennent enrichir
              notre équipe.
            </p>
          </div>
        </div>
      </div>

      <div className="pb-16 sm:pb-0 my-8 w-full max-w-5xl m-auto px-8 ">
        <div className="scrollbar relative bg-ex_light_purple h-[0.1rem] rounded-lg">
          <div className="scrollElem absolute h-2  bg-ex_medium_purple left-0 top-1/2 -translate-y-1/2 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
