import React, {FC} from 'react';
import s from "./ContactGym.module.scss";
import {Image} from "react-bootstrap";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import clip from "../../assets/images/clip.png";

interface ContactGymProps {
    address:string;
    number:string
}

const ContactGym:FC<ContactGymProps> = ({address, number}) => {
    return (
        <div className={s.block}>
            <div className={s.contactItem}>
                <Image className={s.locationIcon} src={location}/>
                <p className={s.text}>м. Київ,<br/>{address}</p>
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
