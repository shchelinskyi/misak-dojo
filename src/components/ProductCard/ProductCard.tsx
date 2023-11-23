import {FC} from 'react';
import {Image} from "react-bootstrap";
import s from "./ProductCard.module.scss";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

interface NewsCardTypes {
    productItem: {
        url: string;
        price: string;
        title: any;
    }
}

const ProductCard: FC<NewsCardTypes> = ({productItem}) => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    return (
        <div className={s.card}>
            <Image className={s.productImg} src={productItem.url}/>
            <div className={s.textBlock}>
            <h6 className={s.productTitle}>{t(`title.${currentLanguage}`, productItem.title[currentLanguage])}</h6>
            <h6 className={s.productPrice}>{productItem.price} <span>{t("uah")}</span></h6>
            </div>
        </div>
    );
};

export default ProductCard;
