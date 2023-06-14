import { motion } from "framer-motion";
import { useEffect } from "react";
import Title from "@/components/UI/Title";
import { teamMembers } from "@/data/section";

const Team = () => {
    var offset = 0;

    useEffect(() => {
        const main = document.querySelector(".team");
        const teamLength = teamMembers.length + 1;

        const scrollbar = document.querySelector(".scrollbar");
        const scrollElem = document.querySelector(".scrollElem");

        scrollElem.style.width = scrollbar.offsetWidth / teamLength + "px";
        window.addEventListener("resize", () => {
            scrollElem.style.width = scrollbar.offsetWidth / teamLength + "px";
        });

        main.addEventListener("scroll", (event) => {
            scrollElem.style.left =
                (scrollbar.offsetWidth * main.scrollLeft) /
                    (main.offsetWidth * teamLength) +
                "px";
        });

        document
            .querySelector(".arrow-left")
            .addEventListener("click", (event) => {
                main.scrollBy(-1, 0);
            });
        document
            .querySelector(".arrow-right")
            .addEventListener("click", (event) => {
                main.scrollBy(1, 0);
            });
    }, []);

    return (
        <section
            // viewport={{ once: true }}
            id="equipe"
            className={` relative flex flex-col gap-4 sm:gap-8 items-center justify-start w-full px-8 overflow-x-hidden overflow-y-auto pt-8`}
        >
            {/* Title */}
            <div className="max-w-5xl px-8 m-auto my-0 flex w-full justify-center">
                <Title
                    title={
                        "Nous<br class='block sm:hidden'/> sommes une <br class='block sm:hidden'/>équipe"
                    }
                    center={true}
                />
            </div>{" "}
            <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
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
                    duration: 0.5,
                    ease: "linear",
                }}
                className="text-ex_dark_purple dark:text-ex_light_purple text-xl font-semibold max-w-5xl text-center py-4 px-8"
            >
                Ex Nihilo, c’est une équipe pluridisciplinaire qui s’est forgée
                une solide réputation à travers des projets exigeants et
                diversifiés.{" "}
            </motion.p>
            <div className="relative flex flex-col sm:flex-col-reverse gap-4  ">
                <div className=" w-full max-w-5xl m-auto px-8  pb-8">
                    <div className="scrollbar relative bg-ex_light_purple h-[0.1rem] rounded-lg">
                        <div className="scrollElem absolute h-2  bg-ex_medium_purple left-0 top-1/2 -translate-y-1/2 rounded-lg"></div>
                    </div>
                </div>
                {/* Arrow */}
                <svg
                    className="arrow-right hidden lg:block w-20 right-8 z-10 top-1/3 -translate-y-1/2 fill-ex_light_purple absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" />
                </svg>
                {/* Arrow */}
                <svg
                    className="arrow-left hidden lg:block w-20 left-8 z-10 top-1/3 -translate-y-1/2 transform rotate-180 fill-ex_light_purple absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" />
                </svg>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                        visibility: "hidden",
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        visibility: "visible",
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear",
                    }}
                    // viewport={{ once: true }}
                    className="team py-0 sm:pb-8 sm:pt-8 flex m-auto my-0 w-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth"
                >
                    {/* Section */}

                    {teamMembers.map((person) => {
                        return (
                            <div
                                key={person.id}
                                className="member w-screen shrink-0 snap-center"
                            >
                                <div className="w-full gap-8 flex flex-col-reverse sm:flex-row max-w-5xl m-auto justify-between items-center px-8 sm:px-20">
                                    {/* Left */}
                                    <div className="flex flex-col-reverse md:flex-col  text-ex_dark_purple dark:text-ex_light_purple">
                                        <p className="max-w-lg">
                                            " {person.description} "
                                        </p>
                                        <div className="pt-0 pb-8 sm:pb-0 sm:pt-8">
                                            <h4 className="font-bold">
                                                {person.name}
                                            </h4>
                                            <h5 className="text-ex_normal_purple font-normal">
                                                {person.job}
                                            </h5>
                                        </div>
                                    </div>
                                    {/* Right */}
                                    <div>
                                        <img
                                            src={person.srcImg}
                                            className="w-[300px] max-w-[300px] h-[363.6px]"
                                        ></img>
                                    </div>

                                    {/* Back up */}
                                    {/* <div className="w-[300px] max-w-[300px] h-[200px] sm:h-[300px] bg-ex_normal_purple rounded-lg relative">
                    <img
                      src={person.srcImg}
                      className="h-[150px] w-[150px] rounded-lg absolute top-8 right-1/2  translate-x-1/2 sm:translate-x-0 sm:-right-8"
                    ></img>
                  </div> */}
                                </div>
                            </div>
                        );
                    })}
                    <div className="member w-screen shrink-0 snap-center">
                        <div className="w-full gap-8 flex flex-col h-full max-w-5xl m-auto justify-center items-center px-8 sm:px-20">
                            <h4 className="text-3xl font-bold text-ex_dark_purple dark:text-ex_light_purple">
                                Et tout les autres ...
                            </h4>
                            <p className="text-ex_dark_purple dark:text-ex_light_purple font-medium">
                                Nous avons à cœur de nous entourer de
                                compétences complémentaires au gré des besoins
                                spécifiques que révèlent les dossiers de nos
                                clients. C’est donc ici l’occasion de saluer et
                                de remercier tous nos partenaires d’un jour ou
                                de toujours qui viennent enrichir notre équipe.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
