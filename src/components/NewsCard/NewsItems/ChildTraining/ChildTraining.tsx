import {Link, useLocation} from "react-router-dom";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./ChildTraining.module.scss";
import {useEffect} from "react";

const ChildTraining = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {childTraining: newsItem} = newsData;

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`

    const paragraphs1 = newsItem.text[currentLanguage]
        ? newsItem.text[currentLanguage].split('\n').map((paragraph, index) => (
            <div key={index} className={s.textItem}>
                {paragraph}
            </div>
        ))
        : null;
    return (
        <div>
            <div className={s.content}>
                <div className={s.head}>
                    <Link to="/">
                        <Image src={arrow} className={s.icon}/>
                    </Link>
                    <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
                </div>
                <h4 className={s.title}>{t(`newsItem.title.${currentLanguage}`, newsItem.title[currentLanguage])}</h4>
                <div className={s.videoWrapper}>
                    <iframe width="760" height="427" src="https://www.youtube.com/embed/wAj7iAPxK3c"
                            title={t(`newsItem.title.${currentLanguage}`, newsItem.title[currentLanguage])}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div>
                    {paragraphs1}
                </div>

            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl}
                            quote={t(`newsItem.title.${currentLanguage}`, newsItem.title[currentLanguage])}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default ChildTraining;
