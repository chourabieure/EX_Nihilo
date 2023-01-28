import { motion } from "framer-motion";
import { off } from "process";
import { useState } from "react";
import { useEffect } from "react";
import Accordion from "../Accordion";
import Title from "../Title";

const Team = () => {
  const sectionStyle = "snap-center text-slate-800 flex text-slate-200";

  const teamMembers = [
    {
      id: 1,
      name: "Melvyn CHARLES",
      job: "Chef de projet",
      description:
        "Databases are hard. We would rather PlanetScale manage them. Our team wants to focus on helping our customers meet their health and fitness goals, not the database servers.",
    },
    {
      id: 2,
      name: "Melvyn CHARLES",
      job: "Chef de projet",
      description:
        "Databases are hard. We would rather PlanetScale manage them. Our team wants to focus on helping our customers meet their health and fitness goals, not the database servers.",
    },
    {
      id: 3,
      name: "Melvyn CHARLES",
      job: "Chef de projet",
      description:
        "Databases are hard. We would rather PlanetScale manage them. Our team wants to focus on helping our customers meet their health and fitness goals, not the database servers.",
    },
  ];

  const [position, setPosition] = useState(0);

  var position_member1 = 0;
  var offset = 0;

  useEffect(() => {
    const main = document.querySelector(".team");
    const member_container = document.querySelector(".member");

    const scrollbar = document.querySelector(".scrollbar");
    const scrollElem = document.querySelector(".scrollElem");
    var scrollInterval = "";

    scrollElem.style.width = scrollbar.offsetWidth / teamMembers.length + "px";
    window.addEventListener("resize", () => {
      scrollElem.style.width =
        scrollbar.offsetWidth / teamMembers.length + "px";
    });

    main.addEventListener("scroll", (event) => {
      scrollElem.style.left =
        (scrollbar.offsetWidth * main.scrollLeft) /
          (main.offsetWidth * teamMembers.length) +
        "px";
    });
    main.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval);
    });
    main.addEventListener("mouseleave", scroll);

    scroll();

    function scroll() {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(() => {
        offset++;
        if (offset < teamMembers.length) {
          main.scrollBy(1, 0);
        } else {
          offset = 0;
          main.scrollLeft = "0px";
        }
        // main.scrollLeft = main.scrollLeft + 20 + "px";
      }, 2000);
    }
  }, []);

  return (
    <section
      className={` ${sectionStyle} min-h-screen relative flex-col gap-4 sm:gap-8 items-start justify-start  w-full max-w-5xl m-auto px-8 pt-40`}
    >
      {/* Title */}
      <Title title={"C'est encore nous"} />
      {/* Divider */}
      <div className="pt-0 sm:pt-4" />

      <div className="team flex w-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth">
        {/* Section */}

        {teamMembers.map((person) => {
          return (
            <div
              key={person.id}
              className="member w-screen shrink-0 snap-center"
            >
              <div className="w-full gap-8 flex flex-col-reverse sm:flex-row max-w-5xl m-auto justify-between items-center px-8 sm:px-20">
                {/* Left */}
                <div className="flex flex-col  text-ex_dark_purple">
                  <p className="max-w-lg">" {person.description} "</p>
                  <div className="pt-8" />
                  <h4 className="font-bold">{person.name}</h4>
                  <h5 className="text-ex_light_purple font-normal">
                    {person.job}
                  </h5>
                </div>
                {/* Right */}
                <div className="w-[300px] max-w-[300px] h-[200px] sm:h-[300px] bg-purple-500 rounded-lg relative">
                  <div className="h-[150px] w-[150px] bg-red-200 rounded-lg absolute top-8 right-1/2  translate-x-1/2 sm:translate-x-0 sm:-right-8"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="scrollbar mt-8 w-full relative bg-ex_light_purple h-[0.1rem] rounded-lg">
        <div className="scrollElem absolute h-2  bg-ex_medium_purple left-0 top-1/2 -translate-y-1/2 rounded-lg"></div>
      </div>
    </section>
  );
};

export default Team;
