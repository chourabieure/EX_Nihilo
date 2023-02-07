import { calcLength, motion } from "framer-motion";
import { useEffect } from "react";
import Title from "@/components/UI/Title";
import { off } from "process";

const Team = () => {
  const sectionStyle = "snap-start text-slate-800 flex text-slate-200";
  const teamMembers = [
    {
      id: 1,
      name: "Jonathan",
      job: "Directeur Artistique – Styliste ",
      description:
        "Créateur d’Ex Nihilo, je poursuis un seul objectif : associer au vêtement d’image, style et ergonomie pour la valorisation de chacun. Toujours à l’affût des tendances et des développements technologiques des matières, j’apporte aux marques une identification forte et l’adhésion à leurs valeurs à travers un style original et pérenne.",
      srcImg: "/static/images/portrait/Jonathan.png",
    },
    {
      id: 2,
      name: "Carine",
      job: "Responsable du BE",
      description:
        "J’accompagne, conseille et chouchoute les clients d’Ex Nihilo dans leur dossiers vêtements. En étroite collaboration avec le design, j’assure le développement et le suivi des différents projets jusqu’à leur industrialisation et leur suivi qualité. Je coordonne le bureau d’étude et reste, toujours en veille de nouvelles solutions et de nouveautés technologiques.",
      srcImg: "/static/images/portrait/Carine.png",
    },
    {
      id: 3,
      name: "Anaïs",
      job: "Modéliste Industrielle",
      description:
        "Riche d’un parcours de modélisme dans le secteur du prêt-à-porter, j’ai suivi toutes les évolutions technologiques de mon métier avec enthousiasme et curiosité. Je suis l’interlocutrice privilégiée lors du développement des modèles et du suivi de l’industrialisation. En étroite collaboration avec le design je mets mon savoir-faire au service de la création des solutions d’habillement professionnel.",
      srcImg: "/static/images/portrait/Anais.png",
    },
    {
      id: 4,
      name: "Julien",
      job: "Chargée de développement commercial",
      description:
        "Tourné vers la satisfaction client, j’explore les différentes facettes du développement commercial. Je participe à la communication et à la stratégie commerciale afin d’accroitre le portefeuille clients et la visibilité d’Ex Nihilo. Enthousiaste et plein d’énergie, je vous accompagne dans  vos recherches de solutions d’habillement professionnel. ",
      srcImg: "/static/images/portrait/Julien.png",
    },
    {
      id: 5,
      name: "Daisy",
      job: "Prototypiste Industrielle",
      description:
        "De formation technique et riche d’une pratique protéiforme, je réalise la mise au point des modèles afin de donner corps aux créations de notre studio créa. J’assure les ajustements et les choix techniques avec le reste de l’équipe afin de garantir la bonne industrialisation de vos modèles et leur bien aller. Curieuse et créative, j’aime la diversité des projets que vous nous confiez.",
      srcImg: "/static/images/portrait/Daisy.png",
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
          (main.offsetWidth * teamLength) +
        "px";
    });

    document.querySelector(".arrow-left").addEventListener("click", (event) => {
      main.scrollBy(-1, 0);
    });
    document
      .querySelector(".arrow-right")
      .addEventListener("click", (event) => {
        main.scrollBy(1, 0);
      });
    // main.addEventListener("mouseenter", () => {
    //   clearInterval(scrollInterval);
    // });
    // main.addEventListener("mouseleave", scroll);

    // const scroll = (direction) => {
    //   console.log(main);
    //   // direction == "left" ? main.scrollBy(1, 0) : main.scrollBy(1, 0);
    // };

    // scroll();

    // function scroll() {
    //   clearInterval(scrollInterval);
    //   scrollInterval = setInterval(() => {
    //     // offset++;
    //     // if (offset < teamLength) {
    //     //   main.scrollBy(1, 0);
    //     // } else {
    //     //   offset = 0;
    //     //   main.scrollLeft = "0px";
    //     // }
    //     // main.scrollLeft = main.scrollLeft + 20 + "px";
    //   }, 2000);
    // }
  }, []);

  return (
    <section
      id="equipe"
      className={` ${sectionStyle} min-h-screen relative flex-col gap-4 sm:gap-8 items-center justify-start w-full`}
    >
      {/* Title */}
      <div className="max-w-5xl px-8 m-auto my-0 flex w-full justify-center">
        <Title title={"Nous sommes une <br class='block sm:hidden'/>équipe"} />
      </div>{" "}
      <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
      <p className="text-ex_dark_purple dark:text-ex_light_purple text-xl font-semibold max-w-5xl text-center py-4 px-8">
        Ex Nihilo, c’est une équipe pluridisciplinaire qui s’est forgée une
        solide réputation à travers des projets exigeants et diversifiés.{" "}
      </p>
      <div className="relative flex flex-col sm:flex-col-reverse gap-4">
        <div className=" w-full max-w-5xl m-auto px-8  pb-8">
          <div className="scrollbar relative bg-ex_light_purple h-[0.1rem] rounded-lg">
            <div className="scrollElem absolute h-2  bg-ex_medium_purple left-0 top-1/2 -translate-y-1/2 rounded-lg"></div>
          </div>
        </div>
        {/* Arrow */}
        <svg
          className="arrow-right hidden lg:block w-20 right-8 z-10 top-1/3 -translate-y-1/2 fill-ex_light_purple absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" />
        </svg>
        {/* Arrow */}
        <svg
          className="arrow-left hidden lg:block w-20 left-8 z-10 top-1/3 -translate-y-1/2 transform rotate-180 fill-ex_light_purple absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" />
        </svg>
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
                  <div className="flex flex-col-reverse md:flex-col  text-ex_dark_purple dark:text-ex_light_purple">
                    <p className="max-w-lg">" {person.description} "</p>
                    <div className="pt-0 pb-8 sm:pb-0 sm:pt-8">
                      <h4 className="font-bold">{person.name}</h4>
                      <h5 className="text-ex_normal_purple font-normal">
                        {person.job}
                      </h5>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="w-[300px] max-w-[300px] h-[200px] sm:h-[300px] bg-ex_normal_purple rounded-lg relative">
                    <img
                      src={person.srcImg}
                      className="h-[150px] w-[150px] rounded-lg absolute top-8 right-1/2  translate-x-1/2 sm:translate-x-0 sm:-right-8"
                    ></img>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="member w-screen shrink-0 snap-center">
            <div className="w-full gap-8 flex flex-col h-full max-w-5xl m-auto justify-center items-center px-8 sm:px-20">
              <h4 className="text-3xl font-bold text-ex_dark_purple dark:text-ex_light_purple">
                Et tout les autres ...
              </h4>
              <p className="text-ex_dark_purple dark:text-ex_light_purple font-medium">
                Nous avons à cœur de nous entourer de compétences
                complémentaires au gré des besoins spécifiques que révèlent les
                dossiers de nos clients. C’est donc ici l’occasion de saluer et
                de remercier tous nos partenaires d’un jour ou de toujours qui
                viennent enrichir notre équipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
