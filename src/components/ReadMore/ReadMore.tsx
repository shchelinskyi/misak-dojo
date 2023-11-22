import React from 'react';
import {Image, Stack} from "react-bootstrap";
import s from "./ReadMore.module.scss";
import plus from "../../assets/images/readMore/plus.svg";
import usefulText from "../../assets/images/readMore/useful-text.svg";
import usefulArrow from "../../assets/images/readMore/useful-arrow.svg";
import usefulTextM from "../../assets/images/readMore/useful-text-m.svg";
import usefulArrowM from "../../assets/images/readMore/useful-arrow-m.svg";
import usefulTextS from "../../assets/images/readMore/useful-text-s.svg";
import usefulArrowS from "../../assets/images/readMore/useful-arrow-s.svg";

import finger from "../../assets/images/support/finger-up.svg";


const linkArr = [
    {
        title: "Словник термінів Кіокушинкай карате", link: ""
    },
    {
        title: "Принципи каратиста", link: ""
    },
    {
        title: "Доджо кун Кіокушинкай карате", link: ""
    },
    {
        title: "Етикет доджо Кіокушинкай карате", link: ""
    },
    {
        title: "Біографія Масутацу Оями", link: ""
    },
    {
        title: "Екзаменаційні вимоги WKO", link: ""
    },
    {
        title: "Правила поведінки в доджо", link: ""
    },
    {
        title: "Правила змагань Кіокушинкай", link: ""
    },
    {
        title: "Kyokushinkai karate WKO", link: ""
    },
    {
        title: "Значення поясів Кіокушинкай", link: ""
    },
]

const ReadMore = () => {
    return (
        <>
            <div className={s.wrapper}>
                <h3 className={s.title}>ЩЕ ПОЧИТАТИ</h3>
                <div className={s.contentBlock}>
                    {linkArr.length > 0 && linkArr.map((item) => {

                            return (
                                <div key={item.title} className={s.link}>
                                    <div className={s.linkTitle}>{item.title}</div>
                                    <Image className={s.iconPlus} src={plus}/>
                                </div>
                            )
                    })}


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
                        <span>* тиць</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadMore;
