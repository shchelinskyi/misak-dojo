import React from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import i18n from "i18next";
import {newsData} from "../../../../utils/news";
import s from "./OpenCup.module.scss";

const OpenCup = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {openCup: newsItem} = newsData;
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
            <div>
                <div className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, newsItem.text3[currentLanguage])}
                    {newsItem.wins1[currentLanguage].map((item) => (<p key={item} className={s.textItem}>{item}</p>))}
                    <br/>
                    {newsItem.wins2[currentLanguage].map((item) => (<p key={item} className={s.textItem}>{item}</p>))}
                    <br/>
                    {newsItem.wins3[currentLanguage].map((item) => (<p key={item} className={s.textItem}>{item}</p>))}
                    <br/>
                    {newsItem.wins4[currentLanguage].map((item) => (<p key={item} className={s.textItem}>{item}</p>))}
                </div>
            </div>
            <Image src={newsItem.images[2]} className={s.img}/>
            <p className={s.textItem}>
                {t(`newsItem.text4.${currentLanguage}`, newsItem.text4[currentLanguage])}
            </p>
            <p className={s.textItem}>
                {t(`newsItem.osu.${currentLanguage}`, newsItem.osu[currentLanguage])}
            </p>
        </div>
    );
};

export default OpenCup;
