import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar/Navbar";
import styles from "./Hero.module.css";
import ActionButton from "@/app/components/ActionButton/ActionButton";

const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <Navbar />

      <div className={styles.heroContainer}>
        {/* text */}
        <div className={styles.textContainer}>
          <div className={styles.wrapper}>
            <h5 className={styles.welcome}>Welcome</h5>
            <h1 className={styles.title}>
              Best Learning <br />
              Opportunities
            </h1>
            <h4 className={styles.desc}>
              Our goal is to make online <br />
              education work for everyone
            </h4>

            <div className={styles.cta}>
              <ActionButton label="Join Us" padding="15px 40px" />
              <Link href="#">
                <button className={styles.learnMore}>Learn More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* image */}
        <div className={styles.imgContainer}>
          <Image src="/assets/hero-cover-1.png" alt="hero-img" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
