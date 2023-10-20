import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout"
import localFont from "next/font/local";

const gordita = localFont({
    src: [
        {
            path: './fonts/Gordita-Font/Gordita-Regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-gordita',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={`${gordita.variable} font-gordita`}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </div>
  )
}
