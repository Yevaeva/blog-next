import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <Head>
        <title>
          Trymata | Digital Experience Insights, User Testing & Product
          Analytics
        </title>
        <meta
          name='description'
          content='Unleash your best digital experience with Trymata user testing and product analytics tools. See how users behave and think on your websites and apps.'
        />

        <meta property='og:url' content='https://trymata.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Trymata | Digital Experience Insights, User Testing & Product Analytics'
        />
        <meta
          property='og:description'
          content='Unleash your best digital experience with Trymata user testing and product analytics tools. See how users behave and think on your websites and apps.'
        />
        <meta property='og:image' content='https://ibb.co/09SBW04' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='trymata.com' />
        <meta property='twitter:url' content='https://trymata.com/' />
        <meta
          name='twitter:title'
          content='Trymata | Digital Experience Insights, User Testing & Product Analytics'
        />
        <meta
          name='twitter:description'
          content='Unleash your best digital experience with Trymata user testing and product analytics tools. See how users behave and think on your websites and apps.'
        />
        <meta name='twitter:image' content='https://ibb.co/09SBW04' />

      </Head>{' '}
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta property='og:image' content='https://ibb.co/09SBW04' />
          <meta name='twitter:image' content='https://ibb.co/09SBW04' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
