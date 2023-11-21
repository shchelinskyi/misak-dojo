import {FC} from 'react';
import {Image} from "react-bootstrap";
import s from "./ProductCard.module.scss";

interface NewsCardTypes {
    productItem: {
        url: string;
        price: string;
        title: string;
    }
}

const ProductCard: FC<NewsCardTypes> = ({productItem}) => {
    return (
        <div className={s.card}>
            <Image className={s.productImg} src={productItem.url}/>
            <div className={s.textBlock}>
            <h6 className={s.productTitle}>{productItem.title}</h6>
            <h6 className={s.productPrice}>{productItem.price} <span>грн</span></h6>
            </div>
        </div>
    );
};

export default ProductCard;
