import s from "./SupportUsPage.module.scss";
import {Image} from "react-bootstrap";
import spiral from "../../assets/images/support/spiral-support.svg";
import heartY from "../../assets/images/support/heart-y.svg";
import heartB from "../../assets/images/support/heart-b.svg";
import hands from "../../assets/images/support/hands.svg";
import support from "../../assets/images/support/support.svg";
import btnLabel from "../../assets/images/support/btn-label.svg";
import finger from "../../assets/images/support/finger-up.svg";
import CustomButton from "../../components/CustomButton";


const SupportUsPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.contentWrapper}>
                <div className={s.content}>
                    <span>Ви можете підтримати</span>
                    <Image src={hands} className={s.handsIcon}/>
                    <span> Спортивний клуб Кіокушинкай карате «Місак Доджо» та зробити внесок у піднесення
                    спортивної культури</span><br/>
                    <Image src={heartY} className={s.heartIcon}/>
                    <Image src={heartB} className={s.heartIcon}/>
                    <span>української молоді</span>
                </div>
                <div className={s.supportBlock}>
                    <Image src={spiral} className={s.spiralImg}/>
                    <Image src={support} className={s.supportLabel}/>
                    <button className={s.btn} onClick={() => console.log(1)}>
                        <Image src={btnLabel} className={s.btnLabel}/>
                    </button>
                    <div className={s.fingerBlock}>
                        <Image src={finger} className={s.fingerImg}/>
                        <span>* тиць</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportUsPage;
