import Image from "next/image";

import Link from "next/link";
import styles from "./Navbar.module.css";
import ActionButton from "../ActionButton/ActionButton";

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
          <ActionButton
            label="Join Us"
            icon={
              <Image
                src="/assets/arrow-right-svgrepo-com.svg"
                alt="arrow-right"
                height={18}
                width={18}
              />
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
