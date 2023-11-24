import React from 'react';
import img1 from "../../assets/images/product/img1.jpg";
import {Image} from "react-bootstrap"
import s from "./CartItem.module.scss";

const CartItem = () => {
    return (
        <div className={s.container}>
            <Image src={img1} className={s.productImg}/>
            <div className={s.description}>
                <h5 className={s.title}>Рюкзак-мішок з логотипом клубу Misak Dojo</h5>
                <div className={s.charactersBlock}>
                    <div className={s.charactersItem}>
                        <div className={s.characterLabel}>
                            Розмір:
                        </div>
                        <div className={s.characterValue}>
                            XS
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.btnGroup}>
                <button className={s.btnDel}>-</button>
                <span className={s.quantity}>1</span>
                <button className={s.btnAdd}>+</button>
            </div>
            <div className={s.price}>1990 грн</div>
            <div className={s.delBtn}>&times;</div>
        </div>
    );
};

export default CartItem;
