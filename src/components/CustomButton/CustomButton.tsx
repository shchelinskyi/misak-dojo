import { FC, CSSProperties, ReactNode, MouseEventHandler } from 'react';
import {Button, ButtonProps} from "react-bootstrap";
import styled from 'styled-components';
import s from "./CustomButton.module.scss";

const CustomStyledButton = styled(Button)`
  position:relative;
  border:2px solid black;
  background-color: #E1251B;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color:#ffffff;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  transition: 0.25s;
  
  &::after {
    //background-color: black;
    border-bottom: 4px solid black;
    border-right: 4px solid black;
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    right:-3px;
    bottom:-3px;
    z-index:-1;
    border-radius: 5px;
  }

  &:hover::after {
    border: none;
  }

  &:hover {
    background-color: #E1251B;
    border: 2px solid black;
  }
  
  &:active {
    background-color: black!important;
    border:none;
  }
  
  &:disabled {
    background-color: #CDCBCA!important;
    //border:none;
  }
`;



interface CustomButtonProps extends ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    styles?: CSSProperties;
    label?: ReactNode;
    children?:ReactNode;
}


const CustomButton: FC<CustomButtonProps> = ({onClick, label, styles, children, ...props}) => {
    return (
        <button className={s.btn} onClick={onClick} style={styles} {...props}>
            {label ? label : children}
        </button>
    );
};

export default CustomButton;
