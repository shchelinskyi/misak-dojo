import React, {FC} from 'react';
import s from "./ContactGymSocial.module.scss";
import {Image} from "react-bootstrap";
import location from "../../assets/images/location.png";
import letter from "../../assets/images/letter.png";
import phoneIcon from "../../assets/images/phone.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import telegram from "../../assets/images/telegram.png";
import undergroundIcon from "../../assets/images/undergroundIcon.png";

interface ContactGymSocialProps {
    address: string;
    email?: string;
    phone: string;
    underground: string;
    socialLinks: {
        instagramLink: string,
        facebookLink?: string,
        youtubeLink?: string,
        telegramLink?: string
    }
}

const ContactGymSocial: FC<ContactGymSocialProps> = ({address, email, phone, underground, socialLinks}) => {
    return (
        <div className={s.contactBlock}>
            <div style={{marginBottom: "36px"}}>
                <div className={s.contactItem}>
                    <Image className={s.locationIcon} src={location}/>
                    <p className={s.text}>{address}</p>
                </div>
                {!!email && <div className={s.contactItem}>
                    <Image className={s.letterIcon} src={letter}/>
                    <p className={s.text}>{email}</p>
                </div>
                }
                <div className={s.contactItem}>
                    <Image className={s.phoneIcon} src={phoneIcon}/>
                    <p className={s.text}>{phone}</p>
                </div>
            </div>
            <div className={s.socials}>
                <div className={s.icons}>
                    {socialLinks.instagramLink && <Image className={s.socialIcon} src={instagram}/>}
                    {socialLinks.facebookLink && <Image className={s.socialIcon} src={facebook}/>}
                    {socialLinks.youtubeLink && <Image className={s.socialIcon} src={youtube}/>}
                    {socialLinks.telegramLink && <Image className={s.socialIcon} src={telegram}/>}
                </div>
                <div className={s.underground}>
                    <Image className={s.undergroundIcon} src={undergroundIcon}/>
                    <p className={s.undergroundLabel}>{underground}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactGymSocial;
