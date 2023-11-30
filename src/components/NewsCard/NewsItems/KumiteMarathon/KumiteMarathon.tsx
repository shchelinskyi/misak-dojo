import React from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import i18n from "i18next";
import {newsData} from "../../../../utils/news";
import s from "./KumiteMarathon.module.scss";

const KumiteMarathon = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {kumiteMarathon:newsItem} = newsData;
    return (
        <div className={s.content}>
            <div className={s.head}>
                <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
            </div>
            <h4 className={s.title}>{t(`newsItem.title.${currentLanguage}`, newsItem.title[currentLanguage])}</h4>
            <Image src={newsItem.images[0]} className={s.img}/>
            <p className={s.textItem}>
                {t(`newsItem.text1.${currentLanguage}`, newsItem.text1[currentLanguage])}
            </p>
            <Image src={newsItem.images[1]} className={s.img}/>
            <Image src={newsItem.images[2]} className={s.img}/>
            <Image src={newsItem.images[3]} className={s.img}/>
            <p className={s.textItem}>
                {t(`newsItem.text2.${currentLanguage}`, newsItem.text2[currentLanguage])}
            </p>
            <Image src={newsItem.images[4]} className={s.img}/>
            <Image src={newsItem.images[5]} className={s.img}/>
            <Image src={newsItem.images[6]} className={s.img}/>
            <Image src={newsItem.images[7]} className={s.img}/>
            <p className={s.textItem}>
                {t(`newsItem.text3.${currentLanguage}`, newsItem.text2[currentLanguage])}
            </p>
            <p className={s.textItem}>
                {newsItem.text4}
            </p>
            <p className={s.textItem}>
                {t(`newsItem.osu.${currentLanguage}`, newsItem.osu[currentLanguage])}
            </p>
        </div>
    );
};

export default KumiteMarathon;
