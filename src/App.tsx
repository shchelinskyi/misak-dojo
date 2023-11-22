import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";
import "./App.scss";
import React, {useRef} from 'react';

import AboutPage from "./pages/AboutPage";
import TheFooter from "./components/TheFooter";
import ContactsPage from "./pages/ContactsPage/ContactsPage.tsx";
import NewsPage from "./pages/NewsPage";
import TeamPage from "./pages/TeamPage";
import GymsPage from "./pages/GymsPage";
import TrialLessonPage from "./pages/TrialLessonPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage.tsx";
import SupportUsPage from "./pages/SupporUsPage";
import Ticker from "./components/Ticker";
import ShopPage from "./pages/ShopPage";
import ReadMore from "./components/ReadMore";


const App = () => {

    const aboutRef = useRef();
    const teamRef = useRef();
    const gymsRef = useRef();
    const galleryRef = useRef();
    const shopRef = useRef();
    const contactsRef = useRef();

    const scrollActions = {
        scrollAbout: () => {
            aboutRef.current.scrollIntoView({behavior: 'smooth'});
        },
        scrollTeam: () => {
            teamRef.current.scrollIntoView({behavior: 'smooth'});
        },
        scrollGyms: () => {
            gymsRef.current.scrollIntoView({behavior: 'smooth'});
        },
        scrollGallery: () => {
            galleryRef.current.scrollIntoView({behavior: 'smooth'});
        },
        scrollShop: () => {
            shopRef.current.scrollIntoView({behavior: 'smooth'});
        },
        scrollContacts: () => {
            contactsRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }


    return (
        <>
            <MainPage scrollActions={scrollActions}/>
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
            <TheFooter/>
        </>
    )
}

export default App;
