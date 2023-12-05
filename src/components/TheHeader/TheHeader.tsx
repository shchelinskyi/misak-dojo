import React, {FC, useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks";
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import CustomNavbarToggle from "../CustomNavbarToggle";
import _debounce from 'lodash/debounce';
import {useTranslation} from "react-i18next";
import {openForm} from "../../redux/slices/formTrialSessionSlice.ts";
import logo from "../../assets/images/main/logo.webp";
import fistLogo from "../../assets/images/main/fistLogo.webp";
import cn from "classnames";
import s from "./TheHeader.module.scss";
import SocialLinks from "../SocialLinks";
import {useLocation, useNavigate} from "react-router-dom";

interface ITheHeaderProps {
    refData: {
        aboutRef: React.RefObject<HTMLDivElement>;
        teamRef: React.RefObject<HTMLDivElement>;
        gymsRef: React.RefObject<HTMLDivElement>;
        galleryRef: React.RefObject<HTMLDivElement>;
        shopRef: React.RefObject<HTMLDivElement>;
        contactsRef: React.RefObject<HTMLDivElement>;
    }
}

const TheHeader:FC<ITheHeaderProps> = ({refData}) => {

    const dispatch = useAppDispatch();
    const {t, i18n} = useTranslation();
    const [activeLang, setActiveLang] = useState(i18n.language || 'ua');
    const [isScrolled, setIsScrolled] = useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const navigateToAbout = () => {
        if (pathname !== "/") {
            navigate('/');
            refData.aboutRef.current.scrollIntoView({behavior: 'smooth'})
        } else {
            refData.aboutRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const navigateToGyms = () => {
        if (pathname !== "/") {
            navigate('/');
            refData.gymsRef.current.scrollIntoView({behavior: 'smooth'})
        } else {
            refData.gymsRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const navigateToTeam = () => {
        if (pathname !== "/") {
            navigate('/');
            refData.teamRef.current.scrollIntoView({behavior: 'smooth'})
        } else {
            refData.teamRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const navigateToGallery = () => {
        if (pathname !== "/") {
            navigate('/');
            refData.galleryRef.current.scrollIntoView({behavior: 'smooth'})
        } else {
            refData.galleryRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const navigateToShop = () => {
        if (pathname !== "/") {
            navigate('/');
            refData.shopRef.current.scrollIntoView({behavior: 'smooth'})
        } else {
            refData.shopRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const navigateToContacts = () => {
        if (pathname !== "/") {
            navigate('/');
            refData.contactsRef.current.scrollIntoView({behavior: 'smooth'})
        } else {
            refData.contactsRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    useEffect(() => {
        const handleScroll = _debounce(() => {
            setIsScrolled(window.scrollY > 300);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundColor = isScrolled ? 'white' : '#dedede';

    useEffect(() => {
        setActiveLang(i18n.language || 'ua');
    }, [i18n.language]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const handleClick = () => {
        if (pathname !== "/") {
            navigate('/');
            dispatch(openForm())
        } else {
            dispatch(openForm())
        }
    };

    const clickLogo = () => {
        if (pathname !== "/") {
            navigate('/');
        } else {
            window.scrollTo({
                top: 20,
                behavior: 'smooth',
            });
        }
    }

    return (
        <Navbar expand="lg" className={s.wrapper} style={{backgroundColor}}>
            <Container className={s.container} style={{minWidth: "335px"}}>
                <Navbar.Brand onClick={clickLogo} style={{cursor:"pointer"}}>
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
                        <Nav.Link className={s.link}
                                  onClick={navigateToAbout}>{t('aboutUs')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={navigateToTeam}>{t('team')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={navigateToGyms}>{t('gym')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={navigateToGallery}>{t('gallery')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={navigateToShop}>{t('shop')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={navigateToContacts}>{t('contacts')}</Nav.Link>
                        <div className={s.langToggle}>
                            <span className={activeLang === 'ua' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('ua')}>UA</span>
                            <span className={activeLang === 'en' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('en')}>ENG</span>
                            <span className={activeLang === 'ru' ? s.activeLang : s.notActiveLang}
                                  onClick={() => changeLanguage('ru')}>RU</span>
                        </div>
                        <SocialLinks/>
                    </Nav>
                </Navbar.Collapse>
                <div className={s.mediaWrapper}>
                    <CustomSelect/>
                </div>
                <div className={s.mediaWrapper}>
                    <CustomButton onClick={handleClick}>{t('signUp')}</CustomButton>
                </div>
            </Container>

        </Navbar>
    );
};

export default TheHeader;
