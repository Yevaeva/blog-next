import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta property='og:image' content='https://ibb.co/09SBW04' />
        <meta name='twitter:image' content='https://ibb.co/09SBW04' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
