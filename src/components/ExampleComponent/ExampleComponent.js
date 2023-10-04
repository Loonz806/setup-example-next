import React from "react";
import styles from "./ExampleComponent.module.scss";

const ExampleComponent = () => {
  return (
    <div className={styles.exampleComponentContainer}>
      <h1 className={styles.error}>I am an example component</h1>
    </div>
  );
};

export default ExampleComponent;
