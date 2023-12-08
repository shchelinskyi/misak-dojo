import {useState} from "react";
import {useTranslation} from "react-i18next";
import {newsData} from "../../utils/news";
import {Container, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import s from "./NewsPage.module.scss"

const NewsPage = () => {
    const { t } = useTranslation();
    const itemsPerPage = 3;
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

    const handleShowMore = () => {
        const totalItems = Object.values(newsData).length;
        setVisibleItems((prev) => Math.min(prev + itemsPerPage, totalItems));
    };

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("news")}</h3>
                    <div className={s.content}>
                        {Object.values(newsData)
                            .slice(0, visibleItems)
                            .map((newsItem) => (<NewsCard key={newsItem.title.en} newsItem={newsItem}/>))
                        }
                    </div>
                    {visibleItems < Object.values(newsData).length && (
                        <Stack direction="horizontal" style={{ justifyContent: "center", marginTop: "70px" }}>
                            <CustomButton onClick={handleShowMore}>{t("showMore")}</CustomButton>
                        </Stack>
                    )}
                </div>
            </Container>
        </>
    );
};

export default NewsPage;
