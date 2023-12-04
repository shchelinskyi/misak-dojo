import {useEffect, useRef, useState} from "react";
import {useAppSelector, useScrollActions} from "../../hooks.ts";
import Loading from "../../components/Loading";
import FormTrialSession from "../../components/FormTrialSession";
import InformModal from "../../components/InformModal/InformModal.tsx";
import MainPage from "../MainPage";
import AboutPage from "../AboutPage";
import TeamPage from "../TeamPage";
import GymsPage from "../GymsPage";
import TrialLessonPage from "../TrialLessonPage";
import GalleryPage from "../GalleryPage";
import SupportUsPage from "../SupporUsPage";
import Ticker from "../../components/Ticker";
import ShopPage from "../ShopPage";
import NewsPage from "../NewsPage";
import ReadMore from "../../components/ReadMore";
import ContactsPage from "../ContactsPage";
import Cart from "../../components/Cart";
import TheHeader from "../../components/TheHeader";

const Main = ({setRefData}) => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const gymsRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const shopRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // document.body.style.overflowY = 'hidden';
        // document.body.style.overflowX = 'hidden';
        const timer = setTimeout(() => {
            setLoading(false);
            // document.body.style.overflowY = 'scroll';
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const data = {aboutRef, teamRef, gymsRef, galleryRef, shopRef, contactsRef }
        setRefData({... data})

    }, [aboutRef, teamRef, gymsRef, galleryRef, shopRef, contactsRef  ]);


    const isFormOpen = useAppSelector(state => state.formTrial.isOpenedForm);
    const isCartOpened = useAppSelector(state => state.cart.isOpenedCartModal);
    const isOpenedSuccessModal = useAppSelector(state => state.formTrial.isOpenedSuccessModal);


    return (
        <>
            {loading && <Loading/>}
            {isFormOpen && <FormTrialSession/>}
            {isOpenedSuccessModal && <InformModal/>}
            <MainPage/>
            <div ref={aboutRef} style={{paddingTop:"100px"}}>
                <AboutPage/>
            </div>
            <div ref={teamRef}>
                <TeamPage/>
            </div>
            <div ref={gymsRef}>
                <GymsPage/>
            </div>
            <TrialLessonPage/>
            <div ref={galleryRef}>
                <GalleryPage/>
            </div>
            <SupportUsPage/>
            <Ticker/>
            <div ref={shopRef}>
                <ShopPage/>
            </div>
            <NewsPage/>
            <ReadMore/>
            <div ref={contactsRef}>
                <ContactsPage/>
            </div>
            {isCartOpened && <Cart/>}
        </>
    );
};

export default Main;
