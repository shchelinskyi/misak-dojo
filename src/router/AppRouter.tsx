import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";

import Layout from "../pages/Layout";
import i18n from "i18next";
import PrivacyPolicyPageUA from "../pages/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageEN from "../pages/PrivacyPolicyPage/PrivacyPolicyPageEN";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import PrivacyPolicyPageRU from "../pages/PrivacyPolicyPage/PrivacyPolicyPageRU";

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
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;