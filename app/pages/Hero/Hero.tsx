import Navbar from "@/app/components/Navbar/Navbar";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <Navbar />
    </section>
  );
};

export default Hero;
