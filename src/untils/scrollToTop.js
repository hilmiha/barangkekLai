import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        document.getElementById("page").scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTop;
