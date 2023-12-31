import "../styles/globals.css";
import Layout from "../app/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
