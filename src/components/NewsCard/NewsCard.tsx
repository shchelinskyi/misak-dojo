import React, {FC, useState} from 'react';
import {Image} from "react-bootstrap";
import s from "./NewsCard.module.scss";
import news1 from "../../assets/images/news1.png"
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import GalleryCardModal from "../GalleryCard/GalleryCardModal";
import NewsModal from "./NewsModal";

// interface NewsCardTypes {
//     newsItem: {
//         url: string;
//         date: string;
//         title: any;
//     }
// }

const NewsCard = ({children, newsItem}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { t } = useTranslation();
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
        <div className={s.card} onClick={handleOpen}>
            <Image className={s.newsImg} src={newsItem.images[0]}/>
            <p className={s.newsDate}>{newsItem.date}</p>
            <h6 className={s.newsTitle}>{t(`title.${currentLanguage}`, newsItem.title[currentLanguage])}</h6>
        </div>
            {isModalOpened && <NewsModal onClose={handleClose}>
                {children}
            </NewsModal>}
        </>
    );
};

export default NewsCard;
