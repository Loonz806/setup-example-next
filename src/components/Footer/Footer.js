import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={`${styles.footer} container`}>
      <p>Welcome to Setup Example Next | 2016 - {date}</p>
    </footer>
  );
};

export default Footer;
