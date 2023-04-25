import "@/styles/globals.css";
import Image from "next/image";
import headerImage from "../public/wood1.jpeg";
import footerImage from "../public/LawnFooter.jpg";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  return (
    // <div className="container">
    //   <div className={inter.className}>
    <Layout>
      {" "}
      <Head>
        <title>Perth Garden and Lawn Services</title>
        <meta name="description" content="Perth Garden and Lawn Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <nav>
          <Image
            src={headerImage}
            alt=" dark vertical timber panels"
            placeholder="blur"
            className="headerImage"
          />{" "}
          <ul>
            <li>
              <Link className={router.pathname == "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/about" ? "active" : ""}
                href="/about"
              >
                About
              </Link>
            </li>{" "}
            <li>
              <Link
                className={router.pathname == "/services" ? "active" : ""}
                href="/services"
              >
                Services
              </Link>
            </li>{" "}
            <li>
              <Link
                className={router.pathname == "/contact" ? "active" : ""}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav> */}
      <Component {...pageProps} />
      {/* <footer>
          <Image src={footerImage} alt="grass" className="footerImage" />
        </footer> */}
    </Layout>
  );
}
