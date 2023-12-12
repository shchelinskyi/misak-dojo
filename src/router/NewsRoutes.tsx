import {Route, Routes} from "react-router-dom";
import OpenCup from "../components/NewsCard/NewsItems/OpenCup";
import KumiteMarathon from "../components/NewsCard/NewsItems/KumiteMarathon";
import SummerSchool31 from "../components/NewsCard/NewsItems/SummerSchool31";
import ChildTraining from "../components/NewsCard/NewsItems/ChildTraining";
import CoachDay from "../components/NewsCard/NewsItems/CoachDay";
import KarateDay from "../components/NewsCard/NewsItems/KarateDay";
import MeaningTerm from "../components/NewsCard/NewsItems/MeaningTerm";
import SummerSchool32 from "../components/NewsCard/NewsItems/SummerSchool32";
import Championship from "../components/NewsCard/NewsItems/Championship";

const NewsRoutes = () => {
    return (
        <Routes>
            <Route path="news/openCup" element={<OpenCup />} />
            <Route path="news/kumiteMarathon" element={<KumiteMarathon />} />
            <Route path="news/summerSchool31" element={<SummerSchool31 />} />
            <Route path="news/childTraining" element={<ChildTraining />} />
            <Route path="news/coachDay" element={<CoachDay />} />
            <Route path="news/karateDay" element={<KarateDay />} />
            <Route path="news/meaningTerm" element={<MeaningTerm />} />
            <Route path="news/summerSchool32" element={<SummerSchool32 />} />
            <Route path="news/championship" element={<Championship />} /> <Route path="news/openCup" element={<OpenCup />} />
            <Route path="news/kumiteMarathon" element={<KumiteMarathon />} />
            <Route path="news/summerSchool31" element={<SummerSchool31 />} />
            <Route path="news/childTraining" element={<ChildTraining />} />
            <Route path="news/coachDay" element={<CoachDay />} />
            <Route path="news/karateDay" element={<KarateDay />} />
            <Route path="news/meaningTerm" element={<MeaningTerm />} />
            <Route path="news/summerSchool32" element={<SummerSchool32 />} />
            <Route path="news/championship" element={<Championship />} />
        </Routes>
    );
};

export default NewsRoutes;
