import s from "./SupportUsPage.module.scss";
import {Image} from "react-bootstrap";
import spiral from "../../assets/images/spiral-support.png";
import heartY from "../../assets/images/heart-y.png";
import heartB from "../../assets/images/heart-b.png";
import hands from "../../assets/images/hands.png";
import support from "../../assets/images/support.png";
import btnLabel from "../../assets/images/btn-label.png";
import finger from "../../assets/images/finger-up.png";
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
                    <CustomButton onClick={()=>console.log(1)} styles={{width:"245px"}}>
                        <Image src={btnLabel} className={s.btnLabel}/>
                    </CustomButton>
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
