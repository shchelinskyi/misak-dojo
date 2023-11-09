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
        <div style={{maxWidth:"380px"}}>
            <Image className={s.productImg} src={productItem.url}/>
            <h6 className={s.productTitle}>{productItem.title}</h6>
            <h6 className={s.productPrice}>{productItem.price} <span>грн</span></h6>
        </div>
    );
};

export default ProductCard;
