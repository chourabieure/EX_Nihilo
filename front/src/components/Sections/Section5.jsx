const Section5 = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";
  return (
    <section
      className={` ${sectionStyle} relative flex-col gap-8 items-center justify-start sm:justify-center w-full max-w-5xl m-auto px-8 pt-36 sm:pt-0 `}
    >
      <div className="relative">
        <h2 className="font-Miju text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-8 whitespace-nowrap">
          Ils nous ont <br className="block sm:hidden" />
          fait confiance
        </h2>
        <h3 className="font-Miju text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-10">
          Ils nous ont <br className="block sm:hidden" />
          fait confiance
        </h3>
      </div>
      <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

      <img src="/static/images/company.png" alt="" />
    </section>
  );
};

export default Section5;
