import React from 'react';
import {Modal, Button} from "react-bootstrap"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {closeCartModal} from "../../redux/slices/cartSlice";


const Cart = () => {
    const dispatch = useAppDispatch();
    const isCartModalOpened = useAppSelector(state => state.cart.isOpenedCartModal);

    const handleCloseCartModal = () => {
        dispatch(closeCartModal())
    }

    return (
        <Modal show={isCartModalOpened} onHide={handleCloseCartModal}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};

export default Cart;
