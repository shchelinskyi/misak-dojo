import React, {useState} from 'react';
import s from "./ReadMoreItem.module.scss";
import {Image} from "react-bootstrap";
import plus from "../../assets/images/readMore/plus.svg";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import ReadMoreModalItem from "../ReadMoreModalItem";

const ReadMoreItem = ({item, children}) => {

    const [isModalOpened, setIsModalOpened] = useState(false);
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const handleOpen = () => {
        document.body.style.overflowY = 'hidden';
        setIsModalOpened(true);
    }

    const handleClose = () => {
        document.body.style.overflowY = 'auto';
        setIsModalOpened(false);
    }

    return (
        <>
            <div key={item.title} className={s.link} onClick={handleOpen}>
                <div className={s.linkTitle}>{t(`title.${currentLanguage}`, item.title[currentLanguage])}</div>
                <Image className={s.iconPlus} src={plus}/>
            </div>
            {isModalOpened && <ReadMoreModalItem onClose={handleClose}>
                {children}
            </ReadMoreModalItem>}
        </>
    );
};

export default ReadMoreItem;
