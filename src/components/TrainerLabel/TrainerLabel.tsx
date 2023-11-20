import {FC} from 'react';
import line from "../../assets/images/line.png";
import s from "./TrainerLabel.module.scss";
import {Image} from "react-bootstrap";
import cn from "classnames";

interface TrainerLabelProps {
    name: string,
    rank: string,

}

const TrainerLabel: FC<TrainerLabelProps> = ({name, rank}) => {
    return (
        <div className={s.container}>
            <div className={s.itemWrapper}>
                <p className={s.itemText}>{name}</p>
                <Image className={s.lineIcon} src={line}/>
                <p className={cn(s.itemText, s.hideText)}>{rank}</p>
            </div>
            <div className={s.rankWrapper}>
                {rank}
            </div>
        </div>
    );
};

export default TrainerLabel;
