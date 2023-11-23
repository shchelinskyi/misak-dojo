import ContactGym from "../../components/ContactGym";
import CustomButton from "../../components/CustomButton";
import {Container, Image} from "react-bootstrap";
import num1 from "../../assets/images/gyms/num1.svg";
import num2 from "../../assets/images/gyms/num2.svg";
import num3 from "../../assets/images/gyms/num3.svg";
import signature from "../../assets/images/gyms/signature.svg";
import smile from "../../assets/images/gyms/smile.svg";
import smile2 from "../../assets/images/gyms/smile2.svg";
import scroll from "../../assets/images/gyms/scroll.svg";
import eyes from "../../assets/images/gyms/eyes.svg";
import monday from "../../assets/images/gyms/monday.svg";
import tuesday from "../../assets/images/gyms/tuesday.svg";
import wednesday from "../../assets/images/gyms/wednesday.svg";
import thursday from "../../assets/images/gyms/thursday.svg";
import friday from "../../assets/images/gyms/friday.svg";
import saturday from "../../assets/images/gyms/saturday.svg";
import cn from "classnames";
import s from "./GymsPage.module.scss";
import {useState} from "react";
import {useTranslation} from "react-i18next";


const GymsPage = () => {
    const [isBlockVisible1, setIsBlockVisible1] = useState(false);
    const [isBlockVisible2, setIsBlockVisible2] = useState(false);
    const [isBlockVisible3, setIsBlockVisible3] = useState(false);

    const { t } = useTranslation();

    const toggleVisibility = (numBlock) => {
        if (numBlock === 1) {
            setIsBlockVisible1(!isBlockVisible1);
        } else if (numBlock === 2) {
            setIsBlockVisible2(!isBlockVisible2);
        } else {
            setIsBlockVisible3(!isBlockVisible3);
        }

    };




    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>{t("ourGyms")}</h3>
            <Container className={s.content}>
                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym1")} number="+38 (099) 042 08 20"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width: "100%"}} onClick={()=>toggleVisibility(1)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible1 })}>
                        <div className={cn(s.item3times, s.order1)}>
                            <Image className={s.dayIcon} src={monday}/>
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item3times, s.order3)}>
                            <Image className={s.smileIcon} src={smile}/>
                            <Image className={s.dayIcon} src={wednesday}/>
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order5)}>
                            <Image className={s.dayIcon} src={friday}/>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group4")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>{t("group5")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order2)}>
                            <Image className={s.signatureIcon} src={signature}/>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group4")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>{t("group5")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item3times, s.order4)}>
                            <Image className={s.dayIcon} src={thursday}/>
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>
                    </div>
                    <Image className={s.numIcon} src={num1}/>
                    <div className={s.line}></div>
                </div>

                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym2")} number="+38 (099) 042 08 20"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width: "100%"}} onClick={()=>toggleVisibility(2)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible2 })}>
                        <div className={cn(s.item2times, s.order1)}>
                            <Image className={s.dayIcon} src={monday}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order3)}>
                            <Image className={s.dayIcon} src={wednesday}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order5)}>
                            <Image className={s.dayIcon} src={friday}/>
                            <Image className={s.scrollIcon} src={scroll}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order2)}>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <Image className={s.eyesIcon} src={eyes}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order4)}>
                            <Image className={s.dayIcon} src={thursday}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>
                    </div>
                    <Image className={s.numIcon} src={num2}/>
                    <div className={s.line}></div>
                </div>

                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym3")} number="+38 (093) 726 54 24"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width: "100%"}} onClick={()=>toggleVisibility(3)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible3 }, s.thirdGym)}>

                        <div className={cn(s.item2timesShot)}>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group8")}</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2timesShot, s.order3)}>
                            <Image className={s.dayIcon} src={saturday}/>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>10:00 - 11:00</li>
                                <p className={s.text}>{t("group8")}</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>11:00 - 12:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2timesShot)}>
                            <Image className={s.smile2Icon} src={smile2}/>
                            <Image className={s.dayIcon} src={thursday}/>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group8")}</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                    </div>
                    <Image className={s.numIcon} src={num3} style={{bottom: 0}}/>
                </div>

            </Container>
        </div>
    );
};

export default GymsPage;
