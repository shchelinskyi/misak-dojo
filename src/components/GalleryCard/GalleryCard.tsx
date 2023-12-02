import React, {FC, useState} from 'react';
import {Image} from "react-bootstrap";
import s from "./GalleryCard.module.scss";
import news1 from "../../assets/images/news1.png"
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import ReadMoreModalItem from "../ReadMoreModalItem";
import GalleryCardModal from "./GalleryCardModal";

interface GalleryCardTypes {
    newsItem: {
        url: string;
        date: string;
        title: any;
    }
}

const GalleryCard: FC<GalleryCardTypes> = ({galleryItem}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const handleOpen = () => {
        document.body.style.overflowY = 'hidden';
        setIsModalOpened(true);
    }

    const handleClose = () => {
        document.body.style.overflowY = 'scroll';
        setIsModalOpened(false);
    }

    return (
        <>
        <div className={s.card} onClick={handleOpen}>
            <Image className={s.newsImg} src={galleryItem.images[0]}/>
            <p className={s.newsDate}>{galleryItem.date}</p>
            <h6 className={s.newsTitle}>{t(`title.${currentLanguage}`, galleryItem.title[currentLanguage])}</h6>
        </div>
            {isModalOpened && <GalleryCardModal images={galleryItem.images} onClose={handleClose}/>}
        </>

    );
};

export default GalleryCard;
