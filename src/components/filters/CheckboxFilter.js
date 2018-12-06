import React, { Component } from 'react';
import styles from './CheckboxFilter.module.css'; 

export default class CheckboxFilter extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.question}>{this.props.question}</div>
                    {
                        this.props.options.map(e => 
                            <label key={e} className={styles.labelContainer}>
                                <input
                                    type='checkbox'
                                    name={e}
                                    onChange={() => {
                                        this.props.checkedOptions.indexOf(e) === -1 ?
                                        this.props.addFilter(this.props.filter, e) :
                                        this.props.removeFilter(this.props.filter, e)
                                    }}
                                    checked={this.props.checkedOptions.indexOf(e) === -1 ? false : true}
                                    className={styles.checkinput}
                                />
                                <span className={styles.labelText}>{e}</span>
                            </label>
                        )
                    }
                </div>
            </div>
        );
    }
}