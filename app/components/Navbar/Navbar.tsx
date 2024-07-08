import Image from "next/image";

import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h6 className={styles.logo}>Brandname</h6>

      <div className={styles.rightSide}>
        <div className={styles.linksContainer}>
          <Link href="#home" className={styles.link}>
            Home
          </Link>
          <Link href="#product" className={styles.link}>
            Product
          </Link>
          <Link href="#pricing" className={styles.link}>
            Pricing
          </Link>
          <Link href="#contact" className={styles.link}>
            Contact
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link href="#">
            <button className={styles.login}>Login</button>
          </Link>
          <Link href="#">
            <button className={styles.joinUs}>
              Join Us
              <Image
                src="/assets/arrow-right-svgrepo-com.svg"
                alt="arrow-right"
                height={18}
                width={18}
              />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
