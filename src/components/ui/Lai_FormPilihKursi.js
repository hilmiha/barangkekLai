import { useContext } from "react";
import { LaiFormPesanContext } from "../../context/LaiFormPesanContext";
import LaiSeatPicker from "./Lai_SeatPicker";

const LaiFormPilihKursi = () => {
    const { seatPick, jumTiket } = useContext(LaiFormPesanContext);
    return (
        <div>
            <div className="bg-primary text-primary-content border border-laiBlue border-b-0 px-8 py-4 rounded-t-xl">
                <p>
                    <b>Tempat Duduk</b>
                </p>
            </div>
            <div className="bg-white text-laiBlue border border-laiBlue border-t-0 p-8 rounded-b-xl">
                <p>
                    Jumlah kursi yang perlu anda pilih:{" "}
                    {jumTiket - seatPick.length}
                </p>
                <div className="mt-8">
                    <LaiSeatPicker />
                </div>
            </div>
        </div>
    );
};

export default LaiFormPilihKursi;
