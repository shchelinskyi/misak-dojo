import { FC, ReactNode } from 'react';
import s from "./CustomButton.module.scss";
interface CustomButtonProps {
    children:ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ children, ...props}) => {
    return (
        <button className={s.btn} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;
