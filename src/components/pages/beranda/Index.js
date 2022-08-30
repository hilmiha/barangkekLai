import LaiMainLayout from "../../ui/Lai_MainLayout";
import LaiSectionTop from "./Lai_Section_Top";
import LaiCekJadwal from "../../ui/Lai_CekJadwal";
import LaiSectionRute from "./Lai_Section_Rute";
import LaiSectionFasilitas from "./Lai_Section_Fasilitas";
import LaiSectionKenapa from "./Lai_Section_Kenapa";
import LaiSectionOthLayanan from "./Lai_Section_OthLayanan";

const BerandaPage = () => {
    return (
        <LaiMainLayout>
            <LaiSectionTop />
            <LaiCekJadwal />
            <LaiSectionRute />
            <LaiSectionFasilitas />
            <LaiSectionKenapa />
            <LaiSectionOthLayanan />
        </LaiMainLayout>
    );
};

export default BerandaPage;
