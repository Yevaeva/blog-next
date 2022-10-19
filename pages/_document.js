import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property="og:title" content='TITLE OF YOUR WEBSITE'/>
<meta property='og:image' content='https://ibb.co/09SBW04' />
          <meta name='twitter:image' content='https://ibb.co/09SBW04' />
<meta property="og:description" content='DESCRIPTION OF YOUR SITE'/>
<meta property="og:url" content='https://blog-next-phi.vercel.app/'/>
<meta property='og:image:width' content='1200' />
<meta property='og:image:height' content='627' />

<meta property="og:type" content='website'/>
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
