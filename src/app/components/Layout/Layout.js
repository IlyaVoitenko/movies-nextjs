import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100&family=Rajdhani:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
