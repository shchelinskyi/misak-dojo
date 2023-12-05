import React from 'react';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./RulesKio.module.scss";

const RulesKio = () => {

    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {rulesKio, osu} = readMoreData;

    const paragraphs1 = rulesKio.text1[currentLanguage]
        ? rulesKio.text1[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs2 = rulesKio.text2[currentLanguage]
        ? rulesKio.text2[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs3 = rulesKio.text3[currentLanguage]
        ? rulesKio.text3[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs4 = rulesKio.text4[currentLanguage]
        ? rulesKio.text4[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs5 = rulesKio.text5[currentLanguage]
        ? rulesKio.text5[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs6 = rulesKio.text6[currentLanguage]
        ? rulesKio.text6[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    return (
        <div className={s.container}>
            <h4 className={s.title}>
                {t(`rulesKio.title.${currentLanguage}`, rulesKio.title[currentLanguage])}
            </h4>
            {paragraphs1}
            {paragraphs2}
            <p className={s.contentTitle}>
                {t(`rulesKio.label1.${currentLanguage}`, rulesKio.label1[currentLanguage])}
            </p>
            {paragraphs3}
            <p className={s.contentTitle}>
                {t(`rulesKio.label2.${currentLanguage}`, rulesKio.label2[currentLanguage])}
            </p>
            {paragraphs4}
            <p className={s.contentTitle}>
                {t(`rulesKio.label3.${currentLanguage}`, rulesKio.label3[currentLanguage])}
            </p>
            {paragraphs5}
            <p className={s.contentTitle}>
                {t(`rulesKio.label4.${currentLanguage}`, rulesKio.label4[currentLanguage])}
            </p>
            {paragraphs6}
        </div>
    );
};

export default RulesKio;
