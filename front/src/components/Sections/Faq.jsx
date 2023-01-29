import { motion } from "framer-motion";
import Accordion from "../Accordion";
import Title from "../Title";

const Faq = () => {
  const sectionStyle = "snap-start text-slate-800 flex text-slate-200";

  const accordionContent = [
    {
      id: 1,
      title: "Pourquoi passer par un bureau d’étude ?",
      content:
        "Car nous vous proposons une expertise technique dans la conception de vos vêtements ce qui permet de prolonger la durée de vie de vos vêtements.",
    },
    {
      id: 2,
      title: "Pourquoi faut-il s’habiller au trvail ? Suis-je obligé ?",
      content: "Content",
    },
    {
      id: 3,
      title: "Comment et pourquoi ? Je me demande",
      content: "Content",
    },
  ];

  return (
    <section
      className={` ${sectionStyle} min-h-screen relative flex-col gap-8 items-center sm:items-start justify-start  w-full max-w-5xl m-auto px-8 pb-40`}
    >
      <div className="svg-pattern opacity-5 sm:opacity-10 h-full w-2 bg-cover absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-16"></div>
      {/* Title */}
      <Title title={"FAQ"} />
      {/* Divider */}
      <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

      <Accordion />
    </section>
  );
};

export default Faq;
