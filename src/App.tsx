import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";
import "./App.scss";
import AboutPage from "./pages/AboutPage";
import TheFooter from "./components/TheFooter";
import ContactsPage from "./pages/ContactsPage/ContactsPage.tsx";
import NewsPage from "./pages/NewsPage";
import TeamPage from "./pages/TeamPage";


const App = () => {

    return (
        <>
            <MainPage/>
            <AboutPage/>
            <TeamPage/>
            <NewsPage/>
            <ContactsPage/>
            <TheFooter/>
        </>
    )
}

export default App;
