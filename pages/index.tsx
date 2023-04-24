import styles from "../styles/Home.module.css";
import Image from "next/image";
import heroImg from "../public/Lawn3.jpg";
import logoMower from "../public/LogoMower.jpg";
import logoLeaf from "../public/LogoLeaf.jpg";
import logoBin from "../public/LogoBin.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Image
          src={logoMower}
          placeholder="blur"
          alt=""
          className={styles.content}
          style={{ height: "100px", width: "100px", marginRight: "20px" }}
        />
        <Image
          src={logoLeaf}
          placeholder="blur"
          alt=""
          className={styles.content}
          style={{ height: "100px", width: "100px", marginRight: "20px" }}
        />
        <Image
          src={logoBin}
          placeholder="blur"
          alt=""
          className={styles.content}
          style={{ height: "100px", width: "100px", marginRight: "20px" }}
        />
        <h1 className={styles.content} id={styles.heroHeader}>
          Perth Garden and Lawn Services
        </h1>{" "}
        <Image
          src={heroImg}
          placeholder="blur"
          alt="lawn photograph"
          className={styles.backgroundImage}
          style={{
            position: "absolute",
            margin: "0",
            padding: "0",
            outline: "0",
          }}
        />
      </div>
    </>
  );
}
