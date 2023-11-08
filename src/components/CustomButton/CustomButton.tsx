import { FC, CSSProperties, ReactNode, MouseEventHandler } from 'react';
import {Button} from "react-bootstrap";
import cn from "classnames";
import s from "./CustomButton.module.scss";



interface CustomButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    styles?: CSSProperties;
    label: ReactNode;
}


const CustomButton: FC<CustomButtonProps> = ({onClick, label, styles}) => {
    return (
        <Button onClick={onClick} style={styles} className={cn("bg-primary rounded-2 border-dark border-2", s.btn)}>
            {label}
        </Button>
    );
};

export default CustomButton;
