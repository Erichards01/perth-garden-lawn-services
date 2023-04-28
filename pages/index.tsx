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
      <p className={styles.indexContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        sollicitudin ligula mi, vitae interdum augue aliquet ac. Etiam pulvinar
        eget nulla eget aliquet. Ut accumsan massa non augue congue, ut rhoncus
        velit lacinia. Sed id blandit nisi. Aenean in nulla urna. Etiam
        accumsan, diam vitae luctus tincidunt, erat arcu tristique lacus, et
        consectetur arcu nulla sit amet tellus. Integer scelerisque tellus eget
        magna faucibus, eu dictum dui vehicula. Suspendisse vitae feugiat odio,
        vitae tempus turpis. Aenean ante metus, semper a lorem non, ultricies
        viverra odio. Nulla sed lobortis lacus. Aliquam interdum sodales
        venenatis. Etiam condimentum diam et dictum rhoncus. Donec nec mauris
        magna. Curabitur bibendum justo arcu, ac dignissim lacus tincidunt sit
        amet. Praesent viverra euismod lectus, suscipit iaculis sapien cursus
        eu. Quisque vel enim sit amet purus semper ornare. Nunc commodo feugiat
        diam, nec condimentum lectus tincidunt nec. Curabitur gravida dictum
        velit ut fringilla. Ut malesuada massa dolor, eget laoreet neque
        bibendum eget. Morbi ut tempus enim, vel lobortis lorem. Aliquam gravida
        laoreet pharetra. Sed auctor mi sit amet orci vulputate, ac placerat
        ipsum porta. Cras rutrum finibus condimentum. Nullam feugiat id arcu et
        luctus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Morbi id ligula est. Mauris vel
        suscipit eros, eu dignissim augue. Suspendisse volutpat libero a pretium
        malesuada. Pellentesque semper diam ut orci congue rutrum. Maecenas nec
        laoreet sapien. Aliquam vulputate pharetra magna, ut vestibulum ante
        sollicitudin quis. Nullam iaculis non massa vel facilisis. Praesent nec
        sem venenatis, malesuada lacus vitae, vulputate libero. Donec finibus
        sed sapien sed sodales. Morbi lobortis, eros in viverra tempus, purus
        magna congue quam, non lobortis mi quam vitae ante. Donec sit amet
        feugiat ipsum, nec rutrum eros. Nam tristique dolor eu nulla efficitur,
        et lobortis libero hendrerit. Quisque eu ante sollicitudin lacus iaculis
        rutrum. Vivamus quam sem, tempor id porta scelerisque, semper sodales
        mi. Nullam at arcu mauris. Donec commodo sapien id maximus dapibus. Sed
        euismod fringilla dui, vitae sollicitudin purus iaculis nec. Suspendisse
        lobortis elit a ornare rutrum. Proin vel laoreet nisl. Donec ornare
        luctus velit eu pellentesque. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Maecenas luctus
        sodales pharetra. In ligula arcu, fringilla ac vulputate quis, pulvinar
        sit amet dolor. Pellentesque in nisl magna. Etiam fermentum mattis odio,
        nec malesuada massa lacinia sed. Sed egestas pellentesque tempus. Ut
        fermentum urna arcu. Integer vel urna mollis, pharetra dui nec,
        fermentum dui.
      </p>
    </>
  );
}
