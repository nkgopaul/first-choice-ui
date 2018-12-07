import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/fc.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
    <img className={styles.logo} src={logo} alt="¯\_(ツ)_/¯" height="60" width="60"/>
      <span className={styles.textHeader}><b>FirstChoice</b></span>
    </div>
  );
}

export default Navbar;