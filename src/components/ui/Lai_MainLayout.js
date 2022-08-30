import LaiNavbar from "./Lai_Navbar";
import LaiFooter from "./Lai_Footer";

const LaiMainLayout = (props) => {
    return (
        <LaiNavbar>
            {props.children}
            <LaiFooter />
        </LaiNavbar>
    );
};

export default LaiMainLayout;
