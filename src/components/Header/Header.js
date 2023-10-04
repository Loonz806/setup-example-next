import React from "react";
import { navigationItems } from "../../utils/navigationItems";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <ul>
          {navigationItems?.map((item) => {
            const { name, id, path } = item;
            return (
              <li key={id}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
