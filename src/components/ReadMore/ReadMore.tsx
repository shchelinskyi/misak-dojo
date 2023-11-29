import React, {useState} from 'react';
import {Image, Stack} from "react-bootstrap";
import s from "./ReadMore.module.scss";
import usefulText from "../../assets/images/readMore/useful-text.svg";
import usefulArrow from "../../assets/images/readMore/useful-arrow.svg";
import usefulTextM from "../../assets/images/readMore/useful-text-m.svg";
import usefulArrowM from "../../assets/images/readMore/useful-arrow-m.svg";
import usefulTextS from "../../assets/images/readMore/useful-text-s.svg";
import usefulArrowS from "../../assets/images/readMore/useful-arrow-s.svg";
import finger from "../../assets/images/support/finger-up.svg";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import ReadMoreItem from "../ReadMoreItem";
import {readMoreData} from "../../utils/readMore"
import Glossary from "../ReadMoreItem/Items/Glossary";
import Principles from "../ReadMoreItem/Items/Principles";
import DojoCun from "../ReadMoreItem/Items/DojoCun";
import Etiquette from "../ReadMoreItem/Items/Etiquette";
import Biography from "../ReadMoreItem/Items/Biography";
import Exam from "../ReadMoreItem/Items/Exam";
import Rules from "../ReadMoreItem/Items/Rules";
import RulesKio from "../ReadMoreItem/Items/RulesKio";
import Wko from "../ReadMoreItem/Items/Wko";
import Belts from "../ReadMoreItem/Items/Belts";

const ReadMore = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    return (
        <>
            <div className={s.wrapper}>
                <h3 className={s.title}>{t("readMore")}</h3>
                <div className={s.contentBlock}>
                    <ReadMoreItem key={readMoreData.glossary.title.en} item={readMoreData.glossary}>
                        <Glossary/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.principles.title.en} item={readMoreData.principles}>
                        <Principles/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.dojoKun.title.en} item={readMoreData.dojoKun}>
                        <DojoCun/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.etiquette.title.en} item={readMoreData.etiquette}>
                        <Etiquette/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.biography.title.en} item={readMoreData.biography}>
                        <Biography/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.exam.title.en} item={readMoreData.exam}>
                        <Exam/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.rules.title.en} item={readMoreData.rules}>
                        <Rules/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.rulesKio.title.en} item={readMoreData.rulesKio}>
                        <RulesKio/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.wko.title.en} item={readMoreData.wko}>
                        <Wko/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.belts.title.en} item={readMoreData.belts}>
                        <Belts/>
                    </ReadMoreItem>


                    <div className={s.usefulBlockS}>
                        <Image className={s.usefulText} src={usefulText}/>
                        <Image className={s.usefulArrow} src={usefulArrow}/>

                        <Image src={usefulTextM} className={s.usefulTextM}/>
                        <Image src={usefulArrowM} className={s.usefulArrowM}/>

                        <Image src={usefulTextS} className={s.usefulTextS}/>
                        <Image src={usefulArrowS} className={s.usefulArrowS}/>
                    </div>
                    <div className={s.fingerBlockS}>
                        <Image src={finger} className={s.fingerImg}/>
                        <span>{t("click")}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadMore;
