"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";
import ActionButton from "../ActionButton/ActionButton";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "Product" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isBelowLargeScreens = useMediaQuery("(max-width: 1170px)");

  return (
    <nav className={styles.container}>
      <h6 className={styles.logo}>Brandname</h6>

      <div className={styles.rightSide}>
        {isBelowLargeScreens ? (
          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuToggled((prev) => !prev)}
          >
            <Image
              src="/assets/menu-icon.svg"
              alt="twitter-icon"
              height={24}
              width={24}
            />
          </button>
        ) : (
          <>
            <div className={styles.linksContainer}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
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
          </>
        )}
      </div>

      {/* MOBILE MENU MODAL */}
      {isBelowLargeScreens && isMenuToggled && (
        <div className={styles.mobileMenuModal}>
          {/* CLOSE ICON */}
          <button
            className={styles.closeBtn}
            onClick={() => setIsMenuToggled((prev) => !prev)}
          >
            <Image
              src="/assets/close-icon.svg"
              alt="twitter-icon"
              height={24}
              width={24}
            />
          </button>

          {/* MENU ITEMS */}
          <div className={styles.mobileLinksContainer}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}

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
      )}
    </nav>
  );
};

export default Navbar;
