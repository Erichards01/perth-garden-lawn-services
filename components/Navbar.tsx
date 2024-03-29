import React from "react";

import Image from "next/image";
import headerImage from "../public/wood1.jpeg";
import facebook from "../public/facebook.png";
import logo from "../public/LogoComplete.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <nav>
        <Image
          src={logo}
          alt="lawn mowing logo"
          placeholder="blur"
          className="logo"
        />{" "}
        <a
          href="https://www.facebook.com/Perthgardenandlawn"
          className="aFacebook"
        >
          <Image src={facebook} alt="facebook" className="Facebook" />
        </a>
        <Image
          src={headerImage}
          alt=" dark vertical timber panels"
          placeholder="blur"
          className="headerImage"
        />
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
    </div>
  );
}
