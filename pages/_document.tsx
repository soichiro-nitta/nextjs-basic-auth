import Document, { Head, Html, Main, NextScript } from 'next/document'

class _Document extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&family=Syne:wght@500;700&family=Inter:wght@500;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document
