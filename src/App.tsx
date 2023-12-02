import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import {useEffect, useRef, useState} from 'react';
import {useAppSelector} from "./hooks.ts";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import GymsPage from "./pages/GymsPage";
import TrialLessonPage from "./pages/TrialLessonPage";
import GalleryPage from "./pages/GalleryPage";
import SupportUsPage from "./pages/SupporUsPage";
import ShopPage from "./pages/ShopPage";
import NewsPage from "./pages/NewsPage";
import ReadMore from "./components/ReadMore";
import ContactsPage from "./pages/ContactsPage";
import TheFooter from "./components/TheFooter";
import Ticker from "./components/Ticker";
import Cart from "./components/Cart";
import FormTrialSession from "./components/FormTrialSession";
import Loading from "./components/Loading";



const App = () => {

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

    const isFormOpen = useAppSelector(state => state.formTrial.isOpenedForm);
    const isCartOpened = useAppSelector(state => state.cart.isOpenedCartModal);
    const scrollActions = {
        scrollAbout: () => {
            aboutRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollTeam: () => {
            teamRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollGyms: () => {
            gymsRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollGallery: () => {
            galleryRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollShop: () => {
            shopRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollContacts: () => {
            contactsRef.current!.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
            {loading && <Loading/>}


            {isFormOpen && <FormTrialSession/>}

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
            {isCartOpened && <Cart/>}
        </>
    )
}

export default App;
