import { Outlet, useLocation } from 'react-router-dom';
import TheHeader from "../../components/TheHeader";
import TheFooter from "../../components/TheFooter";
import {useScrollActions} from "../../hooks.ts";

const Layout = () => {
    const { scrollActions } = useScrollActions();
    const location = useLocation();
    const isPrivacyPolicyPage = location.pathname === "/privacy-policy";

    return (
        <div>
            {!isPrivacyPolicyPage && <TheHeader scrollActions={scrollActions}/>}
            <Outlet/>
            <TheFooter/>
        </div>
    );
};

export default Layout;
