import React from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import i18n from "i18next";
import {newsData} from "../../../../utils/news";
import s from "./KarateDay.module.scss";

const KarateDay = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {karateDay: newsItem} = newsData;

    const paragraphs1 = newsItem.text[currentLanguage]
        ? newsItem.text[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.textItem}>
                {paragraph}
            </div>
        ))
        : null;

    return (
        <div className={s.content}>
            <div className={s.head}>
                <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
            </div>
            <h4 className={s.title}>{t(`newsItem.title.${currentLanguage}`, newsItem.title[currentLanguage])}</h4>
            <Image src={newsItem.images[0]} className={s.img}/>
            <div>
                {paragraphs1}
            </div>
        </div>
    );
};

export default KarateDay;

