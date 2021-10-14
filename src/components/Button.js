import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles['location-button']}>
            {props.location ? props.location : "All locations"}
            </button>
    )
}

export default Button;