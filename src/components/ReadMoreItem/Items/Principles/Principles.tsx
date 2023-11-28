import React from 'react';
import s from "./Principles.module.scss";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";

const Principles = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {principles} = readMoreData;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`principles.titleLabel.${currentLanguage}`, principles.titleLabel[currentLanguage])}:</h4>
            <div className={s.content}>
                {principles.list[currentLanguage].map((item) => (
                    <div key={item.label}>
                        <h5 className={s.contentTitle}>{item.label}</h5>
                        <p className={s.contentItem}>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principles;
