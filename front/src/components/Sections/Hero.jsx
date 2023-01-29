import Button from "@/components/UI/Button";
import { motion } from "framer-motion";
import Magicword from "../UI/Magicword";

const Hero = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";

  return (
    <section
      id="1"
      className={`${sectionStyle} relative justify-between items-center flex-col py-8 pt-16 text-ex_dark_purple`}
    >
      {/* Spacer */}
      <div />

      {/* BG Lines */}
      <div className="absolute bottom-0  left-1/2 -translate-x-1/2 w-full -z-[1] h-full opacity-20">
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute bottom-0 left-1/4 sm:left-1/3 -translate-x-1/2"
          alt=""
        />

        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute bottom-0 left-3/4 sm:left-2/3 -translate-x-1/2"
          alt=""
        />
        {/* <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute md:block hidden left-0 -translate-x-1/2"
          alt=""
        />
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute  md:block hidden left-full -translate-x-1/2"
          alt=""
        /> */}
      </div>

      {/* Center Text */}
      <section className="px-8">
        <motion.div
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
          className="text-3xl transition-all  sm:text-5xl text-center text-ex_dark_purple dark:text-ex_light_purple font-medium leading-9 sm:leading-[50px] pb-8"
        >
          Parce que nos collaborateurs
          <br />
          sont <Magicword word={"précieux"} />
          , vous cherchez
          <br />
          des vêtements pros
          <br />
          <Magicword word={"extraordinaires"} />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center m-auto sm:m-0 w-[80%] sm:w-full">
          <Button
            link="/contact"
            target="_self"
            title="Entrons en contact"
            bg_color="bg-ex_light_yellow"
            text_color="text-ex_dark_purple"
            font_size="text-lg"
          />
          <Button
            title="Nos domaines"
            bg_color="bg-ex_normal_purple"
            fill_color="fill-white"
            text_color="text-white"
            font_size="text-lg"
            icon={true}
          />
        </div>
      </section>

      {/* Scroll icon */}
      <svg
        className="h-20 "
        viewBox="0 0 31 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.0102 15.3137C30.0102 7.76037 23.887 1.63721 16.3337 1.63721C8.78039 1.63721 2.65723 7.76037 2.65723 15.3137L2.65723 51.159C2.65723 58.7123 8.78039 64.8354 16.3337 64.8354C23.887 64.8354 30.0102 58.7123 30.0102 51.159L30.0102 15.3137Z"
          stroke="#8D85DA"
          strokeWidth="1.82353"
        />
        <path
          d="M16.3333 20.2453C13.6477 20.2453 11.4706 22.4225 11.4706 25.1081C11.4706 27.7937 13.6477 29.9708 16.3333 29.9708C19.019 29.9708 21.1961 27.7937 21.1961 25.1081C21.1961 22.4225 19.019 20.2453 16.3333 20.2453ZM15.6886 88.7427C16.0447 89.0988 16.622 89.0988 16.9781 88.7427L22.7806 82.9403C23.1365 82.5842 23.1365 82.0069 22.7806 81.6508C22.4244 81.2948 21.8471 81.2948 21.4911 81.6508L16.3333 86.8086L11.1756 81.6508C10.8196 81.2948 10.2423 81.2948 9.8862 81.6508C9.53012 82.0069 9.53012 82.5842 9.8862 82.9403L15.6886 88.7427ZM15.4216 25.1081L15.4216 88.098L17.2451 88.098L17.2451 25.1081L15.4216 25.1081Z"
          fill="#8D85DA"
        />
      </svg>

      {/* BG SHAPE */}
      <svg
        className="w-[600px] sm:w-[900px] fill-ex_normal_purple -z-[1] absolute right-0 translate-x-1/2 bottom-0 translate-y-1/2 opacity-50"
        viewBox="0 0 501 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M501 240C501 265.819 475.501 287.292 467.929 310.585C460.069 334.736 467.806 367.001 453.198 387.122C438.411 407.415 405.182 409.989 384.865 424.755C364.753 439.384 352.117 470.249 327.951 478.089C304.637 485.64 276.37 468.348 250.527 468.348C224.685 468.348 196.418 485.647 173.104 478.089C148.938 470.249 136.302 439.384 116.19 424.755C95.8726 409.989 62.6439 407.415 47.8573 387.122C33.1943 367.001 40.9312 334.736 33.0706 310.585C25.5124 287.292 0 265.819 0 240C0 214.181 25.4987 192.708 33.0706 169.415C40.9312 145.264 33.1943 112.999 47.8023 92.8781C62.5889 72.5854 95.8176 70.0111 116.135 55.2447C136.247 40.6155 148.883 9.7509 173.049 1.91117C196.363 -5.64023 224.63 11.6525 250.473 11.6525C276.315 11.6525 304.583 -5.6471 327.896 1.91117C352.062 9.7509 364.698 40.6155 384.81 55.2447C405.127 70.0111 438.356 72.5854 453.143 92.8781C467.806 112.999 460.069 145.264 467.929 169.415C475.501 192.708 501 214.181 501 240Z" />
      </svg>
    </section>
  );
};

export default Hero;
