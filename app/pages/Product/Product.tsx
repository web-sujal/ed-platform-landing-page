import Link from "next/link";
import Image from "next/image";

import styles from "./Product.module.css";
import ActionButton from "@/app/components/ActionButton/ActionButton";

const Product = () => {
  return (
    <section id="product" className={styles.container}>
      {/* left*/}
      <div className={styles.leftContainer}>
        <div className={styles.dash} />
        <h2 className={styles.title}>Approdable Packages</h2>
        <p className={styles.desc}>
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: <br />
          Newtonian mechanics
        </p>

        <Link href="#" className={styles.link}>
          Learn More
          <Image
            src="/assets/angle-right-svgrepo-com.svg"
            alt="angle-right-icon"
            className={styles.rightIcon}
            height={40}
            width={40}
          />
        </Link>
      </div>

      {/* right */}
      <div className={styles.rightContainer}>
        <div className={styles.cardWrapper}>
          <ActionButton
            icon={
              <Image
                src="/assets/012-blackboards.svg"
                alt="blackboards-icon"
                height={35}
                width={35}
              />
            }
            padding="22px 19px"
            borderRadius="10px"
          />

          <h5 className={styles.cardTitle}>Certified Teacher</h5>

          <div className={styles.cardDash} />

          <p className={styles.cardDesc}>
            The gradual accumulation of information about
          </p>
        </div>

        <div className={styles.cardWrapper}>
          <ActionButton
            icon={
              <Image
                src="/assets/013-telescope-1.svg"
                alt="blackboards-icon"
                height={35}
                width={35}
              />
            }
            padding="22px 19px"
            borderRadius="10px"
          />

          <h5 className={styles.cardTitle}>Expert Instruction</h5>

          <div className={styles.cardDash} />

          <p className={styles.cardDesc}>
            The gradual accumulation of information about
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
