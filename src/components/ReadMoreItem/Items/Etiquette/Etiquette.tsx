import React from 'react';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Etiquette.module.scss";

const Etiquette = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {etiquette} = readMoreData;
    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`etiquette.title.${currentLanguage}`, etiquette.title[currentLanguage])}:</h4>
            <p>{etiquette.label[currentLanguage]}</p>
            <ol className={s.content}>
                {etiquette.list[currentLanguage].map((item) => (
                        <li className={s.contentItem}>{item}</li>
                ))}
            </ol>
        </div>
    );
};

export default Etiquette;
