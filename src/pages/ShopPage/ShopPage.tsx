import {useEffect, useState} from "react";
import {Container, Stack, Tab, Nav} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import {useTranslation} from "react-i18next";
import {products} from "../../utils/shop";
import cn from "classnames";
import s from "./ShopPage.module.scss";
import type {ProductItemType} from "../../components/ProductCard/ProductCard";

const ShopPage = () => {

    const {t} = useTranslation();
    const [currentIndexAll, setCurrentIndexAll] = useState(0);
    const [currentIndexCasuals, setCurrentIndexCasuals] = useState(0);
    const [currentIndexBackpacks, setCurrentIndexBackpacks] = useState(0);
    const [currentIndexKimonos, setCurrentIndexKimonos] = useState(0);
    const [currentIndexBelts, setCurrentIndexBelts] = useState(0);
    const [currentIndexCovers, setCurrentIndexCovers] = useState(0);
    const [currentIndexProtections, setCurrentIndexProtections] = useState(0);
    const [currentIndexSupports, setCurrentIndexSupports] = useState(0);

    const [allProducts, setAllProducts] = useState([]);
    const [allCasuals, setAllCasuals] = useState([]);
    const [allBackpacks, setAllBackpacks] = useState([]);
    const [allKimonos, setAllKimonos] = useState([]);
    const [allBelts, setAllBelts] = useState([]);
    const [allCovers, setAllCovers] = useState([]);
    const [allProtections, setAllProtections] = useState([]);
    const [allSupports, setAllSupports] = useState([]);

    const [activeKey, setActiveKey] = useState('all');

    const filterItems = (category: string): ProductItemType[] => {
        return products.filter((item) => item.category === category)
    }

    useEffect(() => {
        if (products.length > 0 && products.length > allProducts.length) {
            const someArr = products.slice(0, currentIndexAll + 3);
            setAllProducts([...someArr]);
        }
    }, [currentIndexAll])

    useEffect(() => {
        const filteredProducts = filterItems("casual");
        if (filteredProducts.length > 0 && filteredProducts.length > allCasuals.length) {
            const someArr = filteredProducts.slice(0, currentIndexCasuals + 3);
            setAllCasuals([...someArr]);
        }
    }, [currentIndexCasuals])

    useEffect(() => {
        const filteredProducts = filterItems("backpack");
        if (filteredProducts.length > 0 && filteredProducts.length > allBackpacks.length) {
            const someArr = filteredProducts.slice(0, currentIndexBackpacks + 3);
            setAllBackpacks([...someArr]);
        }
    }, [currentIndexBackpacks])

    useEffect(() => {
        const filteredProducts = filterItems("kimono");
        if (filteredProducts.length > 0 && filteredProducts.length > allKimonos.length) {
            const someArr = filteredProducts.slice(0, currentIndexKimonos + 3);
            setAllKimonos([...someArr]);
        }
    }, [currentIndexKimonos])

    useEffect(() => {
        const filteredProducts = filterItems("belt");
        if (filteredProducts.length > 0 && filteredProducts.length > allBelts.length) {
            const someArr = filteredProducts.slice(0, currentIndexBelts + 3);
            setAllBelts([...someArr]);
        }
    }, [currentIndexBelts])

    useEffect(() => {
        const filteredProducts = filterItems("case");
        if (filteredProducts.length > 0 && filteredProducts.length > allCovers.length) {
            const someArr = filteredProducts.slice(0, currentIndexCovers + 3);
            setAllCovers([...someArr]);
        }
    }, [currentIndexCovers])

    useEffect(() => {
        const filteredProducts = filterItems("protection");
        if (filteredProducts.length > 0 && filteredProducts.length > allProtections.length) {
            const someArr = filteredProducts.slice(0, currentIndexProtections + 3);
            setAllProtections([...someArr]);
        }
    }, [currentIndexProtections])

    useEffect(() => {
        const filteredProducts = filterItems("support");
        if (filteredProducts.length > 0 && filteredProducts.length > allSupports.length) {
            const someArr = filteredProducts.slice(0, currentIndexSupports + 3);
            setAllSupports([...someArr]);
        }
    }, [currentIndexSupports])

    const handleShowMore = (category, currentIndex, setCurrentIndex) => {
        if (category === "all") {
            const newIndex = currentIndex + 3;
            setCurrentIndex(newIndex >= products.length ? 0 : newIndex);
        } else {
            const filteredProducts = filterItems(category);
            const newIndex = currentIndex + 3;
            setCurrentIndex(newIndex >= filteredProducts.length ? 0 : newIndex);
        }
    };

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("shop")}</h3>
                    <Tab.Container defaultActiveKey="all" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                        <Nav className={s.tabsList}>
                            <Nav.Item>
                                <Nav.Link eventKey="all"
                                          className={cn(s.tab, {[s.active]: activeKey === "all"})}>{t("all")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="casual"
                                          className={cn(s.tab, {[s.active]: activeKey === "casual"})}>{t("clothes")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="backpacks"
                                          className={cn(s.tab, {[s.active]: activeKey === "backpacks"})}>{t("backpacks")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="kimonos"
                                          className={cn(s.tab, {[s.active]: activeKey === "kimonos"})}>{t("kimono")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="belts"
                                          className={cn(s.tab, {[s.active]: activeKey === "belts"})}>{t("belts")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="covers"
                                          className={cn(s.tab, {[s.active]: activeKey === "covers"})}>{t("covers")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="protection"
                                          className={cn(s.tab, {[s.active]: activeKey === "protection"})}>{t("protection")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="support"
                                          className={cn(s.tab, {[s.active]: activeKey === "support"})}>{t("support")}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="all">
                                <div className={s.content}>
                                    {allProducts.length > 0 && allProducts.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {(products.length > allProducts.length) &&
                                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                        <CustomButton onClick={() => handleShowMore("all", currentIndexAll, setCurrentIndexAll )}>{t("showMore")}</CustomButton>
                                    </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="casual">
                                <div className={s.content}>
                                    {allCasuals.length > 0 && allCasuals.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("casual").length > allCasuals.length) &&

                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("casual", currentIndexCasuals, setCurrentIndexCasuals)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="backpacks">
                                <div className={s.content}>
                                    {allBackpacks.length > 0 && allBackpacks.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("backpack").length > allBackpacks.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("backpack", currentIndexBackpacks, setCurrentIndexBackpacks)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="kimonos">
                                <div className={s.content}>
                                    {allKimonos.length > 0 && allKimonos.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("kimono").length > allKimonos.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("kimono", currentIndexKimonos, setCurrentIndexKimonos)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="belts">
                                <div className={s.content}>
                                    {allBelts.length > 0 && allBelts.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("belt").length > allBelts.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton onClick={() => handleShowMore("belt", currentIndexBelts, setCurrentIndexBelts)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="covers">
                                <div className={s.content}>
                                    {allCovers.length > 0 && allCovers.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("case").length > allCovers.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("case", currentIndexCovers, setCurrentIndexCovers)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="protection">
                                <div className={s.content}>
                                    {allProtections.length > 0 && allProtections.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("protection").length > allProtections.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("protection", currentIndexProtections, setCurrentIndexProtections)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="support">
                                <div className={s.content}>
                                    {allSupports.length > 0 && allSupports.map((productItem) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("support").length > allSupports.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("support", currentIndexSupports, setCurrentIndexSupports)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
};

export default ShopPage;
