import Form from "@/app/components/Form/Form";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.wrapper}>
        {/* text */}
        <div className={styles.textConatiner}>
          <h6 className={styles.subHeading}>Newsletter</h6>
          <h3 className={styles.heading}>Watch our Courses</h3>
          <p className={styles.paragraph}>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* input field */}

        <Form />
      </div>
    </section>
  );
};

export default Contact;
