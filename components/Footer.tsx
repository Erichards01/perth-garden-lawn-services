import footerImage from "../public/LawnFooter.jpg";
import React from "react";
import Image from "next/image";
import logo from "../public/LogoComplete.jpg";
import Link from "next/link";
import facebook from "../public/facebook.png";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div>
      <footer>
        <Image src={footerImage} alt="grass" className="footerImage" />
        <Image
          src={logo}
          alt="lawn mowing logo"
          placeholder="blur"
          className="logo"
        />
        <ul>
          <li className="foot">
            <Link
              className={router.pathname == "/" ? "footerActive" : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="foot">
            <Link
              className={router.pathname == "/about" ? "footerActive" : ""}
              href="/about"
            >
              About
            </Link>
          </li>{" "}
          <li className="foot">
            <Link
              className={router.pathname == "/services" ? "footerActive" : ""}
              href="/services"
            >
              Services
            </Link>
          </li>{" "}
          <li className="foot">
            <Link
              className={router.pathname == "/contact" ? "footerActive" : ""}
              href="/contact"
            >
              Contact
            </Link>
          </li>{" "}
          {/* <a
            href="https://www.facebook.com/Perthgardenandlawn"
            className="footerFacebook"
          >
            <Image src={facebook} alt="facebook" className="Facebook" />
          </a> */}
        </ul>
      </footer>
    </div>
  );
}
