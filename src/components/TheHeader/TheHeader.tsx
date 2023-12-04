import React, {FC, useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks.ts";
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
        dispatch(openForm())
    };

    return (
        <Navbar expand="lg" className={s.wrapper} style={{backgroundColor}}>
            <Container className={s.container} style={{minWidth: "335px"}}>
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
                        <Nav.Link className={s.link}
                                  onClick={() => refData.aboutRef.current.scrollIntoView({behavior: 'smooth'})}>{t('aboutUs')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => refData.teamRef.current.scrollIntoView({behavior: 'smooth'})}>{t('team')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => refData.gymsRef.current.scrollIntoView({behavior: 'smooth'})}>{t('gym')}</Nav.Link>
                        <Nav.Link className={s.link}
                                  onClick={() => refData.galleryRef.current.scrollIntoView({behavior: 'smooth'})}>{t('gallery')}</Nav.Link>
                        <Nav.Link className={s.link} onClick={() => refData.shopRef.current.scrollIntoView({behavior: 'smooth'})}>{t('shop')}</Nav.Link>
                        <Nav.Link className={s.link}
                                  onClick={() => refData.contactsRef.current.scrollIntoView({behavior: 'smooth'})}>{t('contacts')}</Nav.Link>
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
