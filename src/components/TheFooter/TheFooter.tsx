import s from "./TheFooter.module.scss";
import {Container, Stack, Image} from "react-bootstrap";
import visaIcon from "../../assets/images/visa.png";
import masterCard from "../../assets/images/mastercard.png";

const TheFooter = () => {
    return (
        <div className={s.wrapper}>
            <Container>
                <Stack direction="horizontal" style={{justifyContent:"space-between"}}>
                <div className={s.footerContent}>
                    <div className={s.column}>
                        <p className={s.textContent}>Дизайн: <span>Посилання</span></p>
                        <p className={s.textContent}>Розробка: <span>Посилання</span></p>
                    </div>
                </div>
                <div className={s.footerContent}>
                    <div className={s.column}>
                        <p className={s.textContent}>© Misak Dojo, 2023</p>
                        <p className={s.textContent}>Всі права захищені.</p>
                    </div>
                </div>
                <div className={s.footerContent}>
                    <div className={s.column}>
                        <div className={s.iconBlock}>
                            <Image className={s.visaIcon} src={visaIcon}/>
                            <Image className={s.masterCardIcon} src={masterCard}/>
                        </div>
                        <p className={s.textContent}>Угода користувача</p>
                    </div>
                </div>
                </Stack>
            </Container>

        </div>
    );
};

export default TheFooter;
