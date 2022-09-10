import { useLocation, Navigate } from "react-router-dom";

import LaiSectionInfoOnline from "./Lai_Section_InfoOnline";
import LaiSectionInputBar from "./Lai_Section_InputBar";
import LaiSectionCekJResult from "./Lai_Section_CekJResult";

const CekJadwalPage = () => {
    const location = useLocation();
    if (location.state === null) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <LaiSectionInfoOnline />
            <LaiSectionInputBar />
            <LaiSectionCekJResult />
        </>
    );
};

export default CekJadwalPage;
