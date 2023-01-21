import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/additionalCSS.css";
import { AppProps } from "next/app";

import Navbar from "@/components/Navbar";
import Header from "@/config";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      {/* <Header /> */}
      <Navbar />

      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
