import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {accordionContent} from "@/data/faq"

const Accordion = () => {
    const [isActive, setIsActive] = useState(0);

    return (
        <div className="flex-1 flex justify-end w-full">
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
                className=" w-full sm:w-3/4 "
            >
                {accordionContent.map((item) => {
                    return (
                        <div
                            onClick={() =>
                                isActive == item.id
                                    ? setIsActive(0)
                                    : setIsActive(item.id)
                            }
                            key={item.id}
                            className={`accordion w-full cursor-pointer`}
                        >
                            <div className="w-full h-[0.1rem] bg-ex_normal_purple opacity-20" />
                            <div className="flex justify-between items-center">
                                <h3 className="text-md text-ex_normal_purple font-bold py-4">
                                    {item.title}
                                </h3>

                                <svg
                                    className={` ${
                                        isActive == item.id
                                            ? "transform rotate-180"
                                            : ""
                                    } fill-ex_normal_purple w-8 stroke-[2px] stroke-ex_normal_purple transition-all`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                </svg>
                            </div>
                            <p
                                className={`${
                                    isActive == item.id
                                        ? "accordion-show"
                                        : " accordion-close"
                                } text-ex_light_purple overflow-hidden transition-all duration-500 mb-4`}
                                dangerouslySetInnerHTML={{
                                    __html: item.content,
                                }}
                            ></p>
                        </div>
                    );
                })}

                <div className="w-full  h-[0.1rem] bg-ex_normal_purple opacity-20" />
            </motion.div>
        </div>
    );
};

export default Accordion;
