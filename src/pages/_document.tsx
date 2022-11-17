import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="text-base antialiased dark:bg-body-gradient dark:text-semi-white bg-semi-white text-dark-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
