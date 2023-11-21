import s from "./ShopPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import cn from "classnames";



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
    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>МАГАЗИН</h3>
                    <div className={s.tabsList}>
                        <div className={cn(s.tab, s.active)}>Все</div>
                        <div className={s.tab}>Повсякденний одяг</div>
                        <div className={s.tab}>Рюкзаки</div>
                        <div className={s.tab}>Кімоно</div>
                        <div className={s.tab}>Пояси</div>
                        <div className={s.tab}>Чохли</div>
                    </div>
                    <div className={s.content}>
                        {newsData.length > 0 && newsData.map((productItem) => <ProductCard key={productItem.url}
                                                                                           productItem={productItem}/>)}
                    </div>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                        <CustomButton onClick={() => console.log("show more")}>ПОКАЗАТИ БІЛЬШЕ</CustomButton>
                    </Stack>
                </div>
            </Container>
        </>
    );
};

export default ShopPage;
