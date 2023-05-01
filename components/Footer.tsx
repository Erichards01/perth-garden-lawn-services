import footerImage from "../public/LawnFooter.jpg";
import React from "react";
import Image from "next/image";
import logo from "../public/LogoComplete.jpg";

export default function Footer() {
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
      </footer>
    </div>
  );
}
