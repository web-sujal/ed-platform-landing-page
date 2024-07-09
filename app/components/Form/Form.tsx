"use client";

import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "") {
      return setError("Email can't be blank.");
    }

    if (isValidEmail(email)) {
      // TODO: form submission logic goes here

      setError("");
    } else {
      return setError("Please enter a valid email address.");
    }
  };

  return (
    <div className={styles.container}>
      <form
        action="#"
        onSubmit={handleSubmit}
        className={styles.inputContainer}
      >
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
          placeholder="Your Email"
          className={styles.input}
          // required
        />
        <button type="submit" className={styles.subBtn}>
          Subscribe
        </button>
      </form>

      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
};

export default Form;
