import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={inter.className}>
      <Head>
        <title>Perth Garden and Lawn Services</title>
        <meta name="description" content="Perth Garden and Lawn Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
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
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
