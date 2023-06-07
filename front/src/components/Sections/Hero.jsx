import Button from "@/components/UI/Button";
import { motion } from "framer-motion";
import Magicword from "../UI/Magicword";

const Hero = () => {
    const shapes = [
        "shape_1.svg",
        "shape_2.svg",
        "shape_3.svg",
        "shape_4.svg",
        "shape_5.svg",
        "shape_6.svg",
        "shape_7.svg",
    ];
    return (
        <section
            id="1"
            className={`h-[calc(100vh_-_84px)] flex flex-col relative justify-center items-center py-8  text-white overflow-hidden`}
        >
            <div className="absolute w-screen px-8 flex flex-col justify-between opacity-25 ">
                <div className="flex flex-row justify-around w-full">
                    {["shape_1.svg", "shape_2.svg", "shape_3.svg"].map(
                        (elem, i) => {
                            return (
                                <img
                                    key={i}
                                    className={`h-60 imgBg ${"imgBg" + i}`}
                                    src={`/static/shapes/${elem}`}
                                />
                            );
                        }
                    )}
                </div>
                <div className="flex flex-row justify-around w-full">
                    {["shape_4.svg", "shape_5.svg"].map((elem, i) => {
                        return (
                            <img
                                key={i}
                                className={`h-60 imgBg  ${"imgBg" + (3 + i)}`}
                                src={`/static/shapes/${elem}`}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-row justify-around w-full">
                    {["shape_6.svg", "shape_7.svg", "shape_1.svg"].map(
                        (elem, i) => {
                            return (
                                <img
                                    key={i}
                                    className={`h-60 imgBg  ${
                                        "imgBg" + (5 + i)
                                    }`}
                                    src={`/static/shapes/${elem}`}
                                />
                            );
                        }
                    )}
                </div>
            </div>
            {/* Center Text */}
            <motion.section
                initial={{
                    // opacity: 0,
                    scale: 0.9,
                }}
                whileInView={{
                    // opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{ once: true }}
                className="px-8 z-10 flex flex-col justify-center items-center gap-8"
            >
                <div className="font-medium leading-[42px] sm:leading-[50px] md:leading-[64px] text-3xl  sm:text-4xl md:text-5xl text-center text-white transition-all pb-8">
                    Parce que vos collaborateurs
                    <br />
                    sont <Magicword word={"précieux"} />
                    , vous cherchez
                    <br />
                    des vêtements pros
                    <br />
                    <Magicword word={"extraordinaires"} />
                </div>
                <a
                    href="#contact"
                    className="bg-ex_dark_yellow text-white px-8 py-4 rounded-full font-semibold text-lg scale-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                    Entrons en contact
                </a>
            </motion.section>
        </section>
    );
};

export default Hero;
