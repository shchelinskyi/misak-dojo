import s from "./TheFooter.module.scss";
import {Container, Stack, Image} from "react-bootstrap";
import visaIcon from "../../assets/images/footer/visa.svg";
import masterCard from "../../assets/images/footer/mastercard.svg";
import cn from "classnames"

const TheFooter = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.contentBlock}>
                <div className={cn(s.footerContent, s.order2)}>
                    <div className={cn(s.column, s.links)}>
                        <p className={s.textContent}>Дизайн: <span className={s.link}>Посилання</span></p>
                        <p className={s.textContent}>Розробка: <span className={s.link}>Посилання</span></p>
                    </div>
                </div>
                <div className={cn(s.footerContent, s.order3)}>
                    <div className={cn(s.column,s.rightBlock)}>
                        <p className={s.textRightReserve}>© Misak Dojo, 2023</p>
                        <p className={s.textRightReserve}>Всі права захищені.</p>
                    </div>
                </div>
                <div className={cn(s.footerContent, s.order1)}>
                    <div className={s.column}>
                        <div className={s.iconBlock}>
                            <Image className={s.visaIcon} src={visaIcon}/>
                            <Image className={s.masterCardIcon} src={masterCard}/>
                        </div>
                        <p className={s.textRightReserve}>Угода користувача</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheFooter;
