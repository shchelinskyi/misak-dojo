import {FC, useEffect, useState} from "react";
import {Container, Image} from "react-bootstrap";
import TheHeader from "../../components/TheHeader";
import CustomButton from "../../components/CustomButton";
import roundText from "../../assets/images/roundText.png";
import lightning from "../../assets/images/lightning.png";
import volcano from "../../assets/images/main/volcano.png";
import cloudL from "../../assets/images/main/cloud-l.png";
import cloudRt from "../../assets/images/main/cloud-rt.png";
import cloudRb from "../../assets/images/main/cloud-rb.png";
import build from "../../assets/images/main/build.png";
import arch from "../../assets/images/main/arch.png";
import boy1 from "../../assets/images/main/boy1.gif";
import boy2 from "../../assets/images/main/boy2.gif";
import fingerDown from "../../assets/images/main/fingerDown.png";
import cn from "classnames";
import s from "./MainPage.module.scss";

interface IMainPageProps {
    scrollActions: {
        scrollAbout: () => void,
        scrollTeam: () => void,
        scrollGyms: () => void,
        scrollGallery: () => void,
        scrollShop: () => void,
        scrollContacts: () => void,
    }
}

const MainPage: FC<IMainPageProps> = ({scrollActions}) => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);

    const calculateParallax = (position, strength) => ({
        transform: `translate(${position.x / strength}px, ${position.y / strength}px)`,
    });

    return (
        <div className={s.wrapper}>
            <Container className={s.contentContainer}>
                <TheHeader scrollActions={scrollActions}/>
                <div className="position-relative" style={{width: "900px"}}>
                    <div className={s.titleWrapper} style={{height: "256px", marginBottom: "34px"}}>
                        <h3 className={s.mainTitle}>КІОКУШИНКАЙ</h3>
                        <h3 className={cn(s.mainTitle, s.secondLine)}>КАРАТЕ</h3>
                    </div>
                    <p className={s.offerContent}>
                        Запрошуємо на навчання до київського клубу Кіокушинкай карате Місак Доджо
                    </p>
                    <CustomButton onClick={() => console.log(1)} styles={{maxWidth: "342px"}}>ХОЧУ СТАТИ
                        КАРАТИСТОМ/-КОЮ</CustomButton>
                </div>
                <div className={s.logoContainer}>
                    <Image className={s.roundText} src={roundText}/>
                    <Image className={s.lightning} src={lightning}/>
                </div>
                <Image className={s.boy1} src={boy1} style={calculateParallax(mousePosition, 50)}/>
                <Image className={s.boy2} src={boy2} style={calculateParallax(mousePosition, -50)}/>
                <Image className={s.build} src={build}/>
                <Image className={s.arch} src={arch}/>
                <Image className={s.volcano} src={volcano}/>
                <Image className={s.cloudRt} src={cloudRt}/>
                <Image className={s.cloudRb} src={cloudRb}/>
                <Image className={s.cloudL} src={cloudL}/>
                <div className={s.moreItem}>
                    <p className={s.fingerText}>Більше</p>
                    <Image src={fingerDown} style={{width:"35px"}}/>
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
