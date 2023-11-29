import s from "./GalleryPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";
import {useEffect, useState} from "react";
import GalleryCard from "../../components/GalleryCard";
import {useTranslation} from "react-i18next";
import {gallery} from "../../utils/gallery";

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
