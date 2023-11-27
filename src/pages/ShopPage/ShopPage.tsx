import s from "./ShopPage.module.scss"
import {Container, Image, Stack, Tab, Nav} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import cn from "classnames";
import {useTranslation} from "react-i18next";
import {products} from "../../utils/shop";
import {useEffect, useState} from "react";


const ShopPage = () => {

    const { t } = useTranslation();
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

    useEffect(() => {
        if (products.length > 0 && products.length > allProducts.length  ) {
            const someArr = products.slice(0, currentIndexAll + 3);
            setAllProducts([...someArr]);
        }


    }, [currentIndexAll])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "casual");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allCasuals.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexCasuals + 3);
            setAllCasuals([...someArr]);
        }
    }, [currentIndexCasuals])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "backpack");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allBackpacks.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexBackpacks + 3);
            setAllBackpacks([...someArr]);
        }
    }, [currentIndexBackpacks])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "kimono");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allKimonos.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexKimonos + 3);
            setAllKimonos([...someArr]);
        }
    }, [currentIndexKimonos])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "belt");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allBelts.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexBelts + 3);
            setAllBelts([...someArr]);
        }
    }, [currentIndexBelts])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "case");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allCovers.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexCovers + 3);
            setAllCovers([...someArr]);
        }
    }, [currentIndexCovers])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "protection");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allProtections.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexProtections + 3);
            setAllProtections([...someArr]);
        }
    }, [currentIndexProtections])

    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === "support");

        if ( filteredProducts.length > 0 &&  filteredProducts.length > allSupports.length  ) {
            const someArr = filteredProducts.slice(0, currentIndexSupports + 3);
            setAllSupports([...someArr]);
        }
    }, [currentIndexSupports])

    const handleShowMoreAll = () => {
        const newIndex = currentIndexAll + 3;
        setCurrentIndexAll(newIndex >= products.length ? products.length : newIndex);
    };

    const handleShowMoreCasuals = () => {
        const filteredProducts = products.filter((item) => item.category === "casual");
        const newIndex = currentIndexCasuals + 3;
        setCurrentIndexCasuals(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    const handleShowMoreBackpacks = () => {
        const filteredProducts = products.filter((item) => item.category === "backpack");
        const newIndex = currentIndexBackpacks + 3;
        setCurrentIndexBackpacks(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    const handleShowMoreKimonos = () => {
        const filteredProducts = products.filter((item) => item.category === "kimono");
        const newIndex = currentIndexKimonos + 3;
        setCurrentIndexKimonos(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    const handleShowMoreBelts = () => {
        const filteredProducts = products.filter((item) => item.category === "belt");
        const newIndex = currentIndexBelts + 3;
        setCurrentIndexBelts(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    const handleShowMoreCovers = () => {
        const filteredProducts = products.filter((item) => item.category === "case");
        const newIndex = currentIndexCovers + 3;
        setCurrentIndexCovers(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    const handleShowMoreProtections = () => {
        const filteredProducts = products.filter((item) => item.category === "protection");
        const newIndex = currentIndexProtections + 3;
        setCurrentIndexProtections(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    const handleShowMoreSupports = () => {
        const filteredProducts = products.filter((item) => item.category === "support");
        const newIndex = currentIndexSupports + 3;
        setCurrentIndexSupports(newIndex >= filteredProducts.length ? 0 : newIndex);
    };

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("shop")}</h3>
                    <Tab.Container  defaultActiveKey="all" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                        <Nav className={s.tabsList}>
                            <Nav.Item>
                                <Nav.Link eventKey="all" className={cn(s.tab, { [s.active]: activeKey === "all" })}>{t("all")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="casual"  className={cn(s.tab, { [s.active]: activeKey === "casual" })}>{t("clothes")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="backpacks" className={cn(s.tab, { [s.active]: activeKey === "backpacks" })}>{t("backpacks")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="kimonos" className={cn(s.tab, { [s.active]: activeKey === "kimonos" })}>{t("kimono")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="belts" className={cn(s.tab, { [s.active]: activeKey === "belts" })}>{t("belts")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="covers" className={cn(s.tab, { [s.active]: activeKey === "covers" })}>{t("covers")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="protection" className={cn(s.tab, { [s.active]: activeKey === "protection" })}>{t("protection")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="support" className={cn(s.tab, { [s.active]: activeKey === "support" })}>{t("support")}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="all">
                                <div className={s.content}>
                                    {allProducts.length > 0 && allProducts.map((productItem) => <ProductCard key={productItem.id}
                                                                                                       productItem={productItem}/>)}
                                </div>
                                {(allProducts.length !== products.length) &&  <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreAll}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="casual">
                                <div className={s.content}>
                                    {allCasuals.length > 0 && allCasuals.map((productItem) => <ProductCard key={productItem.id}
                                                                                                             productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreCasuals}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                            <Tab.Pane eventKey="backpacks">
                                <div className={s.content}>
                                    {allBackpacks.length > 0 && allBackpacks.map((productItem) => <ProductCard key={productItem.id}
                                                                                                           productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreBackpacks}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                            <Tab.Pane eventKey="kimonos">
                                <div className={s.content}>
                                    {allKimonos.length > 0 && allKimonos.map((productItem) => <ProductCard key={productItem.id}
                                                                                                               productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreKimonos}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                            <Tab.Pane eventKey="belts">
                                <div className={s.content}>
                                    {allBelts.length > 0 && allBelts.map((productItem) => <ProductCard key={productItem.id}
                                                                                                           productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreBelts}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                            <Tab.Pane eventKey="covers">
                                <div className={s.content}>
                                    {allCovers.length > 0 && allCovers.map((productItem) => <ProductCard key={productItem.id}
                                                                                                       productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreCovers}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                            <Tab.Pane eventKey="protection">
                                <div className={s.content}>
                                    {allProtections.length > 0 && allProtections.map((productItem) => <ProductCard key={productItem.id}
                                                                                                         productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreProtections}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                            <Tab.Pane eventKey="support">
                                <div className={s.content}>
                                    {allSupports.length > 0 && allSupports.map((productItem) => <ProductCard key={productItem.id}
                                                                                                                   productItem={productItem}/>)}
                                </div>
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                                    <CustomButton onClick={handleShowMoreSupports}>{t("showMore")}</CustomButton>
                                </Stack>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
};

export default ShopPage;
