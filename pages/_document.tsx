import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlRr7_YdbvPRNmTLHfMNmFRzALK-NIZZU"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
