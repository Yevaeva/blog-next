import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property='og:type' content='website' />
          <meta name='twitter:type' content='website' />
          <meta property='og:image:width' content='400' />
          <meta property='og:image:height' content='400' />
          <meta property='twitter:image:width' content='400' />
          <meta property='twitter:image:height' content='400' />
          <meta name='twitter:url' content='<%= frontendOrigin %>' />
          <meta property='og:url' content='<%= frontendOrigin %>' />
          <meta property='og:site_name' content='Service Club' />
          <meta name='twitter:site_name' content='Service Club' />
          <meta property='og:type' content='recruitment' />
          <meta name='twitter:type' content='recruitment' />
          <meta property='og:image' content='https://ibb.co/09SBW04' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:image' content='https://ibb.co/09SBW04' />
          <meta name='twitter:title' content='<%= ogTitle %>' />
          <meta property='og:title' content='<%= ogTitle %>' />

          <meta property='og:type' content='website' />
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

export default MyDocument;
