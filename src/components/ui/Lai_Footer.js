import { useContext } from "react";
import { AppThemeContext } from "../../context/AppThemeContext";

const LaiFooter = () => {
    const theme = useContext(AppThemeContext).theme;
    return (
        <div
            className={
                theme === "dark"
                    ? "bg-white text-laiBlue"
                    : "bg-laiBlue text-white"
            }
        >
            <div className="max-w-6xl w-full mx-auto py-20 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="text-center lg:text-left mb-10 md:mb-0">
                        <p className="text-2xl mb-12 text-laiGold">
                            <b>BerangkekLai</b>
                        </p>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Tentang Kami</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Layanan Kami</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Hubungi Kami</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Kantor {"&"} Cabang</b>
                            </a>
                        </div>
                    </div>
                    <div className="text-center lg:text-left mb-10 md:mb-0">
                        <p className="text-2xl mb-12">
                            <b>Pesan Tiket</b>
                        </p>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Pesan Tiket</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Cek Tiket</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Sewa Mobil</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Kirim Paket/Dokumen</b>
                            </a>
                        </div>
                    </div>
                    <div className="text-center lg:text-left mb-10 md:mb-0">
                        <p className="text-2xl mb-12">
                            <b>Ikuti Kami</b>
                        </p>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Facebook</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Cek Tiket</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Instagram</b>
                            </a>
                        </div>
                        <div className="mb-8">
                            <a href="/#">
                                <b>Twitter</b>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex justify-center lg:justify-end">
                        <img
                            src="/assets/picture/logo_sm.png"
                            alt=""
                            className="w-24 h-24"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiFooter;
