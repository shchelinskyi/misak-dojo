import s from "./NewsPage.module.scss"
import {Container, Image, Stack} from "react-bootstrap";
import NewsCard from "../../components/NewsCard";
import CustomButton from "../../components/CustomButton";
import plus from "../../assets/images/plus.png";
import useful from "../../assets/images/useful.png";
import {useTranslation} from "react-i18next";
import {newsData} from "../../utils/news";
import OpenCup from "../../components/NewsCard/NewsItems/OpenCup";
import KumiteMarathon from "../../components/NewsCard/NewsItems/KumiteMarathon";
import SummerSchool31 from "../../components/NewsCard/NewsItems/SummerSchool31";
import React from "react";
import ChildTraining from "../../components/NewsCard/NewsItems/ChildTraining";
import CoachDay from "../../components/NewsCard/NewsItems/CoachDay";
import KarateDay from "../../components/NewsCard/NewsItems/KarateDay";
import MeaningTerm from "../../components/NewsCard/NewsItems/MeaningTerm";
import SummerSchool32 from "../../components/NewsCard/NewsItems/SummerSchool32";
import Championship from "../../components/NewsCard/NewsItems/Championship";


const NewsPage = () => {

    const {t} = useTranslation();

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("news")}</h3>
                    <div className={s.content}>
                        {/*{newsData.length > 0 && newsData.map((newsItem) => <NewsCard key={newsItem.title.en}*/}
                        {/*                                                             newsItem={newsItem}/>)}*/}
                        <NewsCard key={newsData.openCup.title.en} newsItem={newsData.openCup}>
                           <OpenCup/>
                        </NewsCard>
                        <NewsCard key={newsData.kumiteMarathon.title.en} newsItem={newsData.kumiteMarathon}>
                            <KumiteMarathon/>
                        </NewsCard>
                        <NewsCard key={newsData.summerSchool31.title.en} newsItem={newsData.summerSchool31}>
                            <SummerSchool31/>
                        </NewsCard>
                        <NewsCard key={newsData.coachDay.title.en} newsItem={newsData.coachDay}>
                            <CoachDay/>
                        </NewsCard>
                        <NewsCard key={newsData.childTraining.title.en} newsItem={newsData.childTraining}>
                            <ChildTraining/>
                        </NewsCard>
                        <NewsCard key={newsData.karateDay.title.en} newsItem={newsData.karateDay}>
                            <KarateDay/>
                        </NewsCard>
                        <NewsCard key={newsData.meaningTerm.title.en} newsItem={newsData.meaningTerm}>
                            <MeaningTerm/>
                        </NewsCard>
                        <NewsCard key={newsData.summerSchool32.title.en} newsItem={newsData.summerSchool32}>
                           <SummerSchool32/>
                        </NewsCard>
                        <NewsCard key={newsData.championship.title.en} newsItem={newsData.championship}>
                            <Championship/>
                        </NewsCard>
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
