import React from 'react';
import s from "./ReadMoreModalItem.module.scss";

const ReadMoreModalItem = ({children, onClose}) => {
    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.contentWrapper}>
                <span className={s.closeBtn} onClick={onClose}>&times;</span>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ReadMoreModalItem;
