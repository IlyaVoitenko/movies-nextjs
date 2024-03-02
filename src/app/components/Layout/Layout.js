import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Head />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
