import {FC} from 'react';
import {Image} from "react-bootstrap";
import s from "./NewsCard.module.scss";
import news1 from "../../assets/images/news1.png"

interface NewsCardTypes {
    newsItem: {
        url: string;
        date: string;
        title: string;
    }
}

const NewsCard: FC<NewsCardTypes> = ({newsItem}) => {
    return (
        <div style={{maxWidth:"380px"}}>
            <Image className={s.newsImg} src={newsItem.url}/>
            <p className={s.newsDate}>{newsItem.date}</p>
            <h6 className={s.newsTitle}>{newsItem.title}</h6>
        </div>
    );
};

export default NewsCard;
