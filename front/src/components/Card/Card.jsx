import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { motion } from "framer-motion";

const Card = ({ logo, bgColor, imgVerso, alt, tags }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
        setTimeout(() => {
            setFlipped(false);
        }, 5000);
    };

    const styleSize =
        "w-[146.81px] h-[192.38px] sm:w-[195.75px] sm:h-[256.5px] md:w-[261px] md:h-[342px] lg:w-[348px] lg:h-[456px]";
    const stylePadding = "p-[8.5px] sm:p-[11.5px] md:p-[15px] lg:p-[20px]";

    const stylePaddingImg = "p-[3.8px] sm:p-[5px] md:p-[6.75px] lg:p-[9px]";

    return (
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
                duration: 0.5,
            }}
            className="cursor-pointer"
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    className={`flex justify-center ${styleSize} ${bgColor} rounded-2xl relative perspective-1000`}
                    onClick={handleClick}
                >
                    <div className="card w-full h-full absolute transition-transform duration-500 transform-style-preserve-3d">
                        {/* Contenu du côté avant de la carte */}
                        <div
                            className={`flex flex-col w-full h-full justify-between items-center ${stylePadding}`}
                        >
                            {/* Logo Ex Nihilo */}
                            <div className="w-full flex justify-end ">
                                <svg
                                    className="w-[10%]"
                                    viewBox="0 0 28 61"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.48541 34.0159L4.49756 38.0038C3.78646 38.7149 3.16521 39.4913 2.63611 40.326L0.910571 38.6005C-0.303524 37.3864 -0.303524 35.4174 0.910571 34.2033L2.5931 32.5208C3.8072 31.3067 3.8072 29.3377 2.5931 28.1236L0.910571 26.4419C-0.303524 25.227 -0.303524 23.258 0.910571 22.0439L2.51016 20.4443C3.06538 21.3574 3.72887 22.2029 4.49756 22.9708L12.014 30.4873L8.48541 34.0159V34.0159Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M23.2291 42.1795L22.1387 43.27C20.9246 44.484 18.9556 44.484 17.7415 43.27L16.059 41.5874C14.8449 40.3733 12.8759 40.3733 11.6618 41.5874L9.97929 43.27C8.7652 44.484 6.79623 44.484 5.58214 43.27L4.6875 42.3753C5.16746 41.503 5.77335 40.6928 6.49674 39.9686L10.4685 35.9969L13.9971 32.4683L14.0132 32.4521L14.0293 32.4683L17.4052 35.8441L21.5297 39.9686C22.1993 40.6383 22.7676 41.3816 23.2291 42.1795V42.1795Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M23.3341 18.5712C22.8549 19.4421 22.2505 20.2499 21.5279 20.9725L14.0114 28.489L6.49494 20.9725C5.7178 20.1954 5.07658 19.3192 4.58203 18.3723L5.58034 17.374C6.79443 16.1592 8.7634 16.1592 9.97749 17.374L11.66 19.0558C12.8741 20.2699 14.8431 20.2699 16.0572 19.0558L17.7397 17.374C18.9538 16.1592 20.9228 16.1592 22.1369 17.374L23.3341 18.5712Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M26.8096 34.2024C28.0237 35.4165 28.0237 37.3854 26.8096 38.5995L25.2699 40.1392C24.7676 39.3751 24.1863 38.661 23.5282 38.0029L19.3875 33.8622L16.0117 30.4864L23.5282 22.9699C24.2431 22.255 24.8682 21.4732 25.3989 20.6323L26.8096 22.043C28.0237 23.2571 28.0237 25.2261 26.8096 26.4409L25.127 28.1227C23.9129 29.3368 23.9129 31.3058 25.127 32.5198L26.8096 34.2024V34.2024Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M16.0573 41.5882C14.8432 40.3741 12.8743 40.3741 11.6602 41.5882L13.8587 39.3896L16.0573 41.5882Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M16.0573 19.0552L13.8587 21.2538L11.6602 19.0552C12.8743 20.2693 14.8432 20.2693 16.0573 19.0552Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M27.466 13.4556C27.466 15.2027 27.1342 16.9059 26.4807 18.5186C26.1804 19.2581 25.818 19.9646 25.3956 20.6327L23.333 18.5708C24.1861 17.0211 24.64 15.2733 24.64 13.4556C24.64 10.6166 23.5342 7.94729 21.5268 5.93916C19.5187 3.93179 16.8494 2.82598 14.0103 2.82598C11.1713 2.82598 8.50198 3.93179 6.49385 5.93916C4.48648 7.94729 3.38066 10.6166 3.38066 13.4556C3.38066 15.1958 3.79688 16.8721 4.58094 18.3719L2.5083 20.4438C2.13585 19.8317 1.81179 19.189 1.53994 18.5186C0.886434 16.9059 0.554688 15.2027 0.554688 13.4556C0.554688 11.7086 0.886434 10.0053 1.53994 8.39269C2.21725 6.72321 3.21172 5.22498 4.49569 3.94101C5.77967 2.65703 7.2779 1.66256 8.94737 0.985252C10.56 0.331745 12.2633 0 14.0103 0C15.7574 0 17.4606 0.331745 19.0733 0.985252C20.7428 1.66256 22.241 2.65703 23.525 3.94101C24.8089 5.22498 25.8034 6.72321 26.4807 8.39269C27.1342 10.0053 27.466 11.7086 27.466 13.4556Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M14.013 32.4504L13.9961 32.4673L14.013 32.4842L14.0298 32.4673L14.013 32.4504Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M27.466 47.5174C27.466 49.2644 27.1342 50.9677 26.4807 52.5804C25.8034 54.2498 24.8089 55.7481 23.525 57.032C22.241 58.316 20.7428 59.3105 19.0733 59.9878C17.4606 60.6413 15.7574 60.973 14.0103 60.973C12.2633 60.973 10.56 60.6413 8.94737 59.9878C7.2779 59.3105 5.77967 58.316 4.49569 57.032C3.21172 55.7481 2.21725 54.2498 1.53994 52.5804C0.886434 50.9677 0.554688 49.2644 0.554688 47.5174C0.554688 45.7704 0.886434 44.0671 1.53994 42.4545C1.8425 41.7088 2.20804 40.9985 2.63424 40.325L4.6846 42.3754C3.83374 43.9235 3.38066 45.6698 3.38066 47.4852C3.38066 50.325 4.48648 52.9943 6.49385 55.0016C8.50198 57.009 11.1713 58.1148 14.0103 58.1148C16.8494 58.1148 19.5187 57.009 21.5268 55.0016C23.5342 52.9943 24.64 50.325 24.64 47.4852C24.64 45.593 24.1485 43.7761 23.2262 42.1795L25.2666 40.1392C25.7443 40.8672 26.1505 41.6405 26.4807 42.4545C27.1342 44.0671 27.466 45.7704 27.466 47.5174V47.5174Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            {/* Logo client */}
                            <div className="w-full flex justify-center">
                                {logo}
                            </div>
                            {/* Logo Ex Nihilo */}
                            <div className="w-full flex justify-start content-end">
                                <svg
                                    className="w-[10%]"
                                    viewBox="0 0 28 61"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.48541 34.0159L4.49756 38.0038C3.78646 38.7149 3.16521 39.4913 2.63611 40.326L0.910571 38.6005C-0.303524 37.3864 -0.303524 35.4174 0.910571 34.2033L2.5931 32.5208C3.8072 31.3067 3.8072 29.3377 2.5931 28.1236L0.910571 26.4419C-0.303524 25.227 -0.303524 23.258 0.910571 22.0439L2.51016 20.4443C3.06538 21.3574 3.72887 22.2029 4.49756 22.9708L12.014 30.4873L8.48541 34.0159V34.0159Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M23.2291 42.1795L22.1387 43.27C20.9246 44.484 18.9556 44.484 17.7415 43.27L16.059 41.5874C14.8449 40.3733 12.8759 40.3733 11.6618 41.5874L9.97929 43.27C8.7652 44.484 6.79623 44.484 5.58214 43.27L4.6875 42.3753C5.16746 41.503 5.77335 40.6928 6.49674 39.9686L10.4685 35.9969L13.9971 32.4683L14.0132 32.4521L14.0293 32.4683L17.4052 35.8441L21.5297 39.9686C22.1993 40.6383 22.7676 41.3816 23.2291 42.1795V42.1795Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M23.3341 18.5712C22.8549 19.4421 22.2505 20.2499 21.5279 20.9725L14.0114 28.489L6.49494 20.9725C5.7178 20.1954 5.07658 19.3192 4.58203 18.3723L5.58034 17.374C6.79443 16.1592 8.7634 16.1592 9.97749 17.374L11.66 19.0558C12.8741 20.2699 14.8431 20.2699 16.0572 19.0558L17.7397 17.374C18.9538 16.1592 20.9228 16.1592 22.1369 17.374L23.3341 18.5712Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M26.8096 34.2024C28.0237 35.4165 28.0237 37.3854 26.8096 38.5995L25.2699 40.1392C24.7676 39.3751 24.1863 38.661 23.5282 38.0029L19.3875 33.8622L16.0117 30.4864L23.5282 22.9699C24.2431 22.255 24.8682 21.4732 25.3989 20.6323L26.8096 22.043C28.0237 23.2571 28.0237 25.2261 26.8096 26.4409L25.127 28.1227C23.9129 29.3368 23.9129 31.3058 25.127 32.5198L26.8096 34.2024V34.2024Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M16.0573 41.5882C14.8432 40.3741 12.8743 40.3741 11.6602 41.5882L13.8587 39.3896L16.0573 41.5882Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M16.0573 19.0552L13.8587 21.2538L11.6602 19.0552C12.8743 20.2693 14.8432 20.2693 16.0573 19.0552Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M27.466 13.4556C27.466 15.2027 27.1342 16.9059 26.4807 18.5186C26.1804 19.2581 25.818 19.9646 25.3956 20.6327L23.333 18.5708C24.1861 17.0211 24.64 15.2733 24.64 13.4556C24.64 10.6166 23.5342 7.94729 21.5268 5.93916C19.5187 3.93179 16.8494 2.82598 14.0103 2.82598C11.1713 2.82598 8.50198 3.93179 6.49385 5.93916C4.48648 7.94729 3.38066 10.6166 3.38066 13.4556C3.38066 15.1958 3.79688 16.8721 4.58094 18.3719L2.5083 20.4438C2.13585 19.8317 1.81179 19.189 1.53994 18.5186C0.886434 16.9059 0.554688 15.2027 0.554688 13.4556C0.554688 11.7086 0.886434 10.0053 1.53994 8.39269C2.21725 6.72321 3.21172 5.22498 4.49569 3.94101C5.77967 2.65703 7.2779 1.66256 8.94737 0.985252C10.56 0.331745 12.2633 0 14.0103 0C15.7574 0 17.4606 0.331745 19.0733 0.985252C20.7428 1.66256 22.241 2.65703 23.525 3.94101C24.8089 5.22498 25.8034 6.72321 26.4807 8.39269C27.1342 10.0053 27.466 11.7086 27.466 13.4556Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M14.013 32.4504L13.9961 32.4673L14.013 32.4842L14.0298 32.4673L14.013 32.4504Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M27.466 47.5174C27.466 49.2644 27.1342 50.9677 26.4807 52.5804C25.8034 54.2498 24.8089 55.7481 23.525 57.032C22.241 58.316 20.7428 59.3105 19.0733 59.9878C17.4606 60.6413 15.7574 60.973 14.0103 60.973C12.2633 60.973 10.56 60.6413 8.94737 59.9878C7.2779 59.3105 5.77967 58.316 4.49569 57.032C3.21172 55.7481 2.21725 54.2498 1.53994 52.5804C0.886434 50.9677 0.554688 49.2644 0.554688 47.5174C0.554688 45.7704 0.886434 44.0671 1.53994 42.4545C1.8425 41.7088 2.20804 40.9985 2.63424 40.325L4.6846 42.3754C3.83374 43.9235 3.38066 45.6698 3.38066 47.4852C3.38066 50.325 4.48648 52.9943 6.49385 55.0016C8.50198 57.009 11.1713 58.1148 14.0103 58.1148C16.8494 58.1148 19.5187 57.009 21.5268 55.0016C23.5342 52.9943 24.64 50.325 24.64 47.4852C24.64 45.593 24.1485 43.7761 23.2262 42.1795L25.2666 40.1392C25.7443 40.8672 26.1505 41.6405 26.4807 42.4545C27.1342 44.0671 27.466 45.7704 27.466 47.5174V47.5174Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contenu du côté arrière de la carte */}
                <div
                    className={`flex justify-center ${styleSize} ${bgColor} rounded-2xl relative perspective-1000`}
                    onClick={handleClick}
                >
                    <div
                        className={`${stylePaddingImg} flex justify-center items-center card w-full h-full absolute transition-transform duration-500 transform-style-preserve-3d`}
                    >
                        <div className=" w-full rounded-3xl relative">
                            <img src={imgVerso} alt={alt} />
                            <div className="absolute bottom-0 z-10 flex flex-col items-end gap-2 lg:gap-4 w-full p-2 sm:p-4">
                                {tags.map((tag) => {
                                    return (
                                        <div className={`max-w-full`}>
                                            <h1
                                                key={tag}
                                                className={`${bgColor} truncate font-Miju text-xs md:text-md lg:text-xl text-white px-2 py-1 rounded-lg `}
                                            >
                                                {tag}
                                            </h1>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </motion.div>
    );
};

export default Card;
