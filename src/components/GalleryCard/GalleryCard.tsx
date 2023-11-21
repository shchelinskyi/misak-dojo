import {FC} from 'react';
import {Image} from "react-bootstrap";
import s from "./GalleryCard.module.scss";
import news1 from "../../assets/images/news1.png"

interface GalleryCardTypes {
    newsItem: {
        url: string;
        date: string;
        title: string;
    }
}

const GalleryCard: FC<GalleryCardTypes> = ({newsItem}) => {
    return (
        <div className={s.card}>
            <Image className={s.newsImg} src={newsItem.url}/>
            <p className={s.newsDate}>{newsItem.date}</p>
            <h6 className={s.newsTitle}>{newsItem.title}</h6>
        </div>
    );
};

export default GalleryCard;
