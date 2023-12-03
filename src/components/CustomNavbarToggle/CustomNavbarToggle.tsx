import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './CustomNavbarToggle.module.scss';

const CustomNavbarToggle = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onClick && onClick();
    };

    return (
        <Button
            variant="outline-light"
            onClick={handleClick}
            className={`${styles.customToggle} ${isOpen ? styles.open : ''}`}
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </Button>
    );
};

export default CustomNavbarToggle;