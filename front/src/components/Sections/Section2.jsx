import { motion } from "framer-motion";
import Title from "@/components/UI/Title";

const Section2 = () => {
  const sectionStyle =
    "min-h-screen snap-center text-slate-800 flex text-slate-200";
  return (
    <section id="qui_sommes_nous" className={` ${sectionStyle}  w-full `}>
      <div className="relative px-8 max-w-5xl mx-auto min-h-screen flex flex-col gap-8 items-center sm:items-start justify-start  ">
        {/* Title */}
        <Title title={"Qui sommes <br class='block sm:hidden'/> nous ?"} />
        <div className="h-[0.2rem] rounded-lg bg-ex_normal_purple dark:bg-ex_light_purple opacity-50 w-32 sm:block hidden" />
        {/* Text */}
        <motion.p
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
          className="text-justify leading-6 md:leading-7 text-ex_dark_purple dark:text-ex_light_purple"
        >
          Nous sommes le partenaire de votre ambition. Nous sommes{" "}
          <span className="font-Miju ">Ex Nihilo</span> ! Une agence de{" "}
          <span className="text-ex_red">Conseil</span>
          {", "}
          <span className="text-ex_red">Design</span>
          {" et "}
          <span className="text-ex_red">d'Expertise</span>. Nous intervenons à
          tout moment dans votre projet. Bien sûr, si c'est au début, c'est
          encore mieux ! Nous appréhendons ainsi toutes vos valeurs, votre
          organisation et vos enjeux. Nous vous apportons une expertise textile
          et design afin de faire de vos vêtements pros un outil de valorisation
          et de cohésion. Notre approche systémique des vêtements d’image et EPI
          vous assure d’une réponse sur mesure aux exigences particulières de
          vos projets.
        </motion.p>
        {/* Image */}
        <div className=" w-full h-28 flex-grow hidden min-[479px]:block">
          <motion.img
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
            className=" h-full w-full object-cover object-top rounded-t-xl  "
            src="/static/images/Image1.jpg"
            alt=""
          />
        </div>

        <img
          src="/static/svg/single-line-section2.svg"
          className="w-2 absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 opacity-20 hidden min-[479px]:block"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section2;
