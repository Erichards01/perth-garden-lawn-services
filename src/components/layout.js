import * as React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../components/layout.module.css";

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <StaticImage
          className={styles.headerImage}
          src="../images/wood1.jpeg"
          alt=""
        />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>{" "}
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>{pageHeading}</h1>
      {children}
    </main>
  );
};

export default Layout;
