import {Container, Image, Stack} from "react-bootstrap";
import members from "../../assets/images/about/members.svg";
import heart from "../../assets/images/about/heart.svg";
import handL from "../../assets/images/about/handL.svg";
import handR from "../../assets/images/about/handR.svg";
import person from "../../assets/images/about/person.svg";
import stars from "../../assets/images/about/stars.svg";
import stars2 from "../../assets/images/about/stars2.svg";
import about1 from "../../assets/images/about/about1.svg";
import about12 from "../../assets/images/about/about12.svg";
import about13 from "../../assets/images/about/about13.svg";
import about14 from "../../assets/images/about/about14.svg";
import about2 from "../../assets/images/about/about2.svg";
import smiles from "../../assets/images/about/smiles.svg";
import line from "../../assets/images/about/line.svg";
import line2 from "../../assets/images/about/line2.svg";
import chimano from "../../assets/images/about/chimano.svg";
import cup from "../../assets/images/about/cup.svg";
import karate from "../../assets/video/karate.mp4";
import titleTeam from "../../assets/images/about/title-team.svg";
import s from "./AboutPage.module.scss";
import cn from "classnames";
import {useTranslation} from "react-i18next";


const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <Container>
                <Container>
                    <div className={s.sloganWrapper}>
                        {t('slogan1')}
                        <Image className={s.membersIcon} src={members}/>
                        {t('slogan2')}
                        <span className={cn(s.slogan, s.dojo)}>{t('slogan3')}</span>
                        <Image className={s.heartIcon} src={heart}/>
                        {t('slogan4')}
                        <span>
                            <Image className={s.handLIcon} src={handL}/>
                            <Image className={s.personIcon} src={person}/>
                            <Image className={s.handRIcon} src={handR}/>
                        </span>
                    </div>
                </Container>

                <div className={s.aboutWrapper}>
                    <div className={s.aboutContent}>
                        <h3 className={s.aboutTitle}>{t('aboutUs')}</h3>
                        <p className={s.mainText} style={{marginBottom: "40px"}}>
                            {t("aboutText1")}
                        </p>
                        <p className={s.mainText}>
                            {t("aboutText2")}
                        </p>
                        <Image className={s.starsImg} src={stars}/>
                        <Image className={s.starsImg2} src={stars2}/>
                    </div>
                    <div className={s.imageWrapper}>
                        <Image className={s.aboutImg1} src={about1}/>
                        <Image className={s.aboutImg12} src={about12}/>
                        <Image className={s.aboutImg13} src={about13}/>
                        <Image className={s.aboutImg2} src={about2}/>
                        <Image className={s.aboutImg14} src={about14}/>
                    </div>
                </div>

                <Container style={{marginTop: "18px", marginBottom: "170px"}}>
                    <div className={s.totalContainer}>

                        <div className={s.totalItem}>
                            <div className={s.numberWrapper}>
                                <h3 className={s.totalNumber}>70</h3>
                                <Image className={s.smilesIcon} src={smiles}/>
                            </div>
                            <div className={s.totalItemTitle}>
                                <h4 className={s.subTitle}>{t("whoTraining1")}</h4>
                                <p className={s.subMain}>{t("whoTraining2")} <br className={s.wrap}/> {t("whoTraining3")}</p>
                            </div>

                        </div>

                        <Image src={line} className={s.line}/>
                        <Image src={line2} className={s.line2}/>

                        <div className={s.totalItem}>
                            <div className={s.numberWrapper}>
                                <h3 className={s.totalNumber}>4</h3>
                                <Image className={s.chimanoIcon} src={chimano}/>
                            </div>
                            <div className={s.totalItemTitle}>
                                <h4 className={s.subTitle}>{t("howMany1")}</h4>
                                <p className={s.subMain}>{t("howMany2")} <br className={s.wrap}/> {t("howMany3")}</p>
                            </div>

                        </div>

                        <Image src={line} className={s.line}/>
                        <Image src={line2} className={s.line2}/>

                        <div className={s.totalItem}>
                            <div className={s.numberWrapper}>
                                <h3 className={s.totalNumber}>3</h3>
                                <Image className={s.cupIcon} src={cup}/>
                            </div>
                            <div className={s.totalItemTitle}>
                                <h4 className={s.subTitle}>{t("winners1")}</h4>
                                <p className={s.subMain}>{t("winners2")} <br className={s.wrap}/> {t("winners3")}</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </Container>
            <div className={s.video}>
                <video preload="auto" muted={true}  src={karate} className={s.videoItem}/>
                <div className={s.titleTeamWrapper}>
                    <Image className={s.titleTeamImage} src={titleTeam}/>
                </div>
            </div>
        </>
    );
};

export default AboutPage;

//
// <video preload="auto" loop muted={true} autoPlay={true} src={karate} className={s.videoItem}/>