import {FC, useEffect, useState} from "react"
import {Container, Image, Nav, Navbar, NavbarToggle} from "react-bootstrap";
import logo from "../../assets/images/main/logo.webp";
import fistLogo from "../../assets/images/main/fistLogo.webp";
import bucket from "../../assets/images/main/bucket.webp";
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
import {openForm} from "../../redux/slices/formTrialSessionSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {openCartModal} from "../../redux/slices/cartSlice.ts";
import _debounce from 'lodash/debounce';

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
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    const [activeLang, setActiveLang] = useState(i18n.language || 'ua');
    const cartItems = useAppSelector(state => state.cart.cartItems);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = _debounce(() => {
            setIsScrolled(window.scrollY > 300);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        const backgroundColor = isScrolled ? 'white' : '#e1e1e1';


    useEffect(() => {
        setActiveLang(i18n.language || 'ua');
    }, [i18n.language]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }


    const handleClick = () => {
         dispatch(openForm())
    };

    return (
        <Navbar className={s.wrapper}  style={{backgroundColor}}>
            <Container  className={s.container} style={{minWidth: "335px"}}>
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
                            <span className={activeLang === 'ua' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('ua')}>UA</span>
                            <span className={activeLang === 'en' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('en')}>ENG</span>
                            <span className={activeLang === 'ru' ? s.activeLang : s.notActiveLang}
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
            <div className={s.bucketWrapper} onClick={() => dispatch(openCartModal())}>
                <Image src={bucket} className={s.bucketIcon}/>
                <div className={s.badge}>{cartItems.length}</div>
            </div>

        </Navbar>
    );
};

export default TheHeader;
