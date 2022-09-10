import { useContext } from "react";
import { LaiFormPesanContext } from "../../../context/LaiFormPesanContext";
import { dateInterpreter } from "../../../untils/dateInterpreter";

const LaiSectionFormBar = () => {
    const { itemJadwal, jumTiket } = useContext(LaiFormPesanContext);

    const tipe = itemJadwal.tipe;
    const keberangkatan = itemJadwal.kotaAsal;
    const tujuan = itemJadwal.kotaTujuan;
    const tanggal = itemJadwal.tanggal;
    const waktu = itemJadwal.waktu;
    return (
        <>
            <div className="max-w-6xl w-full mx-auto px-6 lg:px-4 py-2 sticky top-16 z-0 bg-base-100 border-1 border-base-100">
                <div className="bg-primary text-primary-content text-center py-2 px-6 rounded-full text-sm">
                    <span>
                        <b>Selesaikan Pengisian Data Dalam Waktu: </b>
                    </span>
                    <span className="block md:inline">
                        <b>4 Menit 29 Detik</b>
                    </span>
                </div>
            </div>
            <div className="max-w-6xl w-full mx-auto px-6 mb-4 mt-8 lg:px-4">
                <p className="text-xl mb-4 capitalize">
                    {tipe === 0
                        ? "Economic Class"
                        : tipe === 1
                        ? "Executive Star"
                        : "Not Found"}{" "}
                    | {keberangkatan} - {tujuan}
                </p>
                <div>
                    <span>
                        {dateInterpreter(new Date(tanggal))}, {waktu} WIB
                    </span>
                    <span className="lg:ml-8 block lg:inline">
                        {jumTiket} Orang
                    </span>
                </div>
            </div>
        </>
    );
};

export default LaiSectionFormBar;
