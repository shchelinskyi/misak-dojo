import {Image} from "react-bootstrap";
import s from "./CustomSelect.module.scss";
import iconSelect from "../../assets/images/main/select-flag.webp";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


const CustomSelect = () => {
    const {i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'ua');

    useEffect(() => {
        setSelectedLanguage(i18n.language || 'ua');
    }, [i18n.language]);


    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    };

    return (
        <div className={s.selectContainer}>
            <select value={selectedLanguage} className={s.selectBox} onChange={handleLanguageChange}>
                <option value="ua">UA</option>
                <option value="ru">RU</option>
                <option value="en">ENG</option>
            </select>
            <div className={s.iconContainer} style={{ right: selectedLanguage === "en" ? "-5px" : undefined }}>
                <Image className={s.selectIcon} src={iconSelect}/>
            </div>
        </div>
    );
};

export default CustomSelect;
