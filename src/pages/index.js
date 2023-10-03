import { Rajdhani } from "next/font/google";
import Head from "next/head";

const inter = Rajdhani({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Home</title>
      </Head>
      Show list movies
    </main>
  );
}
