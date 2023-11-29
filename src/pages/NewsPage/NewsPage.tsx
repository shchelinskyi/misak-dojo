import s from "./NewsPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";
import {useTranslation} from "react-i18next";
import {newsData} from "../../utils/news";


const NewsPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("news")}</h3>
                    <div className={s.content}>
                        {newsData.length > 0 && newsData.map((newsItem) => <NewsCard key={newsItem.title.en}
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
