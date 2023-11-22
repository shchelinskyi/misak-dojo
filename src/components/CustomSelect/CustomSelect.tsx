import {Image} from "react-bootstrap";
import s from "./CustomSelect.module.scss";
import iconSelect from "../../assets/images/main/select-flag.png";
import {useTranslation} from "react-i18next";


const CustomSelect = () => {

    const {i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    };

    return (
        <div className={s.selectContainer}>
            <select className={s.selectBox} onChange={handleLanguageChange}>
                <option value="ua" defaultValue="ua">UA</option>
                <option value="ru">RU</option>
                <option value="en">ENG</option>
            </select>
            <div className={s.iconContainer}>
                <Image className={s.selectIcon} src={iconSelect} />
            </div>
        </div>
    );
};

export default CustomSelect;
