import { useContext } from "react";
import { AppThemeContext } from "../../../context/AppThemeContext";

const LaiSectionRute = () => {
    const theme = useContext(AppThemeContext).theme;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl w-full mx-auto mt-64 mb-32 lg:mb-64 px-8 lg:px-4">
            <div className="flex flex-col justify-center items-center mb-8 lg:mb-0 ">
                <img
                    src={
                        theme === "dark"
                            ? "/assets/picture/beranda_2_dark.png"
                            : "/assets/picture/beranda_2_light.png"
                    }
                    alt=""
                    className="w-96"
                />
            </div>
            <div className="flex flex-col justify-center ml-0 lg:ml-20">
                <div>
                    <p className="text-3xl lg:text-5xl font-bold text-center lg:text-right">
                        Rute Perjalan{" "}
                        <span className="text-laiGold">Riau - Sumbar</span>{" "}
                        Setiap Hari
                    </p>
                </div>
                <div className="mt-8">
                    <p className="text-base text-center lg:text-right">
                        Kami memiliki rute perjalanan pulang-pergi dari
                        Pekanbaru - Bukittinggi - Padang setiap hari di waktu
                        pagi, siang, dan malam.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-8">
                    <div className="border border-primary py-3 text-center rounded-r-full rounded-bl-full">
                        <span className="text-primary">
                            <b>Pekanbaru - Padang</b>
                        </span>
                    </div>
                    <div className="border border-primary py-3 text-center rounded-r-full rounded-bl-full">
                        <span className="text-primary">
                            <b>Padang - Pekanabru</b>
                        </span>
                    </div>
                    <div className="border border-primary py-3 text-center rounded-r-full rounded-bl-full">
                        <span className="text-primary">
                            <b>Pekanbaru - Bukittinggi</b>
                        </span>
                    </div>
                    <div className="border border-primary py-3 text-center rounded-r-full rounded-bl-full">
                        <span className="text-primary">
                            <b>Bukittinggi - Pekanbaru</b>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiSectionRute;
