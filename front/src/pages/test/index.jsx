// Import Sections
import Lottie from "lottie-react";
import carre from "/public/static/lottie/Carré.json";

const Test = () => {
    return (
        <div id="main_container" className="relative pt-[84px]">
            <Lottie animationData={carre} loop={true} />
        </div>
    );
};

export default Test;
