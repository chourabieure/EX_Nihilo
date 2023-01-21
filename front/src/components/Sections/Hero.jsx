import Button from "@/components/Button";

const Hero = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";
  const wordPurple = "text-ex_normal_purple font-bold tracking-wide";

  return (
    <section
      className={`${sectionStyle} relative justify-center items-center flex-col py-8 text-ex_dark_purple`}
    >
      <div className="absolute bottom-full  left-1/2 -translate-x-1/2 md:w-[80%] max-w-5xl w-full -z-[1] h-full opacity-10">
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute left-2/3 -translate-x-1/2"
          alt=""
        />
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute  left-1/3 -translate-x-1/2"
          alt=""
        />
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute md:block hidden left-0 -translate-x-1/2"
          alt=""
        />
        <img
          src="/static/svg/single_line.svg"
          className="w-2 absolute  md:block hidden left-full -translate-x-1/2"
          alt=""
        />
      </div>

      <section className="px-8">
        <h1 className="text-3xl sm:text-4xl text-center text-white font-medium leading-9 sm:leading-[50px] pb-8">
          Parce que nos collaborateurs
          <br />
          sont <span className={`${wordPurple}`}>précieux</span>, vous cherchez
          <br />
          des vêtements pros
          <br />
          <span className={`${wordPurple}`}>extraordinaires</span>.
        </h1>

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
          stroke-linecap="round"
        />
      </svg>
    </section>
  );
};

export default Hero;
