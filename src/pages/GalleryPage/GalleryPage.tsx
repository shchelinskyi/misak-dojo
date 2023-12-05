import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Container, Stack} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import GalleryCard from "../../components/GalleryCard";
import {gallery} from "../../utils/gallery";
import s from "./GalleryPage.module.scss";


const GalleryPage = () => {
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryArray, setGalleryArray] = useState([]);

    useEffect(() => {
        if (gallery.length > 0 && gallery.length > galleryArray.length) {
            const someArr = gallery.slice(0, currentIndex + 3);
            setGalleryArray([...someArr]);
        }
    }, [currentIndex])


    const handleShowMore = () => {
        const newIndex = currentIndex + 3;
        setCurrentIndex(newIndex >= gallery.length ? 0 : newIndex);
    };


    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("gallery")}</h3>
                    <div className={s.content}>
                        {gallery.length > 0 && galleryArray.map((galleryItem) => (
                            <GalleryCard key={galleryItem.title.en} galleryItem={galleryItem}/>
                        ))}
                    </div>
                    {
                        (galleryArray.length !== gallery.length) &&
                        (<Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                            <CustomButton onClick={handleShowMore}>{t("showMore")}</CustomButton>
                        </Stack>)
                    }
                </div>
            </Container>
        </>
    );
};

export default GalleryPage;
