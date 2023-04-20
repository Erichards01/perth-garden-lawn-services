import styles from "../styles/Home.module.css";
import Image from "next/image";
import heroImg from "../public/Lawn3.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>
        <h1 className={styles.content} id={styles.heroHeader}>
          Perth Garden and Lawn Services
        </h1>{" "}
        <Image
          src={heroImg}
          alt="lawn photograph"
          className={styles.backgroundImage}
          placeholder="blur"
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
