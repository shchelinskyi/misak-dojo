import React from 'react';
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Rules.module.scss";
import {useTranslation} from "react-i18next";

const Rules = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {rules, osu} = readMoreData;

    const paragraphs1 = rules.text1[currentLanguage]
        ? rules.text1[currentLanguage].split('\n').map((paragraph, index) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs2 = rules.text2[currentLanguage]
        ? rules.text2[currentLanguage].split('\n').map((paragraph, index) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs3 = rules.text3[currentLanguage]
        ? rules.text3[currentLanguage].split('\n').map((paragraph, index) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs4 = rules.text4[currentLanguage]
        ? rules.text4[currentLanguage].split('\n').map((paragraph, index) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`rules.title.${currentLanguage}`,rules.title[currentLanguage])}:</h4>
            <h5 className={s.contentTitle}>
                {t(`rules.before.${currentLanguage}`, rules.before[currentLanguage])}
            </h5>
            <ol className={s.list}>
                {paragraphs1}
            </ol>
            <h5 className={s.contentTitle}>
                {t(`rules.during.${currentLanguage}`, rules.during[currentLanguage])}
            </h5>
            <ol className={s.list}>
                {paragraphs2}
            </ol>
            <h5 className={s.contentTitle}>
                {t(`rules.prohibition.${currentLanguage}`, rules.prohibition[currentLanguage])}
            </h5>
            <ol className={s.list}>
                {paragraphs3}
            </ol>
            <h5 className={s.contentTitle}>
                {t(`rules.after.${currentLanguage}`, rules.after[currentLanguage])}
            </h5>
            <ol className={s.list}>
                {paragraphs4}
            </ol>
            <div className={s.contentItem} style={{margin:"40px 0"}}>
                {t(`osu.${currentLanguage}`, osu[currentLanguage])}
            </div>
        </div>
    );
};

export default Rules;
