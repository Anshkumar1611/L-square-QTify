import React from "react";
import Button from "../common/Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";

const Navbar = ({ data }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search data={data} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
