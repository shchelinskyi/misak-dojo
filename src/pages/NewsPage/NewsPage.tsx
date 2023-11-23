import s from "./NewsPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";
import {useTranslation} from "react-i18next";

const newsData = [
    {
        url: "src/assets/images/news1.png",
        date: "23.12.2022",
        title: {
            "en":"4th Kyokushinkai karate cup in the kata section",
            "ru":"4-й кубок с Киокушинкой каратэ в разделе ката",
            "ua":"4-й кубок з Кіокушинкай карате в розділі ката",
        }
    },
    {
        url: "src/assets/images/news2.png",
        date: "23.12.2022",
        title: {
            "en":"Kata Championship",
            "ru":"Чемпионат по ката",
            "ua":"Чемпіонат з ката",
        }
    },
    {
        url: "src/assets/images/news3.png",
        date: "23.12.2022",
        title: {
            "en":"Kumite at Taifu Dojo. Visiting Georgy Dolinin. Breweries",
            "ru":"Кумите в «Тайфу доджо». В гостях у Георгия Долинина. Бровары",
            "ua":"Куміте в «Тайфу доджо». В гостях у Георгія Долініна. Бровари",
        }
    }
]


const NewsPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("news")}</h3>
                    <div className={s.content}>
                        {newsData.length > 0 && newsData.map((newsItem) => <NewsCard key={newsItem.url}
                                                                                     newsItem={newsItem}/>)}
                    </div>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                        <CustomButton>{t("showMore")}</CustomButton>
                    </Stack>
                </div>
            </Container>

        </>
    );
};

export default NewsPage;
