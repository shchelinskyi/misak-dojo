import {FC} from 'react';
import {Image} from "react-bootstrap";
import s from "./NewsCard.module.scss";
import news1 from "../../assets/images/news1.png"
import {useTranslation} from "react-i18next";
import i18n from "i18next";

interface NewsCardTypes {
    newsItem: {
        url: string;
        date: string;
        title: any;
    }
}

const NewsCard: FC<NewsCardTypes> = ({newsItem}) => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    return (
        <div className={s.card}>
            <Image className={s.newsImg} src={newsItem.url}/>
            <p className={s.newsDate}>{newsItem.date}</p>
            <h6 className={s.newsTitle}>{t(`title.${currentLanguage}`, newsItem.title[currentLanguage])}</h6>
        </div>
    );
};

export default NewsCard;
