import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";

import Layout from "../pages/Layout";
import i18n from "i18next";
import PrivacyPolicyPageUA from "../pages/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageEN from "../pages/PrivacyPolicyPage/PrivacyPolicyPageEN";
import {useEffect, useState} from "react";

const AppRouter = () => {
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");

    useEffect(() => {
        if (currentLanguage) {
            console.log(currentLanguage);
            setLanguage(currentLanguage);
        }
    }, [currentLanguage]);



    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    {language === "ua" && <Route path="privacy-policy" element={<PrivacyPolicyPageUA />} />}
                    {language === "en" && <Route path="privacy-policy" element={<PrivacyPolicyPageEN />} />}
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;