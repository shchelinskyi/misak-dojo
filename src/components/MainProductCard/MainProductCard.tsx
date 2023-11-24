import React, {useState} from 'react';
import {Modal, Button, Nav, Tab, Image} from "react-bootstrap"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {close, closeProductModal} from "../../redux/slices/productSlice.ts";
import s from "./MainProductCard.module.scss";
import img1 from "../../assets/images/product/img1.jpg";
import img2 from "../../assets/images/product/img2.jpg";
import img3 from "../../assets/images/product/img3.jpg";
import cn from "classnames"
import iconSelect from "../../assets/images/main/select-flag.png";


const MainProductCard = () => {
    const dispatch = useAppDispatch();
    const isProductModalOpened = useAppSelector(state => state.product.isOpenedProductModal);

    const handleCloseProductModal = () => {
        dispatch(closeProductModal())
    }

    const [activeKey, setActiveKey] = useState('first');

    const handlePrev = () => {
        switch (activeKey) {
            case 'first':
                setActiveKey('third');
                break;
            case 'second':
                setActiveKey('first');
                break;
            case 'third':
                setActiveKey('second');
                break;
            default:
                break;
        }
    };

    const handleNext = () => {
        switch (activeKey) {
            case 'first':
                setActiveKey('second');
                break;
            case 'second':
                setActiveKey('third');
                break;
            case 'third':
                setActiveKey('first');
                break;
            default:
                break;
        }
    };

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    const handleChangeSize = (event) => {
        const size = event.targe.value;
        setSelectedSize(size);
    }

    const handleChangeColor = (event) => {
        const color = event.targe.value;
        setSelectedColor(color);
    }

    const handleChangeModel = (event) => {
        const model = event.targe.value;
        setSelectedModel(model);
    }


    return (
        <div className={s.overlay} onClick={handleCloseProductModal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.imageBlock}>
                    <span className={cn(s.arrow, s.arrowLeft)} onClick={handlePrev}>&lt;</span>
                    <span className={cn(s.arrow, s.arrowRight)} onClick={handleNext}>&gt;</span>
                    <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Image src={img1} className={s.imgShow}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Image src={img2} className={s.imgShow}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Image src={img3} className={s.imgShow}/>
                            </Tab.Pane>
                        </Tab.Content>
                        <Nav className={s.navImages}>
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <Image src={img1} className={s.imgShot}/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <Image src={img2} className={s.imgShot}/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <Image src={img3} className={s.imgShot}/>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                </div>
                <div className={s.descriptionBlock}>
                    <h4 className={s.productTitle}>
                        Рюкзак-мішок з логотипом клубу Misak Dojo
                    </h4>
                    <div className={s.productPrice}>990 грн</div>
                    <div className={s.charactersBlock}>
                        <div className={s.charactersItem}>
                            <div className={s.charactersTitle}>
                                Розмір:
                            </div>
                            <div className={s.selectContainer}>
                                <select value={selectedSize} className={s.selectBox} onChange={handleChangeSize}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                                <div className={s.iconContainer}>
                                    <Image className={s.selectIcon} src={iconSelect}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.charactersItem}>
                            <div className={s.charactersTitle}>
                                Колір:
                            </div>
                            <div className={s.selectContainer}>
                                <select value={selectedColor} className={s.selectBox} onChange={handleChangeColor}>
                                    <option value="Білий">Білий</option>
                                    <option value="Сірий">Сірий</option>
                                    <option value="Чорний">Чорний</option>
                                </select>
                                <div className={s.iconContainer}>
                                    <Image className={s.selectIcon} src={iconSelect}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.charactersItem}>
                            <div className={s.charactersTitle}>
                                Модель:
                            </div>
                            <div className={s.selectContainer}>
                                <select value={selectedModel} className={s.selectBox} onChange={handleChangeModel}>
                                    <option value="Roltop">Roltop</option>
                                </select>
                                <div className={s.iconContainer}>
                                    <Image className={s.selectIcon} src={iconSelect}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={s.btn}>
                        купити
                    </button>
                    <p className={s.productDescription}>
                        Футболка з логотипом школи Misak Dojo, на лівому рукаві напис What do you figt for? та на спині Shinkyokushinkai Karate Misak Dojo.
                    </p>
                    <div className={s.additionalData}>
                        <div className={s.additionalItem}>
                            <span className={s.additionalItemLabel}>Матеріал:</span>
                            <span className={s.additionalItemValue}>100% бавовна</span>
                        </div>
                        <div className={s.additionalItem}>
                            <span className={s.additionalItemLabel}>Об'єм:</span>
                            <span className={s.additionalItemValue}>20 літрів</span>
                        </div>
                        <div className={s.additionalItem}>
                            <span className={s.additionalItemLabel}>Висота:</span>
                            <span className={s.additionalItemValue}>54 см</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProductCard;

