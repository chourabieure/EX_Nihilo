const Section3 = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";
  return (
    <section
      className={` ${sectionStyle} relative flex-col gap-8 items-center justify-start sm:justify-center w-full max-w-5xl m-auto px-8 pt-36 sm:pt-0 `}
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

      <div className="hand-icon  absolute bottom-8 sm:hidden block">
        <div className="hand">
          <div className="circle"></div>
        </div>
      </div>
      <svg
        className="w-[600px] sm:w-[900px] -z-[1] absolute left-0 -translate-x-1/2 bottom-0 translate-y-1/2 opacity-10 shape1Animate"
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

export default Section3;
