//import data
import { qui_sommes_nous, que_faisons_nous } from "@/data/section";

// Import Sections
import Hero from "@/components/Sections/Hero";
import Divider from "@/components/UI/Divider";
import Valeurs from "@/components/Sections/Valeurs";
import Footer from "@/components/Sections/Footer";
import Faq from "@/components/Sections/Faq";
import Team from "@/components/Sections/Team";

import Cards from "@/components/Sections/Cards";
import Contact from "@/components/Sections/Contact";

const Home = () => {
    return (
        <div
            id="main_container"
            className="relative pt-[84px] flex flex-col justify-center"
        >
            <Hero />
            {/* QUI SOMMES NOUS */}
            <section
                id="qui_sommes_nous"
                className=" min-h-screen m-auto flex justify-center items-center"
            >
                <section className="h-full py-32 max-w-5xl w-full flex gap-8 md:flex-row flex-col px-4 sm:px-8">
                    <video
                        className="bg-gray-200 rounded-2xl md:max-w-[400px] flex-grow object-cover"
                        src={`/static/video/${qui_sommes_nous.video}`}
                        type="video/mp4"
                        autoPlay
                        muted
                        playsinline
                        loop
                    >
                        Your browser can't play this kind of video, sorry.
                    </video>
                    <section className="flex flex-col gap-8 flex-grow  h-full ">
                        <h1 className="font-Miju text-3xl text-ex_light_yellow">
                            {qui_sommes_nous.title}
                        </h1>
                        <h2 className="font-extrabold text-3xl text-ex_light_purple">
                            {qui_sommes_nous.subtitle}
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{ __html: qui_sommes_nous.description }}
                            className="font-medium text-lg text-ex_light_purple">
                        </p>
                    </section>
                </section>
            </section>
            {/* QUE FAISONS NOUS */}
            <section
                id="que_faisons_nous"
                className=" min-h-screen m-auto flex justify-center items-center"
            >
                <section className="h-full py-32 max-w-5xl w-full flex gap-8 md:flex-row-reverse flex-col px-4 sm:px-8">
                    <video
                        className="bg-gray-200 rounded-2xl md:max-w-[400px] flex-grow object-cover"
                        src={`/static/video/${que_faisons_nous.video}`}
                        type="video/mp4"
                        autoPlay
                        muted
                        playsinline
                        loop
                    >
                        Your browser can't play this kind of video, sorry.
                    </video>
                    <section className="flex flex-col gap-8 flex-grow  h-full ">
                        <h1 className="font-Miju text-3xl text-ex_light_yellow">
                            {que_faisons_nous.title}
                        </h1>
                        <h2 className="font-extrabold text-3xl text-ex_light_purple">
                            {que_faisons_nous.subtitle}
                        </h2>
                        <p className="font-medium text-lg text-ex_light_purple">
                            {que_faisons_nous.description}
                        </p>
                    </section>
                </section>
            </section>
            <Valeurs />
            <Divider />
            <Cards />
            <Team />
            <Contact />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;
