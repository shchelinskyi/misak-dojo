import s from "./NewsPage.module.scss"
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

const NewsPage = () => {
    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>НОВИНИ</h3>
                    <div className={s.content}>
                        {newsData.length > 0 && newsData.map((newsItem) => <NewsCard key={newsItem.url}
                                                                                     newsItem={newsItem}/>)}
                    </div>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                        <CustomButton>ПОКАЗАТИ БІЛЬШЕ</CustomButton>
                    </Stack>
                </div>
            </Container>
            <Container style={{maxWidth: "1328px"}}>
                <h3 className={s.title} style={{marginBottom: "100px"}}>ЩЕ ПОЧИТАТИ</h3>
                <Stack className="position-relative" direction="horizontal" style={{gap: "20px", flexWrap:"wrap"}}>
                    {linkArr.length > 0 && linkArr.map((item) => {
                        return (
                            <Stack key={item.title} className={s.link} direction="horizontal" >
                                <div className={s.linkTitle}>{item.title}</div>
                                <Image className={s.iconPlus} src={plus}/>
                            </Stack>
                        )
                    })}
                <Image className={s.usefulIcon} src={useful}/>
                </Stack>
            </Container>
        </>
    );
};

export default NewsPage;
