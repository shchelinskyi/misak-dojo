import {Image} from "react-bootstrap";
import s from "./ContactsPage.module.scss";
import ua from "../../assets/images/ua.png";
import roundWait from "../../assets/images/roundWait.png";
import ContactGymSocial from "../../components/ContactGymSocial";
import FormBlock from "../../components/FormBlock";




const ContactsPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h3 className={s.contactsTitle}>НАШІ КОНТАКТИ</h3>
                <div className={s.content}>
                    <ContactGymSocial
                        address="м.Київ, вул. Маршала Тимошенка, 9"
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground="Мінська"
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
                        address="м. Київ, проспект Володимира Івасюка 13Б, Початкова Школа 211"
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground="Оболонь"
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
                        address="м.Київ, вул. Олександра Мишуги, 2"
                        phone="+38 (093) 726 54 24"
                        underground="Позняки"
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
