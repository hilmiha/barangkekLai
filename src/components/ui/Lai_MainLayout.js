import { Outlet } from "react-router-dom";
import LaiNavbar from "./Lai_Navbar";
import LaiFooter from "./Lai_Footer";

const LaiMainLayout = (props) => {
    return (
        <LaiNavbar>
            <Outlet />
            <LaiFooter />
        </LaiNavbar>
    );
};

export default LaiMainLayout;
