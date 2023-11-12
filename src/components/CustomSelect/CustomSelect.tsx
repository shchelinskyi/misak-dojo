import {Image} from "react-bootstrap";
import s from "./CustomSelect.module.scss";
import iconSelect from "../../assets/images/main/select-flag.png";


const CustomSelect = () => {
    return (
        <div className={s.selectContainer}>
            <select className={s.selectBox}>
                <option value="ua" defaultValue="ua">UA</option>
                <option value="ru">RU</option>
                <option value="eng">ENG</option>
            </select>
            <div className={s.iconContainer}>
                <Image className={s.selectIcon} src={iconSelect} />
            </div>
        </div>
    );
};

export default CustomSelect;
