import {FC, useState} from "react"
import {Container, Image, Nav, Navbar, NavbarToggle} from "react-bootstrap";
import logo from "../../assets/images/main/logo.png";
import fistLogo from "../../assets/images/main/fistLogo.png";
import bucket from "../../assets/images/main/bucket.png";
import instagram from "../../assets/images/main/instagram.svg";
import facebook from "../../assets/images/main/facebook.svg";
import telegram from "../../assets/images/main/telegram.svg";
import youtube from "../../assets/images/main/youtube.svg";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import s from "./TheHeader.module.scss";
import CustomNavbarToggle from "../CustomNavbarToggle";
import cn from "classnames";
import {useTranslation} from "react-i18next";

interface ITheHeaderProps {
    scrollActions: {
        scrollAbout: () => void,
        scrollTeam: () => void,
        scrollGyms: () => void,
        scrollGallery: () => void,
        scrollShop: () => void,
        scrollContacts: () => void,
    }
}

const TheHeader: FC<ITheHeaderProps> = ({scrollActions}) => {

    const [activeLang, setActiveLang] = useState('UA');
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }


    const handleClick = () => {
        console.log('Кнопка была нажата1!');
    };

    return (
        <Navbar expand="lg" className="bg-transparent position-relative" sticky="top">
            <Container style={{minWidth: "335px"}}>
                <Navbar.Brand>
                    <Image className={s.logo} src={logo}/>
                    <Image className={s.fistLogo} src={fistLogo} style={{width: "65px", height: "50px"}}/>
                </Navbar.Brand>
                <div className={s.btnWrapper}>
                    <CustomButton onClick={handleClick}>{t('signUp')}</CustomButton>
                </div>
                <Navbar.Toggle style={{border: "none"}}>
                    <CustomNavbarToggle/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className={s.collapse}>
                    <Nav className={cn(s.menu)}>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollAbout()}>{t('aboutUs')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollTeam()}>{t('team')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollGyms()}>{t('gym')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollGallery()}>{t('gallery')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollShop()}>{t('shop')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollContacts()}>{t('contacts')}</Nav.Link>
                        <div className={s.langToggle}>
                            <span className={activeLang === 'UA' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('ua')}>UA</span>
                            <span className={activeLang === 'ENG' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('en')}>EN</span>
                            <span className={activeLang === 'RU' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('ru')}>RU</span>
                        </div>
                        <div className={s.socialLinks}>
                            <Image className={s.socialIcon} src={instagram}/>
                            <Image className={s.socialIcon} src={facebook}/>
                            <Image className={s.socialIcon} src={youtube}/>
                            <Image className={s.socialIcon} src={telegram}/>
                        </div>
                    </Nav>

                </Navbar.Collapse>
                <div className={s.mediaWrapper}>
                    <CustomSelect/>
                </div>
                <div className={s.mediaWrapper}>
                    <CustomButton onClick={handleClick}>{t('signUp')}</CustomButton>
                </div>
            </Container>
            <div className={s.bucketWrapper}>
                <Image src={bucket} className={s.bucketIcon}/>
                <div className={s.badge}>2</div>
            </div>

        </Navbar>
    );
};

export default TheHeader;
