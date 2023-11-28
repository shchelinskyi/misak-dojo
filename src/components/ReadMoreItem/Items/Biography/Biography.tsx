import React from 'react';
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Biography.module.scss";
import {useTranslation} from "react-i18next";

const Biography = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {biography} = readMoreData;

    const paragraphs1 = biography.text1[currentLanguage]
        ? biography.text1[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    const paragraphs2 = biography.text2[currentLanguage]
        ? biography.text2[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    const paragraphs3 = biography.text3[currentLanguage]
        ? biography.text3[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs4 = biography.text4[currentLanguage]
        ? biography.text4[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs5 = biography.text5[currentLanguage]
        ? biography.text5[currentLanguage].split('\n').map((paragraph, index) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs6 = biography.text6[currentLanguage]
        ? biography.text6[currentLanguage].split('\n').map((paragraph, index) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`biography.title.${currentLanguage}`, biography.title[currentLanguage])}:</h4>
            {paragraphs1}
            <h5 className={s.contentTitle}>{t(`biography.title.${currentLanguage}`, biography.label1[currentLanguage])}</h5>
            {paragraphs2}
            <h5 className={s.contentTitle}>{t(`biography.title.${currentLanguage}`, biography.label2[currentLanguage])}</h5>
            {paragraphs3}
            <h5 className={s.contentTitle}>{t(`biography.title.${currentLanguage}`, biography.label3[currentLanguage])}</h5>
            {paragraphs4}
            <ul className={s.list}>
                {paragraphs5}
            </ul>
            {paragraphs6}
        </div>
    );
};

export default Biography;
