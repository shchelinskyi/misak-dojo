
import {Outlet} from 'react-router-dom';
import TheFooter from "../../components/TheFooter";

const Layout = () => {
    return (
        <div>
            <Outlet/>
            <TheFooter/>
        </div>
    );
};

export default Layout;
