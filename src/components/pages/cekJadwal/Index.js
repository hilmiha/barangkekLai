import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LaiSectionInfoOnline from "./Lai_Section_InfoOnline";
import LaiSectionInputBar from "./Lai_Section_InputBar";
import LaiSectionCekJResult from "./Lai_Section_CekJResult";

import { LaiCekJadwalContext } from "../../../context/LaiCekJadwalContext";

import EndOfResult from "./Lai_Section_EndOfResult";

const CekJadwalPage = () => {
    let navigate = useNavigate();
    const { isDefined } = useContext(LaiCekJadwalContext);

    useEffect(() => {
        // document.getElementById("hello").scrollTo(0, 200);
        if (isDefined() === false) {
            navigate("/");
        }
    });

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
