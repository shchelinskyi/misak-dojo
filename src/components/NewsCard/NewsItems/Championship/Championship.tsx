import React from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import i18n from "i18next";
import {newsData} from "../../../../utils/news";
import s from "./Championship.module.scss";

const Championship = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {championship: newsItem} = newsData;

    const paragraphs1 = newsItem.text1[currentLanguage]
        ? newsItem.text1[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.textItem}>
                {paragraph}
            </div>
        ))
        : null;

    const paragraphs2 = newsItem.text2[currentLanguage]
        ? newsItem.text2[currentLanguage].split('\n').map((paragraph, index) => {
            const match = paragraph.match(/<strong>(.*?)<\/strong>/);

            const formattedParagraph = match
                ? (
                    <div key={index} className={s.textItem}>
                        {paragraph.split(match[0]).map((text, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <strong>{match[1]}</strong>}
                                {text}
                            </React.Fragment>
                        ))}
                    </div>
                )
                : (
                    <div key={index} className={s.textItem}>
                        {paragraph}
                    </div>
                );

            return formattedParagraph;
        })
        : null;

    const paragraphs3 = newsItem.text3[currentLanguage]
        ? newsItem.text3[currentLanguage].split('\n').map((paragraph, index) => (
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
            <div className={s.block}>
                {paragraphs1}
            </div>
            <Image src={newsItem.images[1]} className={s.img}/>
            <div className={s.block}>
                {paragraphs2}
            </div>
            <div className={s.videoWrapper}>
                <iframe width="760" height="453" src="https://www.youtube.com/embed/UwVZaj05dPo"
                        title="Чемпионат Житомирской области по Киокушинкай каратэ 🥋 2019" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            <div className={s.block}>
                {paragraphs3}
            </div>

        </div>
    );
};

export default Championship;
