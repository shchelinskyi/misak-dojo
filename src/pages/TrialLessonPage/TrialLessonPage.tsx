import s from "./TrialLessonPage.module.scss";
import girl from "../../assets/images/trial/girl.svg";
import boy from "../../assets/images/trial/boy.svg";
import cloudLeft from "../../assets/images/trial/cloud-trial-left.svg";
import cloudRT from "../../assets/images/trial/cloud-trial-rt.svg";
import cloudRB from "../../assets/images/trial/cloud-trial-rb.svg";
import CustomButton from "../../components/CustomButton";
import {Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const TrialLessonPage = () => {
    const { t } = useTranslation();
    return (
            <div className={s.container}>
                <div className={s.block}>
                    <Image className={s.girlImg} src={girl}/>
                    <div className={s.centerItem}>
                        <h5 className={s.centerItemTitle}>{t("free")} <br/> {t("freeTask")}</h5>
                        <p className={s.centerItemDescription}>{t("freeSlogan1")} <br/>
                            {t("freeSlogan2")}</p>
                        <div className={s.btnBlock}>
                            <CustomButton onClick={() => console.log("check")}> {t("signUpforClasses")}</CustomButton>
                        </div>
                        <Image className={s.cloudLeftImg} src={cloudLeft}/>
                        <Image className={s.cloudRightTopImg} src={cloudRT}/>
                        <Image className={s.cloudRightBottomImg} src={cloudRB}/>
                    </div>
                    <Image className={s.boyImg} src={boy}/>

                </div>
            </div>
    );
};

export default TrialLessonPage;
