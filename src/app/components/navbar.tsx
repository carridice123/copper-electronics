import styles from "../styles/nav.module.css";
import Image from "next/image";
import Email from "./email";
import Link from "next/link";
const Navbar = () => {
  return (
    <section className={styles.navcontent}>
      <nav className={styles.navs}>
        <ul className={styles.navul}>
          <li className={styles.navlis}>Copper-electronics-Hardwares</li>
          <li className={styles.navhome}>Home</li>
          <li className={styles.mail}>
            <Email />
          </li>
          <li className={styles.phone}>
            <Image
              src="/phone2.png"
              alt="phone image"
              width={20}
              height={20}
              className={styles.phoneimg}
            ></Image>
            call us (876)454-9844
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
