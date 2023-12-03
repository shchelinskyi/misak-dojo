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

const Main = () => {

    const { aboutRef, teamRef, gymsRef, galleryRef, shopRef, contactsRef, scrollActions } = useScrollActions();

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

    const isFormOpen = useAppSelector(state => state.formTrial.isOpenedForm);
    const isCartOpened = useAppSelector(state => state.cart.isOpenedCartModal);
    const isOpenedSuccessModal = useAppSelector(state => state.formTrial.isOpenedSuccessModal);


    return (
        <>
            {loading && <Loading/>}
            {isFormOpen && <FormTrialSession/>}
            {isOpenedSuccessModal && <InformModal/>}
            <MainPage/>
            <div ref={aboutRef}>
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
