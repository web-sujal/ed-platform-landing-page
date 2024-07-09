import CarouselComp from "@/app/components/CarouselComp/CarouselComp";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section id="pricing" className={styles.container}>
      {/* top */}
      <div className={styles.textContainer}>
        <h6 className={styles.team}>Team</h6>
        <h3 className={styles.title}>Get Quality Education</h3>
        <p className={styles.desc}>
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* bottom */}
      <div className={styles.carouselContainer}>
        <CarouselComp />
      </div>
    </section>
  );
};

export default Pricing;
