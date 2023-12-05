import { Outlet, useLocation } from 'react-router-dom';
import TheHeader from "../../components/TheHeader";
import TheFooter from "../../components/TheFooter";
import {useScrollActions} from "../../hooks";

const Layout = ({refData}) => {
    // const { scrollActions } = useScrollActions();
    const location = useLocation();
    const isPrivacyPolicyPage = location.pathname !== "/";


    return (
        <div>
            {!isPrivacyPolicyPage && <TheHeader refData={refData} />}
            <Outlet/>
            <TheFooter/>
        </div>
    );
};

export default Layout;
