import React from 'react';
import {Modal, Button} from "react-bootstrap"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {closeCartModal} from "../../redux/slices/cartSlice";
import s from "./Cart.module.scss";
import CartItem from "../CartItem";
import CartForm from "../CartForm";


const Cart = () => {
    const dispatch = useAppDispatch();

    const handleCloseCartModal = () => {
        dispatch(closeCartModal())
    }

    return (
        <div className={s.overlay} onClick={handleCloseCartModal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.titleBlock}>
                    <h4 className={s.title}>Ваше замовлення:</h4>
                    <div className={s.closeBtn} onClick={handleCloseCartModal}>&times;</div>
                </div>
                <div className={s.line}></div>
                <div className={s.cartItems}>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className={s.line}></div>
                <div className={s.totalPrice}>Сума: 2880 грн</div>
                <CartForm/>
            </div>
        </div>
    );
};

export default Cart;
