import { useState } from "react";
import { useEffect } from "react";

const Accordion = () => {
  const accordionContent = [
    {
      id: 1,
      title: "Quels services apportez-vous à mon entreprise ?",
      content:
        "Nous vous apportons une solution complète pour la gestion de vos solutions d’habillement professionnel. Nous sommes présents de la formulation de vos besoins, à l’expertise qualité des fabrications de vos vêtements. Nous pouvons assurer une Assistance à Maîtrise d’Ouvrage et la création de vos modèles. Nous sommes là pour vous apporter une solution et un accompagnement sur toutes les questions textiles.",
      show: true,
    },
    {
      id: 2,
      title: "Quels sont vos secteurs d’activités d’intervention ?",
      content:
        "Nous n’avons qu’une spécialité : habiller et valoriser les femmes et les hommes qui travaillent. Quel que soit leur domaine d’activité. Notre plaisir est de découvrir ou re découvrir les métiers et les environnements de travail de nos clients afin de leur apporter la meilleure solution.",
      show: false,
    },
    {
      id: 3,
      title:
        "Est-il possible de vous missionner sur une tâche en particulier ?",
      content:
        "Oui bien-sûr, nous pouvons faire une mission complète ou bien intervenir sur une étape en particulier, en amont ou en aval de votre projet.",
      show: false,
    },
    {
      id: 4,
      title: "Quels sont les délais pour créer une collection ?",
      content:
        "Les délais dépendent de beaucoup de facteurs et en particulier de la dimension de la collection et de sa technicité. Mais c’est aussi fonction de l’implication que vous souhaitez de vos équipes afin de construire un véritable projet d’entreprise. En tout état de cause nous adaptons nos ressources et notre offre à vos contraintes lors du brief de votre projet. ",
      show: false,
    },
    {
      id: 5,
      title: "Où est fabriquée ma collection de vêtements ?",
      content:
        "Dans une majorité de dossiers, nous intervenons en amont du projet pour la conception et en aval pour l’expertise et l’accompagnement au changement. La fabrication est confiée à nos confrères confectionneurs. Les bassins de productions mobilisés, au regard des contraintes de délais et dans un souci de production responsable, sont principalement dans la zone Euromed et le sud et l’est de l’Europe.",
      show: false,
    },
    {
      id: 6,
      title: "Quelles sont les étapes d’une création ?",
      content:
        "La phase de création se décompose en trois temps : <br/> - Celui de la découverte des valeurs et de l’histoire de l’entreprise, ses aspirations.<br/> - Celui de la prise en compte de l’environnement de travail, les gestes et postures, les différentes contraintes liées à l’habillement. <br/> - Celui enfin du design proprement dit. Issu du travail d’atelier avec vos équipes ou des propositions de style de notre studio avec des silhouettes 3D réalistes.",
      show: false,
    },
  ];
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex-1 flex justify-end w-full pb-40">
      <div className=" w-full sm:w-3/4 ">
        {accordionContent.map((item) => {
          return (
            <div
              onClick={() =>
                isActive == item.id ? setIsActive(0) : setIsActive(item.id)
              }
              key={item.id}
              className={`accordion w-full cursor-pointer`}
            >
              <div className="w-full h-[0.1rem] bg-ex_normal_purple opacity-20" />
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-ex_normal_purple font-semibold py-4">
                  {item.title}
                </h3>

                <svg
                  className={` ${
                    isActive == item.id ? "transform rotate-180" : ""
                  } fill-ex_normal_purple w-8 stroke-[2px] stroke-ex_normal_purple transition-all`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                </svg>
              </div>
              <p
                className={`${
                  isActive == item.id ? "accordion-show" : " accordion-close"
                } text-ex_dark_purple dark:text-ex_light_purple overflow-hidden transition-all duration-500 mb-4`}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></p>
            </div>
          );
        })}

        <div className="w-full  h-[0.1rem] bg-ex_normal_purple opacity-20" />
      </div>
    </div>
  );
};

export default Accordion;
