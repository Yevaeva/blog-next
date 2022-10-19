import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property='og:image' content='https://ibb.co/09SBW04' />
          <meta name='twitter:image' content='https://ibb.co/09SBW04' />
          <body>
            <Main />
            <NextScript />
            <div id='notifications'></div>
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument
