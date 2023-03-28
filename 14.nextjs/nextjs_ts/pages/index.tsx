import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>세현 NEXT.JS 공부</title>
        <meta name="description" content="오늘도 빡공부" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>/pages/index.tsx</h1>
        <ul>
          <li>
            <a href="/sub">/pages/sub/index.tsx</a>
          </li>
          <li>
            <a href="/sub/about">/pages/sub/about.tsx</a>
          </li>
          <li>
            <a href="/sub/1">/pages/sub/[id].tsx</a>
          </li>
          <li>
            <a href="/sub/2">/pages/sub/[id].tsx</a>
          </li>
          <li>
            <a href="/sub/fetch">/pages/sub/fetch.tsx</a>
          </li>
        </ul>
      </main>
    </>
  );
}
