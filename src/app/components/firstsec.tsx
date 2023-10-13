import styles from "../styles/firstsec.module.css";
import Logo from "./logo";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";
const Firstsec = () => {
  return (
    <section className={styles.sec}>
      <section className={styles.sec2}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </section>
      <div className={styles.gobackdiv}>
        <Link href="/" className={styles.goback}>
          <Image
            src="/arrowleft.png"
            alt="go back img"
            width={20}
            height={20}
          ></Image>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default Firstsec;
