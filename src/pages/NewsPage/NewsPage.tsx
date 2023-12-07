import {useState} from "react";
import {useTranslation} from "react-i18next";
import {newsData} from "../../utils/news";
import {Container, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import OpenCup from "../../components/NewsCard/NewsItems/OpenCup";
import KumiteMarathon from "../../components/NewsCard/NewsItems/KumiteMarathon";
import SummerSchool31 from "../../components/NewsCard/NewsItems/SummerSchool31";
import ChildTraining from "../../components/NewsCard/NewsItems/ChildTraining";
import CoachDay from "../../components/NewsCard/NewsItems/CoachDay";
import KarateDay from "../../components/NewsCard/NewsItems/KarateDay";
import MeaningTerm from "../../components/NewsCard/NewsItems/MeaningTerm";
import SummerSchool32 from "../../components/NewsCard/NewsItems/SummerSchool32";
import Championship from "../../components/NewsCard/NewsItems/Championship";
import s from "./NewsPage.module.scss"

const getNewsItemComponent = (currentType) => {
    switch (currentType) {
        case "openCup":
            return <OpenCup />;
        case "kumiteMarathon":
            return <KumiteMarathon />;
        case "summerSchool31":
            return <SummerSchool31 />;
        case "childTraining":
            return <ChildTraining />;
        case "coachDay":
            return <CoachDay />;
        case "karateDay":
            return <KarateDay />;
        case "meaningTerm":
            return <MeaningTerm />;
        case "summerSchool32":
            return <SummerSchool32 />;
        case "championship":
            return <Championship />;
        default:
            return null;
    }
};

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
                            .map((newsItem) => (
                                <NewsCard key={newsItem.title.en} newsItem={newsItem}>
                                    {getNewsItemComponent(newsItem.type)}
                                </NewsCard>
                            ))}
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
