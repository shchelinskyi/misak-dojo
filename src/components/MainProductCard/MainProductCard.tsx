import React, {FC, useState} from 'react';
import {Nav, Tab, Image} from "react-bootstrap"
import {useAppDispatch} from "../../hooks";
import {addToCart, calculateTotal, openAddToCartModal} from "../../redux/slices/cartSlice";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import iconSelect from "../../assets/images/main/select-flag.webp";
import cn from "classnames";
import s from "./MainProductCard.module.scss";
import type {ProductItemType} from "../ProductCard/ProductCard";

type MainProductCardProps = {
    productItem:ProductItemType;
    onClose: () => void;
};


const MainProductCard:FC<MainProductCardProps> = ({productItem, onClose}) => {

    const [selectedSize, setSelectedSize] = useState(productItem.size[0] || "");
    const [selectedColor, setSelectedColor] = useState(productItem.color[0] || "");
    const [activeKey, setActiveKey] = useState('1');

    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const handlePrev = () => {
        const totalImages = productItem.images.length;
        const currentIndex = parseInt(activeKey, 10);

        if (totalImages > 1) {
            const newIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
            setActiveKey(newIndex.toString());
        }
    };

    const handleNext = () => {
        const totalImages = productItem.images.length;
        const currentIndex = parseInt(activeKey, 10);

        if (totalImages > 1) {
            const newIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
            setActiveKey(newIndex.toString());
        }
    };

    const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const size = event.target.value;
        setSelectedSize(size);
    }

    const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const color = event.target.value;
        setSelectedColor(color);
    }

    const handleClickButton = () => {
        const productData = {
            id: productItem.id,
            image: productItem.images[0],
            title: {...productItem.title},
            price: productItem.price,
            size: selectedSize,
            color: selectedColor,
            category: productItem.category,
            quantity: 1
        }
        dispatch(addToCart(productData));
        dispatch(calculateTotal());
        onClose();
        dispatch(openAddToCartModal())
    }

    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <span className={s.closeBtn} onClick={onClose}>&times;</span>
                <div className={s.imageBlock}>
                    <span className={cn(s.arrow, s.arrowLeft)} onClick={handlePrev}>&lt;</span>
                    <span className={cn(s.arrow, s.arrowRight)} onClick={handleNext}>&gt;</span>
                    <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                        <Tab.Content>
                            {productItem.images.length > 0 && productItem.images.map((itemImg, index) => {
                                return (
                                    <Tab.Pane eventKey={index + 1} key={itemImg}>
                                        <Image src={itemImg} className={s.imgShow}/>
                                    </Tab.Pane>
                                )
                            })}
                        </Tab.Content>
                        <Nav className={s.navImages}>
                            {productItem.images.length > 0 && productItem.images.map((itemImg, index) => {
                                return (
                                    <Nav.Item>
                                        <Nav.Link eventKey={index + 1} key={itemImg}>
                                            <Image src={itemImg} className={s.imgShot}/>
                                        </Nav.Link>
                                    </Nav.Item>
                                )
                            })}
                        </Nav>
                    </Tab.Container>
                </div>
                <div className={s.descriptionBlock}>
                    <h4 className={s.productTitle}>
                        {t(`title.${currentLanguage}`, productItem.title[currentLanguage])}
                    </h4>
                    <div className={s.productPrice}>{productItem.price} {t("uah")}</div>
                     {(productItem.category !== "case" && productItem.category !== "support") &&
                         <div className={s.charactersBlock}>
                             <div className={s.charactersItem}>
                                 <div className={s.charactersTitle}>
                                     {/*{productItem.category === "backpack" ? t("sizeBackpack") : t("size")}*/}
                                     {productItem.category === "backpack" && t("sizeBackpack")}
                                     {productItem.category === "belt" && t("sizeBelt")}
                                     {(productItem.category !== "belt" && productItem.category !== "backpack") && t("size")}
                                 </div>
                                 <div className={s.selectContainer}>
                                     <select value={selectedSize} className={s.selectBox} onChange={handleChangeSize}>
                                         {productItem.size.length > 0 && productItem.size.map((sizeItem, index) => {
                                             if (sizeItem === "3" || sizeItem === "5" || sizeItem === "7" || sizeItem === "9" || sizeItem === "100") {
                                                 return (<option key={sizeItem} value={t(sizeItem)}>
                                                     {t(`size${sizeItem}`)}
                                                 </option>)
                                             } else {
                                                 return (<option key={sizeItem} value={sizeItem}>
                                                     {sizeItem}
                                                 </option>)
                                             }
                                         })
                                         }
                                     </select>
                                     <div className={s.iconContainer}>
                                         <Image className={s.selectIcon} src={iconSelect}/>
                                     </div>
                                 </div>
                             </div>
                             <div className={s.charactersItem}>
                                 <div className={s.charactersTitle}>
                                     {t("color")}:
                                 </div>
                                 <div className={s.selectContainer}>
                                     <select value={selectedColor} className={s.selectBox} onChange={handleChangeColor}>
                                         {productItem.color.length > 0 && productItem.color.map((colorItem, index) =>
                                             (<option key={colorItem} value={colorItem}>
                                                 {t(colorItem)}
                                             </option>))
                                         }
                                     </select>
                                     <div className={s.iconContainer}>
                                         <Image className={s.selectIcon} src={iconSelect}/>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     }

                    <button className={s.btn} onClick={handleClickButton}>
                        {t("buy")}
                    </button>
                    <p className={s.productDescription}>
                        {productItem.description != "" && <>{t(`description.${currentLanguage}`, productItem.description[currentLanguage])}</>}
                    </p>
                    <p className={s.productComment}>
                        {productItem.comment != "" && <>{t(`description.${currentLanguage}`, productItem.comment[currentLanguage])}</>}
                    </p>
                    <div className={s.additionalData}>
                        {(productItem.category !== "case" && productItem.category !== "support") &&
                        <div className={s.additionalItem}>
                            <span className={s.additionalItemLabel}>{t("material")}:</span>
                            <span
                                className={s.additionalItemValue}>{t(`material.${currentLanguage}`, productItem.material[currentLanguage])}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default MainProductCard;

