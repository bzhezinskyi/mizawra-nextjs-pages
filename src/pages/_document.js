import { Html, Head, Main, NextScript } from "next/document";

import { roboto_mono } from "../styles/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`container mx-auto ${roboto_mono.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
