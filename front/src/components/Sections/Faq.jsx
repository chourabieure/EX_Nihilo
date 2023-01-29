import { motion } from "framer-motion";
import Accordion from "../UI/Accordion";
import Title from "../UI/Title";
import Footer from "./Footer";

const Faq = () => {
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
    <section id="faq" className={` snap-start w-full`}>
      <div className=" relative px-8 max-w-5xl mx-auto min-h-screen flex flex-col gap-8 items-center sm:items-start justify-start  ">
        {/* Title */}
        <Title title={"FAQ"} />
        {/* Divider */}
        <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

        <Accordion />
      </div>
      <Footer />
    </section>
  );
};

export default Faq;
