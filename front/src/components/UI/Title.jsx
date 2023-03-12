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
        duration: 0.3,
      }}
      className="origin-left"

      // className={`${!padding ? padding : "pt-28 md:pt-40"}`}
    >
      <div className="relative text-ex_dark_purple dark:text-ex_light_purple text-center sm:text-left ">
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="font-Miju text-4xl pl-0 sm:pl-8 lg:pl-0"
        ></h2>
        {center ? (
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju  text-5xl absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-10"
          ></h3>
        ) : (
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-5xl absolute bottom-0 left-1/2  sm:left-0 lg:-left-8 -translate-x-1/2 sm:translate-x-0 whitespace-nowrap opacity-10"
          ></h3>
        )}
      </div>
    </motion.div>
  );
};
export default Title;
