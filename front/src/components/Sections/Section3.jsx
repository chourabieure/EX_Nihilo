const Section3 = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";
  return (
    <section
      className={` ${sectionStyle} relative flex-col gap-8 items-center justify-start sm:justify-center w-full max-w-5xl m-auto px-8 pt-48 sm:pt-0 `}
    >
      <div className="relative">
        <h2 className="font-Miju text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-8 whitespace-nowrap">
          Et si on <br className="block sm:hidden" />
          commençait ?
        </h2>
        <h3 className="font-Miju text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-10">
          Et si on <br className="block sm:hidden" />
          commençait ?
        </h3>
      </div>
      <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

      <p className="text-justify leading-6 md:leading-7">
        Ouvrons ensemble une page blanche de notre carnet. C’est notre signature
        et notre exigence : ex nihilo, locution latine signifie « en partant de
        rien ». Adeptes du design thinking, C'est avec vos équipes que nous
        travaillons le mieux.Nous privilégions un travail en co-création pour
        définir vos vêtements d'image et EPI. Pour faire simple, voici nos 3
        domaines d'interventions : le conseil, le design, l'expertise. Trois
        boutons/titres pour ouvrir les paragraphes qui seront sous forme de
        liste
      </p>

      <div className="mouse-icon absolute bottom-16 sm:block hidden">
        <div className="mouse"></div>
        <span className="arrow arrow-01"></span>
        <span className="arrow arrow-02"></span>
        <span className="arrow arrow-03"></span>
      </div>

      <div class="hand-icon  absolute bottom-8 sm:hidden block">
        <div class="hand">
          <div class="circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
