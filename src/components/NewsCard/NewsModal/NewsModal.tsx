import React from 'react';
import s from "./NewsModal.module.scss";
import arrow from "../../../assets/images/news/arrow-back.svg";
import {Image} from "react-bootstrap";

const NewsModal = ({children, onClose}) => {
    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <Image src={arrow} className={s.icon} onClick={onClose}/>
                {children}
            </div>
        </div>
    );
};

export default NewsModal;
