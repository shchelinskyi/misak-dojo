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
        title: {
            en:"Misak Dojo t-shirt",
            ru:"Футболка Misak Dojo",
            ua:"Футболка Misak Dojo",
        },
        price: "390"
    },
    {
        url: "src/assets/images/belt.png",
        title: {
            en:"Color belt for kimono Shinkyokushikai karate",
            ru:"Цветной пояс для кимоно Шинкиокушикай каратэ",
            ua:"Кольоровий пояс для кімоно Шинкіокушикай карате",
        },
        price: "250"
    },
    {
        url: "src/assets/images/kimono.png",
        title: {
            en:"Kimono with the symbols of the Misak Dojo karate school",
            ru:"Кимоно с символикой школы каратэ Misak Dojo",
            ua:"Кімоно з символікою школи карате Misak Dojo",
        },
        price: "390"
    }
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
