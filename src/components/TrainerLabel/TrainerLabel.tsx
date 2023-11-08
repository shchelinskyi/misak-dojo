import {FC} from 'react';
import line from "../../assets/images/line.png";
import s from "./TrainerLabel.module.scss";
import {Image} from "react-bootstrap";

interface TrainerLabelProps {
    name:string,
    rank:string,

}
const TrainerLabel:FC<TrainerLabelProps> = ({name, rank}) => {
    return (
        <div className={s.itemWrapper}>
            <p className={s.itemText}>{name}</p>
            <Image className={s.lineIcon} src={line}/>
            <p className={s.itemText}>{rank}</p>
        </div>
    );
};

export default TrainerLabel;
