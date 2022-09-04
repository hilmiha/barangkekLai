import { useLocation, Navigate } from "react-router-dom";

import LaiSectionInfoOnline from "./Lai_Section_InfoOnline";
import LaiSectionInputBar from "./Lai_Section_InputBar";
import LaiSectionCekJResult from "./Lai_Section_CekJResult";

import EndOfResult from "./Lai_Section_EndOfResult";

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
            <EndOfResult />
        </>
    );
};

export default CekJadwalPage;
