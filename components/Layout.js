import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
