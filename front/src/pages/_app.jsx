import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/additionalCSS.css";

import localFont from "next/font/local";
const miju = localFont({
    src: "./fonts/Miju/Miju.otf",
    variable: "--font-miju",
});

import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

import Navbar from "@/components/Navbar";
import Header from "@/config";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
    return (
        <>
            {/* <Layout> */}
            <Header />
            <Navbar />
            <main
                className={`${poppins.variable} ${miju.variable} font-Poppins dark`}
            >
                <Component {...pageProps} />
            </main>

            {/* <script src="/node_modules/flowbite/dist/flowbite.min.js"></script> */}
            {/* </Layout> */}
        </>
    );
};
export default App;
