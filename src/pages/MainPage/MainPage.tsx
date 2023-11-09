import {FC} from "react";
import {Container, Image, Stack} from "react-bootstrap";
import TheHeader from "../../components/TheHeader";
import CustomButton from "../../components/CustomButton";
import roundText from "../../assets/images/roundText.png";
import lightning from "../../assets/images/lightning.png";
import boy1 from "../../assets/images/boy-1.webm";
import boy2 from "../../assets/images/boy-2.webm";
import build from "../../assets/images/build.png";
import arch from "../../assets/images/arch.png";
import volcano from "../../assets/images/welcome-vulcano.svg";
import cloudL from "../../assets/images/cloud-l.png";
import cloudRt from "../../assets/images/cloud-rt.png";
import cloudRb from "../../assets/images/cloud-rb.png";
import s from "./MainPage.module.scss";

interface MainPageProps {
    scrollActions: {
        scrollAbout : () => void,
        scrollTeam : () => void,
        scrollGyms : () => void,
        scrollGallery : () => void,
        scrollShop : () => void,
        scrollContacts : () => void,
    }
}

const MainPage: FC<MainPageProps> = ({scrollActions}) => {
    return (
        <div className={s.wrapper}>
            <Container style={{border:"2px solid black"}}>
                <TheHeader scrollActions={scrollActions}/>
                <div className="position-relative" style={{width: "900px"}}>

                    <div className="border-black border-2" style={{height: "256px", marginBottom:"34px"}}>
                    <h3 style={{fontFamily: "'Gagalin', sans-serif", fontSize: "128px",  letterSpacing:"7%"}}>КІОКУШИНКАЙ</h3>
                    <h3 style={{fontFamily: "'Gagalin', sans-serif", fontSize: "128px",  letterSpacing:"7%", position:"absolute", top:"110px", left:"0"}}>КАРАТЕ</h3>
                    </div>
                    <p style={{fontSize:"18px", width:"460px", marginBottom:"52px", }}>
                        Запрошуємо на навчання до київського клубу Кіокушинкай карате Місак Доджо
                    </p>
                    <CustomButton onClick={() => console.log(1)} label="ХОЧУ СТАТИ КАРАТИСТОМ/-КОЮ" styles={{maxWidth:"342px"}} disabled={true}/>

                    <video className={s.boy1} autoPlay loop muted src={boy1}>
                    </video>
                    <video className={s.boy2} autoPlay loop muted src={boy2}>
                    </video>
                </div>
            </Container>
            <div className={s.logoContainer}>
                <Image className={s.AppLogo} src={roundText} />
                <Image src={lightning} style={{ width: "49px", height: "49px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            </div>
            {/*<Image className={s.build} src={build}/>*/}
            {/*<Image className={s.arch} src={arch}/>*/}
            {/*<Image className={s.volcano} src={volcano}/>*/}
            {/*<Image className={s.cloudL} src={cloudL}/>*/}
            {/*<Image className={s.cloudRb} src={cloudRb}/>*/}
            {/*<Image className={s.cloudRt} src={cloudRt}/>*/}
        </div>
    );
};

export default MainPage;
