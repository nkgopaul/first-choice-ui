import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/fc.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt=":D" height="125" width="125"/>
      <span className={styles.textHeader}>First Choice</span>
    </div>
  );
}

export default Navbar;