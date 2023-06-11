import { useCallback, useEffect, useState, Fragment, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Title from "@/components/UI/Title";

import { conseil, design, expertise } from "@/data/valeur";
import { Dialog, Transition } from "@headlessui/react";

import Lottie from "lottie-react";
import triangle from "/public/static/lotties/Triangle.json";
import circle from "/public/static/lotties/Circle.json";
import square from "/public/static/lotties/Square.json";

const Valeurs = () => {
    const info = [conseil, design, expertise];

    const duration_shape = 0.5;
    const duration_text = 0.5;
    const shapes = ["ShapeConseil", "ShapeDesign", "ShapeExpertise"];

    const lotties = [triangle, circle, square];

    const positionRef = useRef(0);

    const [position, __setPosition] = useState(0);

    const setPosition = (data) => {
        console.log("set with : ", data);
        positionRef.current = data;
        __setPosition(data);
    };

    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);

    var position_shape1 = 0;
    const controls = useAnimationControls();

    const Button = useCallback(
        ({ text, color }) => {
            var bg_color = "bg-ex_light_purple";
            var font_color = "text-ex_dark_purple";
            var fill_color = "fill-ex_dark_purple";

            switch (color) {
                case "purple":
                    bg_color = "bg-ex_normal_purple";
                    font_color = "text-white";
                    fill_color = "fill-white";
                    break;
                case "yellow":
                    bg_color = "bg-ex_light_yellow";
                    font_color = "text-ex_dark_purple";
                    fill_color = "fill-ex_dark_purple";
                    break;
                case "red":
                    bg_color = "bg-ex_red";
                    font_color = "text-white";
                    fill_color = "fill-white";
                    break;
                default:
                    break;
            }

            return (
                <a
                    className={`flex ${bg_color} ${font_color} text-ex_ items-center justify-center gap-2 px-4 py-4 sm:py-2  rounded-lg font-semibold whitespace-nowrap scale-100 hover:scale-105 cursor-pointer transition-all duration-500`}
                    onClick={() => setOpen(true)}
                >
                    {text}
                    <svg
                        className={`h-6 ${fill_color}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                    </svg>
                </a>
            );
        },
        [position]
    );

    const listener = (event) => {
        const shapes_container =
            window.document.querySelector("#shapes_container");

        if (shapes_container.children[0].getBoundingClientRect().top <= 0) {
            position_shape1 =
                shapes_container.children[0].getBoundingClientRect().top;

            var sections = shapes_container.clientHeight / 3;
            let newPosition = Math.abs(Math.round(position_shape1 / sections));
            if (newPosition <= 2) {
                if (positionRef.current !== newPosition) {
                    console.log(shapes_container.offsetTop);
                    // window.scrollTo({
                    //     top: position_shape1 + sections * newPosition,
                    //     behavior: "smooth",
                    // });
                    setPosition(newPosition);
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
    }, []);

    useEffect(() => {
        controls.start({
            opacity: [1, 0, 1],
            scale: [1, 0.95, 1],
            transition: { duration: 0.5 },
        });
    }, [position]);

    return (
        <section
            id="nos_valeurs"
            className={`relative flex gap-16 flex-row w-full max-w-5xl m-auto px-8`}
        >
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex h-full items-center justify-center p-8 sm:items-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative flex flex-col h-full sm:h-auto max-h-none sm:max-h-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 w-full max-w-5xl">
                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            scale: 0.95,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: duration_text,
                                        }}
                                        animate={controls}
                                        className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-md font-semibold text-ex_dark_purple origin-top overflow-y-scroll flex-1"
                                        dangerouslySetInnerHTML={{
                                            __html: info[positionRef.current]
                                                ?.more,
                                        }}
                                    ></motion.p>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            {/*--------------------- LEFT ---------------------*/}
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
                className="hidden md:block flex-1"
            >
                <div className="sticky top-0 ">
                    <div className="flex h-screen flex-col justify-center gap-8 ">
                        <Title title={info[positionRef.current]?.title} />

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
                                duration: duration_text,
                            }}
                            viewport={{ once: true }}
                            className="h-[0.2rem] bg-ex_light_purple w-32 sm:block hidden"
                        />
                        <motion.p
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: duration_text,
                            }}
                            animate={controls}
                            className="leading-6 md:leading-7 text-ex_light_purple origin-top-left"
                            dangerouslySetInnerHTML={{
                                __html: info[positionRef.current]?.description,
                            }}
                        ></motion.p>
                        <Button
                            text={info[positionRef.current]?.button.text}
                            color={info[positionRef.current]?.button.color}
                        />
                    </div>
                </div>
            </motion.div>
            {/* --------------------- Right ---------------------*/}
            <div
                id="shapes_container"
                className="flex-1 relative hidden md:flex flex-col justify-center items-center"
            >
                <div className="svg-pattern h-full z-[0] w-2 absolute left-0 opacity-20"></div>
                <div className="svg-pattern h-full z-[0] w-2 absolute right-0 opacity-20"></div>
                <div className="svg-pattern h-full z-[0] w-2 absolute opacity-20"></div>

                {shapes.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="snap-center h-screen w-full flex justify-center items-center "
                        >
                            <Lottie
                                animationData={lotties[index]}
                                loop={true}
                            />
                            {/* <motion.img
                                initial={{
                                    opacity: 0,
                                    scale: 0.7,
                                    visibility: "hidden",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1.1,

                                    visibility: "visible",
                                }}
                                transition={{
                                    delay: 0,
                                    duration: duration_shape,
                                    ease: "easeIn",
                                }}
                                className="w-full"
                                src={`/static/svg/${item}.svg`}
                                alt=""
                            /> */}
                        </div>
                    );
                })}
            </div>
            {/* Mobile */}
            <div className="relative flex flex-col md:hidden justify-center items-center">
                {info.map((elem, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                visibility: "hidden",
                            }}
                            whileInView={{
                                opacity: 1,
                                visibility: "visible",
                            }}
                            transition={{
                                duration: duration_text,
                                ease: "linear",
                            }}
                            className="flex h-screen flex-col justify-center items-center gap-8"
                        >
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    scale: 1,
                                    visibility: "hidden",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1.1,

                                    visibility: "visible",
                                }}
                                transition={{
                                    duration: duration_shape,
                                    ease: "linear",
                                }}
                                className="w-1/2 "
                                src={`/static/svg/${shapes[index]}.svg`}
                                alt=""
                            />

                            <Title title={elem.title} center={true} />
                            <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: elem.description,
                                }}
                                className="leading-6 md:leading-7 text-ex_light_purple"
                            ></p>
                            <Button
                                text={info[index].button.text}
                                color={info[index].button.color}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Valeurs;
