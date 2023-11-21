import s from "./GalleryPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";
import {useEffect, useState} from "react";
import GalleryCard from "../../components/GalleryCard";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newsArray, setNewsArray] = useState([]);

    useEffect(() => {
        if (newsData.length > 0 && newsData.length > newsArray.length  ) {
            const someArr = newsData.slice(0, currentIndex + 6);
            setNewsArray([...someArr]);
        }
    }, [currentIndex])


    const handleShowMore = () => {
        const newIndex = currentIndex + 6;
        setCurrentIndex(newIndex >= newsData.length ? 0 : newIndex);
    };


    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>ГАЛЕРЕЯ</h3>
                    <div className={s.content}>
                        {newsArray.length> 0 && newsArray.map((newsItem, index) => (
                            <GalleryCard key={`${newsItem.url}-${index}`} newsItem={newsItem}/>
                        ))}
                    </div>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                        <CustomButton onClick={handleShowMore}>ПОКАЗАТИ БІЛЬШЕ</CustomButton>
                    </Stack>
                </div>
            </Container>
        </>
    );
};

export default GalleryPage;
