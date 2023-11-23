import s from "./ShopPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import cn from "classnames";
import {useTranslation} from "react-i18next";



const newsData = [
    {
        url: "src/assets/images/t-shirt.png",
        title: "Футболка Misak Dojo",
        price: "390"
    },
    {
        url: "src/assets/images/belt.png",
        title: "Кольоровий пояс для кімоно Шинкіокушикай карате",
        price: "250"
    },
    {
        url: "src/assets/images/kimono.png",
        title: "Кімоно з символікою школи карате Misak Dojo",
        price: "390"
    }
]

const linkArr = [
    {
        title: "Словник термінів Кіокушинкай карате", link: ""
    },
    {
        title: "Принципи каратиста", link: ""
    },
    {
        title: "Доджо кун Кіокушинкай карате", link: ""
    },
    {
        title: "Етикет доджо Кіокушинкай карате", link: ""
    },
    {
        title: "Біографія Масутацу Оями", link: ""
    },
    {
        title: "Екзаменаційні вимоги WKO", link: ""
    },
    {
        title: "Правила поведінки в доджо", link: ""
    },
    {
        title: "Правила змагань Кіокушинкай", link: ""
    },
    {
        title: "Kyokushinkai karate WKO", link: ""
    },
    {
        title: "Значення поясів Кіокушинкай", link: ""
    },
]



const ShopPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("shop")}</h3>
                    <div className={s.tabsList}>
                        <div className={cn(s.tab, s.active)}>{t("all")}</div>
                        <div className={s.tab}>{t("clothes")}</div>
                        <div className={s.tab}>{t("backpacks")}</div>
                        <div className={s.tab}>{t("kimono")}</div>
                        <div className={s.tab}>{t("belts")}</div>
                        <div className={s.tab}>{t("covers")}</div>
                    </div>
                    <div className={s.content}>
                        {newsData.length > 0 && newsData.map((productItem) => <ProductCard key={productItem.url}
                                                                                           productItem={productItem}/>)}
                    </div>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                        <CustomButton onClick={() => console.log("show more")}>{t("showMore")}</CustomButton>
                    </Stack>
                </div>
            </Container>
        </>
    );
};

export default ShopPage;
