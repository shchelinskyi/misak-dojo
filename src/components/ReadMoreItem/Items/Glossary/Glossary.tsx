import React from 'react';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Glossary.module.scss";

const Glossary = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {glossary} = readMoreData;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`glossary.title.${currentLanguage}`, glossary.title[currentLanguage])}</h4>
            <p className={s.note}>
                {t(`glossary.note.${currentLanguage}`, glossary.note[currentLanguage])}
            </p>
            <div className={s.content}>
                {glossary.mainGlossary[currentLanguage].map((item) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{glossary.handsTitle[currentLanguage]}:</h5>
            <div className={s.content}>
                {glossary.hands[currentLanguage].map((item) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{glossary.legsTitle[currentLanguage]}:</h5>
            <div className={s.content}>
                {glossary.legs[currentLanguage].map((item) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{glossary.punchesTitle[currentLanguage]}:</h5>
            <div className={s.content}>
                {glossary.punches[currentLanguage].map((item) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{glossary.blowsTitle[currentLanguage]}:</h5>
            <div className={s.content}>
                {glossary.blows[currentLanguage].map((item) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default Glossary;
