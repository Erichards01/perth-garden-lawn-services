import footerImage from "../public/LawnFooter.jpg";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer>
        <Image src={footerImage} alt="grass" className="footerImage" />
      </footer>
    </div>
  );
}
