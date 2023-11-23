import {Image} from "react-bootstrap";
import s from "./ContactsPage.module.scss";
import ua from "../../assets/images/ua.png";
import roundWait from "../../assets/images/roundWait.png";
import ContactGymSocial from "../../components/ContactGymSocial";
import FormBlock from "../../components/FormBlock";
import {useTranslation} from "react-i18next";




const ContactsPage = () => {

    const { t } = useTranslation();

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h3 className={s.contactsTitle}>{t("ourContacts")}</h3>
                <div className={s.content}>
                    <ContactGymSocial
                        address={t("gymFull1")}
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground={t("underground1")}
                        socialLinks={
                            {
                                instagramLink: "#",
                                facebookLink: "#",
                                youtubeLink: "#",
                                telegramLink: "#"
                            }
                        }
                    />

                    <ContactGymSocial
                        address={t("gymFull2")}
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground={t("underground2")}
                        socialLinks={
                            {
                                instagramLink: "#",
                                facebookLink: "#",
                                youtubeLink: "#",
                                telegramLink: "#"
                            }
                        }
                    />

                    <ContactGymSocial
                        address={t("gymFull3")}
                        phone="+38 (093) 726 54 24"
                        underground={t("underground3")}
                        socialLinks={
                            {
                                instagramLink: "#",
                            }
                        }
                    />
                    <div className={s.line}></div>
                    <FormBlock/>
                    <div className={s.logoContainer}>
                        <Image className={s.AppLogo} src={roundWait}/>
                        <Image src={ua} style={{
                            width: "49px",
                            height: "49px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }}/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactsPage;
