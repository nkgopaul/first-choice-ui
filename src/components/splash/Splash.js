import React from 'react';
import styles from './splash.module.css';
import logo from '../../assets/fc.png';


const Splash = ({ disableSplash }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>First Choice</div>
            <img className={styles.logo} src={logo} alt="¯\_(ツ)_/¯" height="300" width="300"/>
            <div>Welcome to <b>First Choice</b>, your first choice for homelessness and poverty resources in the City of Evanston.</div>
            <div>Please answer the follow questions to the best of your abilities.</div>
            <div>The more information you provide, the better resources we can point you to.</div>
            <button className={styles.enterButton} onClick={disableSplash}>Enter</button>
        </div>
    );
}

export default Splash;
