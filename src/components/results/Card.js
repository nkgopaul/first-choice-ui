import React from 'react';
import styles from './Card.module.css';

export default class Card extends React.PureComponent {
    truncateText(s) {
        if(s.length >= 200) {
            return `${s.substring(0, 197)}...`; 
        }
        return s;
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerText}><b>{this.props.header}</b></div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentText}>{this.truncateText(this.props.content)}</div>
                </div>
                {
                    this.props.url &&
                    <div className={styles.urlContainer}>
                        <a href={this.props.url} rel="noopener noreferrer" target="_blank">
                            <div>Click here for more info.</div>
                        </a>
                    </div>
                }
            </div>
        );
    }
}