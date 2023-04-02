import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <body className=" bg-main_bg">
        <div className=" px-4 pt-1">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
