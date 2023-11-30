import React from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import i18n from "i18next";
import {newsData} from "../../../../utils/news";
import s from "./SummerSchool31.module.scss";

const SummerSchool31 = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {summerSchool31: newsItem} = newsData;

    const paragraphs1 = newsItem.list[currentLanguage]
        ? newsItem.list[currentLanguage].split('\n').map((paragraph, index) => (
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
            <p className={s.textItem}>
                {t(`newsItem.text1.${currentLanguage}`, newsItem.text1[currentLanguage])}
            </p>
            <Image src={newsItem.images[1]} className={s.img}/>
            <p className={s.textItem}>
                {t(`newsItem.text2.${currentLanguage}`, newsItem.text2[currentLanguage])}
            </p>
            <p className={s.textItem}>
                {paragraphs1}
            </p>
            <p className={s.textItem}>
                {t(`newsItem.text3.${currentLanguage}`, newsItem.text3[currentLanguage])}
            </p>
            <Image src={newsItem.images[2]} className={s.img}/>
            <Image src={newsItem.images[3]} className={s.img}/>
            <Image src={newsItem.images[4]} className={s.img}/>
            <Image src={newsItem.images[5]} className={s.img}/>
            <Image src={newsItem.images[6]} className={s.img}/>
            <Image src={newsItem.images[7]} className={s.img}/>
            <Image src={newsItem.images[8]} className={s.img}/>
            <p className={s.textItem}>
                {t(`newsItem.text4.${currentLanguage}`, newsItem.text4[currentLanguage])}
            </p>
        </div>
    );
};

export default SummerSchool31;
