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

    const handleLangToggle = (lang) => {
        setActiveLang(lang);
        // Добавьте здесь код для изменения языка в вашем приложении
    };

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
                    <CustomButton onClick={handleClick}>записатися</CustomButton>
                </div>
                <Navbar.Toggle style={{border: "none"}}>

                    <CustomNavbarToggle/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className={s.collapse}>
                    <Nav className={cn(s.menu)}>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollAbout()}
                                  style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "16px", color: "#000000"
                                  }}>ПРО НАС</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollTeam()}
                                  style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "16px", color: "#000000"
                                  }}>КОМАНДА</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollGyms()}
                                  style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "16px", color: "#000000"
                                  }}>ЗАЛА</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollGallery()}
                                  style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "16px", color: "#000000"
                                  }}>ГАЛЕРЕЯ</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollShop()}
                                  style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "16px", color: "#000000"
                                  }}>МАГАЗИН</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => scrollActions.scrollContacts()}
                                  style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "16px", color: "#000000"
                                  }}>КОНТАКТИ</Nav.Link>
                        <div className={s.langToggle}>
                            <span className={activeLang === 'UA' ? s.activeLang : s.notActiveLang}
                                  onClick={() => handleLangToggle('UA')}>UA</span>
                            <span className={activeLang === 'ENG' ? s.activeLang : s.notActiveLang}
                                  onClick={() => handleLangToggle('ENG')}>ENG</span>
                            <span className={activeLang === 'RU' ? s.activeLang : s.notActiveLang}
                                  onClick={() => handleLangToggle('RU')}>RU</span>
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
                    <CustomButton onClick={handleClick}>записатися</CustomButton>
                </div>
            </Container>
            <div className={s.bucketWrapper}>
                <Image src={bucket} width={39}/>
                <div className={s.badge}>2</div>
            </div>

        </Navbar>
    );
};

export default TheHeader;
