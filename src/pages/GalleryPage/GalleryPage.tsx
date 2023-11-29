import s from "./GalleryPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";
import {useEffect, useState} from "react";
import GalleryCard from "../../components/GalleryCard";
import {useTranslation} from "react-i18next";
import {gallery} from "../../utils/gallery";

const newsData = [
    {
        url: "src/assets/images/news1.png",
        date: "23.12.2022",
        title: {
            en:"4th Kyokushinkai karate cup in the kata section",
            ru:"4-й кубок с Киокушинкой каратэ в разделе ката",
            ua:"4-й кубок з Кіокушинкай карате в розділі ката",
        }
    },
    {
        url: "src/assets/images/news2.png",
        date: "23.12.2022",
        title: {
            en:"Kata Championship",
            ru:"Чемпионат по ката",
            ua:"Чемпіонат з ката",
        }
    },
    {
        url: "src/assets/images/news3.png",
        date: "23.12.2022",
        title: {
            en:"Kumite at Taifu Dojo. Visiting Georgy Dolinin. Breweries",
            ru:"Кумите в «Тайфу доджо». В гостях у Георгия Долинина. Бровары",
            ua:"Куміте в «Тайфу доджо». В гостях у Георгія Долініна. Бровари",
        }
    },
    {
        url: "src/assets/images/news4.png",
        date: "23.12.2022",
        title: {
            en:"Kumite marathon",
            ru:"Кумите марафон",
            ua:"Куміте марафон",
        }
    },
    {
        url: "src/assets/images/news5.png",
        date: "23.12.2022",
        title: {
            en:"4th Kyokushinkai karate cup in the kata section",
            ru:"4-й кубок с Киокушинкой каратэ в разделе ката",
            ua:"4-й кубок з Кіокушинкай карате в розділі ката",
        }
    },
    {
        url: "src/assets/images/news6.png",
        date: "23.12.2022",
        title: {
            en:"\"Mamuka Dojo 2021\" Cup. Khvyla sanatorium",
            ru:"Кубок «Мамука Доджо 2021». Санаторий Волна",
            ua:"Кубок «Мамука доджо 2021». Санаторій Хвиля",
        }
    },
]


const GalleryPage = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryArray, setGalleryArray] = useState([]);

    useEffect(() => {
        if (gallery.length > 0 && gallery.length > galleryArray.length  ) {
            const someArr = gallery.slice(0, currentIndex + 6);
            setGalleryArray([...someArr]);
        }
    }, [currentIndex])


    const handleShowMore = () => {
        const newIndex = currentIndex + 6;
        setCurrentIndex(newIndex >= gallery.length ? 0 : newIndex);
    };


    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("gallery")}</h3>
                    <div className={s.content}>
                        {gallery.length> 0 && gallery.map((galleryItem) => (
                            <GalleryCard key={galleryItem.title.en} galleryItem={galleryItem}/>
                        ))}
                    </div>
                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                        <CustomButton onClick={handleShowMore}>{t("showMore")}</CustomButton>
                    </Stack>
                </div>
            </Container>
        </>
    );
};

export default GalleryPage;
