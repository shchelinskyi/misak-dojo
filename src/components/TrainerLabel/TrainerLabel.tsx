import {FC} from 'react';
import line from "../../assets/images/line.png";
import s from "./TrainerLabel.module.scss";
import {Image} from "react-bootstrap";
import cn from "classnames";

interface TrainerLabelProps {
    name: string,
    rank: string,
    mainTrainer?: boolean

}

const TrainerLabel: FC<TrainerLabelProps> = ({name, rank, mainTrainer}) => {
    return (
        <div className={s.container}>
            <div className={cn(s.itemWrapper,{[s.mainTrainer]: mainTrainer})}>
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
