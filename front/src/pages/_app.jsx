import "@/styles/globals.css";
import { AppProps } from "next/app";

import Header from "@/config";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      {/* <Header /> */}
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
