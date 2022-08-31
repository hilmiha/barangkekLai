import LaiMainLayout from "../../ui/Lai_MainLayout";
import LaiSectionInfoOnline from "./Lai_Section_InfoOnline";
import LaiSectionInputBar from "./Lai_Section_InputBar";
import LaiSectionCekJResult from "./Lai_Section_CekJResult";

import EndOfResult from "./Lai_Section_EndOfResult";

const CekJadwalPage = () => {
    return (
        <LaiMainLayout>
            <LaiSectionInfoOnline />
            <LaiSectionInputBar />
            <LaiSectionCekJResult />
            <EndOfResult />
        </LaiMainLayout>
    );
};

export default CekJadwalPage;
