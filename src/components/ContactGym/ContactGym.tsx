import React, {FC} from 'react';
import s from "./ContactGym.module.scss";
import {Image} from "react-bootstrap";
import location from "../../assets/images/gyms/location.svg";
import phone from "../../assets/images/gyms/phone.svg";
import clip from "../../assets/images/gyms/clip.png";
import {useTranslation} from "react-i18next";

interface ContactGymProps {
    address:string;
    number:string
}

const ContactGym:FC<ContactGymProps> = ({address, number}) => {

    const { t } = useTranslation();

    return (
        <div className={s.block}>
            <div className={s.contactItem}>
                <Image className={s.locationIcon} src={location}/>
                <p className={s.text}>{t("city")}, <br className={s.wrap}/>{address}</p>
            </div>
            <div className={s.contactItem}>
                <Image className={s.phoneIcon} src={phone}/>
                <p className={s.text}>{number}</p>
            </div>
            <Image className={s.clipIcon} src={clip}/>
        </div>
    );
};

export default ContactGym;
