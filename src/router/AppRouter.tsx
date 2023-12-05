import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../pages/Layout";
import i18n from "i18next";
import PrivacyPolicyPageUA from "../pages/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageEN from "../pages/PrivacyPolicyPage/PrivacyPolicyPageEN";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import PrivacyPolicyPageRU from "../pages/PrivacyPolicyPage/PrivacyPolicyPageRU";
import OpenCup from "../components/NewsCard/NewsItems/OpenCup";
import KumiteMarathon from "../components/NewsCard/NewsItems/KumiteMarathon";
import SummerSchool31 from "../components/NewsCard/NewsItems/SummerSchool31";
import ChildTraining from "../components/NewsCard/NewsItems/ChildTraining";
import CoachDay from "../components/NewsCard/NewsItems/CoachDay";
import KarateDay from "../components/NewsCard/NewsItems/KarateDay";
import MeaningTerm from "../components/NewsCard/NewsItems/MeaningTerm";
import SummerSchool32 from "../components/NewsCard/NewsItems/SummerSchool32";
import Championship from "../components/NewsCard/NewsItems/Championship";



const AppRouter = () => {
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");
    const [refData, setRefData] = useState(null);
    const {t} = useTranslation();
    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);




    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout refData={refData}/>}>
                    <Route index element={<Main setRefData={setRefData}/>}/>
                    {language === "ua" && <Route path="privacy-policy" element={<PrivacyPolicyPageUA/>}/>}
                    {language === "en" && <Route path="privacy-policy" element={<PrivacyPolicyPageEN/>}/>}
                    {language === "ru" && <Route path="privacy-policy" element={<PrivacyPolicyPageRU/>}/>}
                    <Route path="/news/openCup" element={<OpenCup />} />
                    <Route path="/news/kumiteMarathon" element={<KumiteMarathon />} />
                    <Route path="/news/summerSchool31" element={<SummerSchool31 />} />
                    <Route path="/news/childTraining" element={<ChildTraining />} />
                    <Route path="/news/coachDay" element={<CoachDay />} />
                    <Route path="/news/karateDay" element={<KarateDay />} />
                    <Route path="/news/meaningTerm" element={<MeaningTerm />} />
                    <Route path="/news/summerSchool32" element={<SummerSchool32 />} />
                    <Route path="/news/championship" element={<Championship />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;