import Button from "@/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";
  const wordPurple = "text-ex_normal_purple font-bold tracking-wide font-Miju";

  return (
    <section
      className={`${sectionStyle} relative justify-center items-center flex-col py-8 text-ex_dark_purple`}
    >
      <div className="absolute bottom-0  left-1/2 -translate-x-1/2 w-full -z-[1] h-full opacity-10">
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute bottom-0 left-1/4 -translate-x-1/2"
          alt=""
        />

        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute bottom-0  left-3/4 -translate-x-1/2"
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
          className="text-3xl transition-all  sm:text-4xl text-center text-ex_dark_purple font-medium leading-9 sm:leading-[50px] pb-8"
        >
          Parce que nos collaborateurs
          <br />
          sont <span className={`${wordPurple}`}>précieux</span>, vous cherchez
          <br />
          des vêtements pros
          <br />
          <span className={`${wordPurple}`}>extraordinaires</span>.
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center m-auto sm:m-0 w-[80%] sm:w-full">
          <Button
            title="Entrons en contact"
            bg_color="bg-ex_light_yellow"
            text_color="text-ex_dark_purple"
          />
          <Button
            title="Nos domaines"
            bg_color="bg-ex_normal_purple"
            fill_color="fill-white"
            text_color="text-white"
            icon={true}
          />
        </div>
      </section>

      {/* <img src="/static/svg/arrowDown.svg" alt="scroll down indicator" /> */}
      <svg
        className="absolute bottom-0 animate-bounce w-16 sm:w-16 pb-8 stroke-ex_normal_purple fill-none stroke-[6px]"
        viewBox="0 0 90 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3.16797L38.3592 14.9544C42.6698 16.3912 47.3302 16.3912 51.6408 14.9544L87 3.16797"
          strokeLinecap="round"
        />
      </svg>

      {/* BG SHAPE */}
      <svg
        className="w-[600px] sm:w-[900px] -z-[1] absolute right-0 translate-x-1/2 bottom-0 translate-y-1/2 opacity-10 shape1Animate"
        viewBox="0 0 501 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M501 240C501 265.819 475.501 287.292 467.929 310.585C460.069 334.736 467.806 367.001 453.198 387.122C438.411 407.415 405.182 409.989 384.865 424.755C364.753 439.384 352.117 470.249 327.951 478.089C304.637 485.64 276.37 468.348 250.527 468.348C224.685 468.348 196.418 485.647 173.104 478.089C148.938 470.249 136.302 439.384 116.19 424.755C95.8726 409.989 62.6439 407.415 47.8573 387.122C33.1943 367.001 40.9312 334.736 33.0706 310.585C25.5124 287.292 0 265.819 0 240C0 214.181 25.4987 192.708 33.0706 169.415C40.9312 145.264 33.1943 112.999 47.8023 92.8781C62.5889 72.5854 95.8176 70.0111 116.135 55.2447C136.247 40.6155 148.883 9.7509 173.049 1.91117C196.363 -5.64023 224.63 11.6525 250.473 11.6525C276.315 11.6525 304.583 -5.6471 327.896 1.91117C352.062 9.7509 364.698 40.6155 384.81 55.2447C405.127 70.0111 438.356 72.5854 453.143 92.8781C467.806 112.999 460.069 145.264 467.929 169.415C475.501 192.708 501 214.181 501 240Z"
          fill="#5448C8"
        />
      </svg>
    </section>
  );
};

export default Hero;
