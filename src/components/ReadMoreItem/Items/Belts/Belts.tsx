import React from 'react';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Belts.module.scss";


const Belts = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {belts} = readMoreData;

    const paragraphs1 = belts.text1[currentLanguage]
        ? belts.text1[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs2 = belts.text2[currentLanguage]
        ? belts.text2[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs3 = belts.text3[currentLanguage]
        ? belts.text3[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs4 = belts.text4[currentLanguage]
        ? belts.text4[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs5 = belts.text5[currentLanguage]
        ? belts.text5[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs6 = belts.text6[currentLanguage]
        ? belts.text6[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs7 = belts.text7[currentLanguage]
        ? belts.text7[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;


    return (
        <div className={s.container}>
            <p className={s.note}>{t(`belts.note.${currentLanguage}`,belts.note[currentLanguage])}</p>
            <h4 className={s.title}>{t(`belts.title.${currentLanguage}`,belts.title[currentLanguage])}:</h4>
            <h5 className={s.contentTitle}>
                {t(`belts.label1.${currentLanguage}`, belts.label1[currentLanguage])}
            </h5>
            {paragraphs1}
            <h5 className={s.contentTitle}>
                {t(`belts.label2.${currentLanguage}`, belts.label2[currentLanguage])}
            </h5>
            {paragraphs2}
            <h5 className={s.contentTitle}>
                {t(`belts.label3.${currentLanguage}`, belts.label3[currentLanguage])}
            </h5>
            {paragraphs3}
            <h5 className={s.contentTitle}>
                {t(`belts.label4.${currentLanguage}`, belts.label4[currentLanguage])}
            </h5>
            {paragraphs4}
            <h5 className={s.contentTitle}>
                {t(`belts.label5.${currentLanguage}`, belts.label5[currentLanguage])}
            </h5>
            {paragraphs5}
            <h5 className={s.contentTitle}>
                {t(`belts.label6.${currentLanguage}`, belts.label6[currentLanguage])}
            </h5>
            {paragraphs6}
            <h5 className={s.contentTitle}>
                {t(`belts.label7.${currentLanguage}`, belts.label7[currentLanguage])}
            </h5>
            {paragraphs7}
        </div>
    );
};

export default Belts;
