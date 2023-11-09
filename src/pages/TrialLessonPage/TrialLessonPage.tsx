import s from "./TrialLessonPage.module.scss";
import girl from "../../assets/images/girl.png";
import boy from "../../assets/images/boy.png";
import cloudLeft from "../../assets/images/cloud-trial-left.png";
import cloudRT from "../../assets/images/cloud-trial-rt.png";
import cloudRB from "../../assets/images/cloud-trial-rb.png";
import CustomButton from "../../components/CustomButton";
import {Image} from "react-bootstrap";

const TrialLessonPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.block}>
                    <Image className={s.girlImg} src={girl}/>
                    <div className={s.centerItem}>
                        <h5 className={s.centerItemTitle}>БЕЗКОШТОВНЕ <br/> ПРОБНЕ ЗАНЯТТЯ</h5>
                        <p className={s.centerItemDescription}>Якщо сумніваєшся, приходь на пробне тренування <br/>
                            та випробуй свої сили разом з нами!</p>
                        <CustomButton onClick={() => console.log("check")} label="записатися на заняття" styles={{maxWidth:"292px", alignSelf:"center"}}/>
                    </div>
                    <Image className={s.boyImg} src={boy}/>
                </div>
            </div>
            <Image className={s.cloudLeftImg} src={cloudLeft}/>
            <Image className={s.cloudRightTopImg} src={cloudRT}/>
            <Image className={s.cloudRightBottomImg} src={cloudRB}/>
        </div>
    );
};

export default TrialLessonPage;
