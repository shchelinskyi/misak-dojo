import React from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import i18n from "i18next";
import {newsData} from "../../../../utils/news";
import s from "./SummerSchool32.module.scss";

const SummerSchool32 = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {summerSchool32: newsItem} = newsData;

    const paragraphs1 = newsItem.text1[currentLanguage]
        ? newsItem.text1[currentLanguage].split('\n').map((paragraph, index) => {
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
            <Image src={newsItem.images[2]} className={s.img}/>
            <div className={s.block}>
                {paragraphs3}
            </div>
        </div>
    );
};

export default SummerSchool32;
