import { FC, ReactNode, MouseEvent } from 'react';
import s from "./CustomButton.module.scss";

interface CustomButtonProps {
    children:ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC<CustomButtonProps> = ({ children, onClick, ...props}) => {
    return (
        <button className={s.btn} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;
