import s from "./GalleryPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";

const newsData = [
    {
        url: "src/assets/images/news1.png",
        date: "23.12.2022",
        title: "4-й кубок з Кіокушинкай карате в розділі ката",
    },
    {
        url: "src/assets/images/news2.png",
        date: "23.12.2022",
        title: "Чемпіонат з ката",
    },
    {
        url: "src/assets/images/news3.png",
        date: "23.12.2022",
        title: "Куміте в «Тайфу доджо». В гостях у Георгія Долініна. Бровари",
    },
    {
        url: "src/assets/images/news4.png",
        date: "23.12.2022",
        title: "Куміте марафон",
    },
    {
        url: "src/assets/images/news5.png",
        date: "23.12.2022",
        title: "4-й кубок з Кіокушинкай карате в розділі ката",
    },
    {
        url: "src/assets/images/news6.png",
        date: "23.12.2022",
        title: "Кубок «Мамука доджо 2021». Санаторій Хвиля",
    },
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

const GalleryPage = () => {
    return (
        <>
            <Container className={s.wrapper}>
                <Container className="position-relative">
                    <h3 className={s.title}>ГАЛЕРЕЯ</h3>
                    <Stack direction="horizontal"
                           style={{justifyContent: "space-between", alignItems: "flex-start", rowGap:"20px", flexWrap:"wrap"}}>
                        {newsData.length > 0 && newsData.map((newsItem) => <NewsCard key={newsItem.url}
                                                                                     newsItem={newsItem}/>)}
                    </Stack>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop:"70px"}}>
                        <CustomButton onClick={() => console.log("show more")} label="ПОКАЗАТИ БІЛЬШЕ"/>
                    </Stack>
                </Container>
            </Container>
        </>
    );
};

export default GalleryPage;
