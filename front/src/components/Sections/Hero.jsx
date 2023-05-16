import Button from "@/components/UI/Button";
import { motion } from "framer-motion";
import Magicword from "../UI/Magicword";

const Hero = () => {
  return (
    <section
      id="1"
      className={`h-[calc(100vh_-_84px)] flex flex-col relative justify-center items-center py-8  text-ex_dark_purple`}
    >
      {/* Center Text */}
      <motion.section
        initial={{
          // opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          // opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="px-8 z-10"
      >
        <div className="font-[Poppins-Medium] text-4xl md:leading-[84px]  transition-all sm:text-5xl md:text-6xl text-center text-ex_dark_purple dark:text-white pb-8">
          Parce que vos collaborateurs
          <br />
          sont <span className="font-[Poppins-Bold] ">PRÉCIEUX</span>
          , vous cherchez
          <br />
          des vêtements pros
          <br />
          <span className="font-[Poppins-Bold]">EXTRAORDINAIRES</span>
        </div>
      </motion.section>
    </section>
  );
};

export default Hero;
