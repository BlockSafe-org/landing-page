import Document, { Html, Head, Main, NextScript } from "next/document";
import Container from "../components/container";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <Container>
            <NextScript />
          </Container>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
