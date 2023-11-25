import {Image} from "react-bootstrap";
import s from "./ProductCard.module.scss";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {useDispatch} from "react-redux";
import {openProductModal} from "../../redux/slices/productSlice.ts";
import MainProductCard from "../MainProductCard";
import {useAppSelector} from "../../hooks.ts";
import {useState} from "react";

// interface NewsCardTypes {
//     productItem: {
//         url: string;
//         price: string;
//         title: any;
//     }
// }

const ProductCard = ({productItem}) => {
    const isProductModalOpened = useAppSelector(state => state.product.isOpenedProductModal);
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const [isModalOpened, setIsModalOpened] = useState(false);

    const handleOpenProduct = () => {
        setIsModalOpened(true);
    }

    const handleCloseProductModal = () => {
        setIsModalOpened(false);
        // dispatch(closeProductModal());
    }

    // const handleOpenProduct = () => {
    //     dispatch(openProductModal());
    // }

    return (
        <>
            <div className={s.card} onClick={handleOpenProduct}>
                <Image className={s.productImg} src={productItem.images[0]}/>
                <div className={s.textBlock}>
                    <h6 className={s.productTitle}>{t(`title.${currentLanguage}`, productItem.title[currentLanguage])}</h6>
                    <h6 className={s.productPrice}>{productItem.price} <span>{t("uah")}</span></h6>
                </div>

            </div>
            {isModalOpened && <MainProductCard productItem={productItem} onClose={handleCloseProductModal}/>}
        </>

    );
};

export default ProductCard;
