import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* top */}
      <div className={styles.topContainer}>
        <div className={styles.wrapper}>
          <div className={styles.colLinks}>
            {/* Company Info */}
            <div className={styles.linksContainer}>
              <h5 className={styles.linkHeading}>Company Info</h5>

              <div className={styles.linksWrapper}>
                <Link href="#" className={styles.link}>
                  About Us
                </Link>
                <Link href="#" className={styles.link}>
                  Carrier
                </Link>
                <Link href="#" className={styles.link}>
                  We are hiring
                </Link>
                <Link href="#" className={styles.link}>
                  Blog
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div className={styles.linksContainer}>
              <h5 className={styles.linkHeading}>Legal</h5>

              <div className={styles.linksWrapper}>
                <Link href="#" className={styles.link}>
                  About Us
                </Link>
                <Link href="#" className={styles.link}>
                  Carrier
                </Link>
                <Link href="#" className={styles.link}>
                  We are hiring
                </Link>
                <Link href="#" className={styles.link}>
                  Blog
                </Link>
              </div>
            </div>

            {/* features */}
            <div className={styles.linksContainer}>
              <h5 className={styles.linkHeading}>Features</h5>

              <div className={styles.linksWrapper}>
                <Link href="#" className={styles.link}>
                  Business Marketing
                </Link>
                <Link href="#" className={styles.link}>
                  User Analytic
                </Link>
                <Link href="#" className={styles.link}>
                  Live Chat
                </Link>
                <Link href="#" className={styles.link}>
                  Unlimited Support
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.colLinks}>
            {/* Resources */}
            <div className={styles.linksContainer}>
              <h5 className={styles.linkHeading}>Resources</h5>

              <div className={styles.linksWrapper}>
                <Link href="#" className={styles.link}>
                  IOS & Android
                </Link>
                <Link href="#" className={styles.link}>
                  Watch a Demo
                </Link>
                <Link href="#" className={styles.link}>
                  Customers
                </Link>
                <Link href="#" className={styles.link}>
                  API
                </Link>
              </div>
            </div>

            {/* Get In Touch */}
            <div className={styles.linksContainer}>
              <h5 className={styles.linkHeading}>Get In Touch</h5>

              <div className={styles.linksWrapper}>
                <Link href="#" className={styles.linkIconContainer}>
                  <Image
                    src="/assets/contact.svg"
                    alt="phone-icon"
                    className={styles.icon}
                    height={24}
                    width={24}
                  />
                  <p className={styles.link}>{"(480) 555-0103"}</p>
                </Link>

                <Link href="#" className={styles.linkIconContainer}>
                  <Image
                    src="/assets/location.svg"
                    alt="location-icon"
                    className={styles.icon}
                    height={24}
                    width={24}
                  />
                  <p className={styles.link}>
                    4517 Washington Ave. Manchester, <br />
                    Kentucky 39495
                  </p>
                </Link>

                <Link href="#" className={styles.linkIconContainer}>
                  <Image
                    src="/assets/email.svg"
                    alt="email-icon"
                    className={styles.icon}
                    height={24}
                    width={24}
                  />
                  <p className={styles.link}>debra.holt@example.com</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className={styles.copyrightContainer}>
        <div className={styles.crText}>
          Made With Love By Figmaland All Right Reserved
        </div>

        <div className={styles.icons}>
          <Image
            src="/assets/facebook.svg"
            alt="facebook-icon"
            className={styles.icon}
            height={24}
            width={24}
          />

          <Image
            src="/assets/instagram.svg"
            alt="instagram-icon"
            className={styles.icon}
            height={24}
            width={24}
          />

          <Image
            src="/assets/twitter.svg"
            alt="twitter-icon"
            className={styles.icon}
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
