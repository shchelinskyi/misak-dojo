import { useState } from 'react';
import { Button } from 'react-bootstrap';
import s from './CustomNavbarToggle.module.scss';


const CustomNavbarToggle  = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Button variant="outline-light" onClick={handleClick}
            className={`${s.customToggle} ${isOpen ? s.open : ''}`}
        >
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
        </Button>
    );
};

export default CustomNavbarToggle;