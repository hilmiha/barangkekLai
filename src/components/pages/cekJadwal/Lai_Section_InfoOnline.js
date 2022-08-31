import { useContext } from "react";
import { AppThemeContext } from "../../../context/AppThemeContext";

const LaiSectionInfoOnline = () => {
    const theme = useContext(AppThemeContext).theme;
    return (
        <div
            className={
                theme === "dark"
                    ? "bg-laiDarkBlue text-white"
                    : "bg-gray-100 text-laiBlue"
            }
        >
            <div className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-colls-1 lg:grid-cols-5">
                <div className="grid grid-cols-2 col-span-3">
                    <div className="flex flex-col justify-center col-span-2 md:col-span-1 mb-8 md:mb-16 lg:mb-0">
                        <div>
                            <p className="text-xl font-bold text-center md:text-left">
                                Pesan Tiket Travel{" "}
                                <span className="text-laiGold">
                                    Padang - Pekanbaru
                                </span>{" "}
                                Kapan saja, Dimana Saja
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm text-center md:text-left">
                                Dari mencari jadwal, membeli tiket, sampai
                                melakukan pembayaran - Sekarang bisa kamu
                                lakukan dengan mudah di BarangkekLai
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img
                            src="/assets/picture/cekJadwal_padangPekanbaru.png"
                            alt=""
                            className="h-40 ml-16"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 col-span-3 lg:col-span-2 lg:pl-10">
                    <div className="bg-accent rounded-xl p-5 flex flex-col justify-between text-laiBlue border-4 border-laiGold">
                        <p className="text-xl mb-3 text-center">
                            <b>Executive Star</b>
                        </p>
                        <p className="text-sm text-center mb-2">
                            Isi Penumpang 5 Orang
                        </p>
                        <p className="text-sm text-center">Vasilitas Lengkap</p>
                    </div>
                    <div className="bg-accent rounded-xl p-5 flex flex-col justify-between text-laiBlue border-4 border-gray-300">
                        <p className="text-xl mb-3 text-center">
                            <b>Economy Class</b>
                        </p>
                        <p className="text-sm text-center mb-2">
                            Isi Penumpang 7 Orang
                        </p>
                        <p className="text-sm text-center">Vasilitas Lengkap</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiSectionInfoOnline;
