import React from "react";
import styles from "./Main.module.scss";

const Main = ({ children }) => {
  return (
    <main
      id="content"
      data-testid="content"
      className={`${styles.main} container`}
    >
      {children}
    </main>
  );
};

export default Main;
