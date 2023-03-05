import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/additionalCSS.css";
import { ThemeProvider } from "next-themes";

import Navbar from "@/components/Navbar";
import Header from "@/config";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Layout> */}
      <Header />
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </Layout> */}
    </>
  );
};
export default App;
