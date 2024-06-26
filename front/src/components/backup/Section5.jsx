import { useEffect } from "react";
import Title from "@/components/UI/Title";
import { motion } from "framer-motion";

const Section5 = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";

  return (
    <section
      className={` ${sectionStyle} relative flex-col gap-8 items-center justify-center  w-full max-w-5xl m-auto px-8  `}
    >
      <Title
        title={'Ils nous ont <br class="block sm:hidden" />fait confiance'}
        center={true}
        padding={"pt-20"}
      />
      <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

      <motion.ul
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        // viewport={{ once: true }}
        className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 justify-center"
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
    </section>
  );
};

export default Section5;
