import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface Props {
  styleTags: any;
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: { renderPage: (props: any) => void }) {
    const sheet = new ServerStyleSheet();
    const page: any = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
