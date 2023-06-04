import { useEffect, useState, Fragment, useRef } from "react";

import { set, useForm } from "react-hook-form";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";

import gsap from "gsap";

import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [missing, setMissing] = useState(false);

    const onSubmit = async (data) => {
        if (data.email || data.phone) {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            hideMissingText();
            reset();
            showSuccessText();
        } else {
            hideSuccessText();
            showMissingText();
        }

        setTimeout(() => setLoading(false), 1000);
        setTimeout(() => hideSuccessText(), 5000);
    };

    const showMissingText = () => {
        const tl = gsap.timeline();
        tl.to(".missingText", {
            duration: 0.5,
            paddingTop: "2.5rem",
            fontSize: "1.25rem",
        });
        tl.to(".missingText", {
            opacity: 1,
            duration: 0.5,
        });
    };

    const hideMissingText = () => {
        const tl = gsap.timeline();

        tl.to(".missingText", {
            opacity: 0,
            duration: 0.5,
        });
        tl.to(".missingText", {
            duration: 0.5,
            paddingTop: "0px",
            fontSize: "0px",
        });
    };
    const showSuccessText = () => {
        const tl = gsap.timeline();
        tl.to(".successText", {
            duration: 0.5,
            paddingTop: "2.5rem",
            fontSize: "1.25rem",
        });
        tl.to(".successText", {
            opacity: 1,
            duration: 0.5,
        });
    };

    const hideSuccessText = () => {
        const tl = gsap.timeline();

        tl.to(".successText", {
            opacity: 0,
            duration: 0.5,
        });
        tl.to(".successText", {
            duration: 0.5,
            paddingTop: "0px",
            fontSize: "0px",
        });
    };

    const inputStyle =
        "ml-0 lg:ml-8 font-Poppins bg-transparent text-lg sm:text-2xl font-bold border-b-[0.2rem] border-ex_dark_purple dark:border-ex_light_purple outline-none focus:ring-0 text-ex_normal_purple flex-1 focus:bg-none";

    const labelStyle =
        "text-3xl md:text-4xl font-Miju text-ex_dark_purple dark:text-ex_light_purple";

    return (
        <section
            id="contact"
            className="h-screen w-full flex justify-center items-center px-4 sm:px-8 md:px-16"
        >
            <div className="relative w-full bg-ex_dark_purple p-8 sm:p-16 rounded-3xl overflow-hidden">
                <motion.div
                    initial={{
                        scale: 0.9,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="relative z-10"
                >
                    <Title title="Contactez-nous" />

                    <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden " />

                    <h1 className="missingText  text-red-400 opacity-0 text-[0px]">
                        Veuillez au moins renseigner votre numéro de téléphone
                        ou votre email pour que nous puissions vous recontacter.
                    </h1>
                    <h1 className="successText  text-green-400 opacity-0 text-[0px]">
                        Merci pour votre message ! Nous vous recontacterons sous
                        peu.
                    </h1>
                    <form
                        className="flex flex-col lg:flex-row justify-between items-center sm:items-end gap-8 z-1"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col gap-8 md:gap-2  pt-8 flex-1 w-full">
                            <div className="flex md:flex-row w-full flex-col gap-0 md:gap-4 text-white items-center font-normal">
                                <label
                                    className={
                                        "text-lg md:text-2xl pt-1 w-full md:w-auto"
                                    }
                                >
                                    Mon nom est :
                                </label>
                                <div className="relative flex-1 w-full">
                                    <input
                                        id="name"
                                        className={`peer relative bg-transparent border-0 border-b-2  placeholder-red-400 ${
                                            errors.name?.type === "required"
                                                ? "border-red-400 focus:border-red-400"
                                                : "border-white focus:border-white "
                                        }  focus:ring-0 w-full text-xl pb-0`}
                                        type="text"
                                        placeholder={
                                            errors.name?.type === "required"
                                                ? "Veuillez renseigner votre nom"
                                                : " "
                                        }
                                        {...register("name", {
                                            required: true,
                                        })}
                                        aria-invalid={
                                            errors.name ? "true" : "false"
                                        }
                                    />

                                    {errors.name?.type !== "required" && (
                                        <div className="absolute  w-full h-1 bottom-2 fill-red-500 bg-[url('/static/svg/horizontalLine.svg')] hidden peer-placeholder-shown:block peer-focus:hidden" />
                                    )}
                                </div>
                            </div>
                            <div className="flex md:flex-row w-full flex-col gap-0 md:gap-4 text-white items-center font-normal">
                                <label
                                    className={
                                        "text-lg md:text-2xl pt-1 w-full md:w-auto"
                                    }
                                >
                                    Merci de m'appeler :
                                </label>
                                <div className="relative  flex-1 w-full ">
                                    <input
                                        id="phone"
                                        type="tel"
                                        className={`peer relative bg-transparent border-0 border-b-2  placeholder-red-400 ${
                                            errors.phone
                                                ? "border-red-400 focus:border-red-400"
                                                : "border-white focus:border-white "
                                        }  focus:ring-0 w-full text-xl pb-0`}
                                        placeholder={" "}
                                        {...register("phone", {
                                            pattern:
                                                /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
                                        })}
                                        aria-invalid={
                                            errors.phone ? "true" : "false"
                                        }
                                    />
                                    <div className="absolute  w-full h-1 bottom-2 bg-[url('/static/svg/horizontalLine.svg')] hidden peer-placeholder-shown:block peer-focus:hidden" />
                                </div>
                            </div>
                            <div className="flex md:flex-row w-full flex-col gap-0 md:gap-4 text-white items-center font-normal">
                                <label
                                    className={
                                        "text-lg md:text-2xl pt-1 w-full md:w-auto"
                                    }
                                >
                                    Ou de m'envoyer un mail :
                                </label>
                                <div className="relative  flex-1  w-full">
                                    <input
                                        id="name"
                                        type="email"
                                        className={`peer relative bg-transparent border-0 border-b-2  placeholder-red-400 ${
                                            errors.email
                                                ? "border-red-400 focus:border-red-400"
                                                : "border-white focus:border-white "
                                        }  focus:ring-0 w-full text-xl pb-0`}
                                        placeholder=" "
                                        {...register("email", {
                                            pattern:
                                                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        })}
                                    />
                                    <div className="absolute w-full h-1 bottom-2 bg-[url('/static/svg/horizontalLine.svg')] hidden peer-placeholder-shown:block peer-focus:hidden" />
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full sm:w-auto sm:min-w-[250px]"
                            type="submit"
                        >
                            <Button
                                loading={loading}
                                title={"Envoyer"}
                                bg_color={"bg-ex_dark_yellow"}
                                text_color={"text-white"}
                            />
                        </button>
                    </form>
                </motion.div>

                <img
                    className="absolute w-48 h-48 -top-16 left-10 z-0"
                    src="static/svg/shape1.svg"
                />
                <img
                    className="absolute w-48 h-48 -bottom-16 right-10 z-0"
                    src="static/svg/shape2.svg"
                />
            </div>
        </section>
    );
};

export default Contact;
