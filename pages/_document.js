import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "Andrew Tite's Next.js blog";
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name={"description"} content={"Andrew Tite's Next.js blog"} />
        <meta name={"og:title"} content={"Andrew Tite's Next.js blog"} />
        <meta name={"twitter:card"} content={"summary_large_image"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
