import Accordion from "@/components/UI/Accordion";
import Title from "@/components/UI/Title";

const Faq = () => {
    return (
        <section id="faq" className={` snap-start  w-full `}>
            <div className=" relative px-8  max-w-5xl mx-auto flex flex-col gap-8 items-center sm:items-start justify-start  ">
                {/* Title */}
                <Title title={"FAQ"} />
                {/* Divider */}
                <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

                <Accordion />
            </div>
        </section>
    );
};

export default Faq;
