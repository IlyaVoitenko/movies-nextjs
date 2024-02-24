import { Rajdhani } from "next/font/google";
import Head from "next/head";
const inter = Rajdhani({ subsets: ["latin"], weight: "300" });
import { getTvList } from "../api/tv";
import ListTV from "../../app/components/ListTV";

export const getStaticProps = async () => {
  try {
    const results = (await getTvList()) || null;
    return {
      props: {
        tvList: results,
      },
    };
  } catch (error) {
    console.log("error :", error);
  }
};
export default function Home({ tvList }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>TV</title>
      </Head>
      <h2>Popular TV</h2>
      <ListTV tvList={tvList} />
    </main>
  );
}
