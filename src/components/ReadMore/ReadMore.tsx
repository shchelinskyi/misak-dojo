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


const linkArr = [
    {
        title: {
            en:"Biography of Masutatsu Oyama",
            ru:"Биография Масутацу Оямы",
            ua:"Біографія Масутацу Оями",
        },
        link: ""
    },
    {
        title: {
            en:"WKO exam requirements",
            ru:"Экзаменационные требования WKO",
            ua:"Екзаменаційні вимоги WKO",
        },
        link: ""
    },
    {
        title: {
            en:"Rules of behavior in the dojo",
            ru:"Правила поведения в доджо",
            ua:"Правила поведінки в доджо",
        },
        link: ""
    },
    { title: {
            en:"Rules of Kyokushinkai competitions",
            ru:"Правила соревнований Киокушинкай",
            ua:"Правила змагань Кіокушинкай",
        },
        link: ""
    },
    {title: {
            en:"Kyokushinkai karate WKO",
            ru:"Kyokushinkai karate WKO",
            ua:"Kyokushinkai karate WKO",
        },
        link: ""
    },
    {  title: {
            en:"The meaning of Kyokushinkai belts",
            ru:"Значение поясов Киокушинкай",
            ua:"Значення поясів Кіокушинкай",
        },
        link: ""
    },
]

const ReadMore = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { t } = useTranslation();
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


                    {/*{linkArr.length > 0 && linkArr.map((item) => {*/}

                    {/*        return (*/}

                    {/*            <div key={item.title} className={s.link}>*/}
                    {/*                <div className={s.linkTitle}>{t(`title.${currentLanguage}`, item.title[currentLanguage])}</div>*/}
                    {/*                <Image className={s.iconPlus} src={plus}/>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*})}*/}


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
