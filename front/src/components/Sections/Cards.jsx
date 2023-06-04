import { Parallax } from "react-scroll-parallax";
import Card from "../card/card";
import Title from "../UI/Title";
import Divider from "../UI/Divider";

import { cardContent } from "@/data/cards";

const Cards = () => {
    return (
        <section id="companies" className="min-h-screen flex flex-col gap-16">
            <div className="max-w-5xl px-8 m-auto my-0 flex w-full justify-center">
                <Title title={"Ils nous ont fait confiance"} center={true} />
            </div>
            <div className="flex  flex-wrap gap-4 justify-center">
                {cardContent.map((card, i) => {
                    return (
                        <Card
                            bgColor={card.bgColor}
                            imgVerso={card.imgVerso}
                            alt={card.alt}
                            tags={card.tags}
                            logo={card.logoClients}
                        />
                    );
                })}
            </div>
            <Divider />
        </section>
    );
};
export default Cards;
