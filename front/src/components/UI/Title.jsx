import { motion } from "framer-motion";

const Title = ({ title, center = false }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="pt-28 md:pt-40"
    >
      {center ? (
        <div className="relative text-ex_dark_purple dark:text-ex_light_purple">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-center text-5xl leading-8 whitespace-nowrap"
          ></h2>
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-center text-6xl absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-10"
          ></h3>
        </div>
      ) : (
        <div className="relative text-ex_dark_purple dark:text-ex_light_purple text-center sm:text-left">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-5xl pl-0 sm:pl-8 lg:pl-0"
          ></h2>
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-6xl absolute bottom-0 left-1/2  sm:left-0 lg:-left-8 -translate-x-1/2 sm:translate-x-0 whitespace-nowrap opacity-10"
          ></h3>
        </div>
      )}
    </motion.div>
  );
};
export default Title;
