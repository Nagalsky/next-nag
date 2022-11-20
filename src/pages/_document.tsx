import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="text-base antialiased bg-slate-700 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
