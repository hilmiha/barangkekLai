import { useContext } from "react";
import { AppThemeContext } from "../../../context/AppThemeContext";

const LaiSectionTop = () => {
    const theme = useContext(AppThemeContext).theme;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full mx-auto mt-10 lg:mt-24 mb-20 md:mb-32 lg:mb-40 px-6 lg:px-4">
            <div className="flex flex-col justify-center mr-0 md:mr-20 lg:mr-32">
                <div>
                    <p className="text-3xl lg:text-5xl font-bold text-center md:text-left">
                        Sahabat Perjalanan Anda.
                    </p>
                </div>
                <div className="mt-8">
                    <p className="text-base text-center md:text-left">
                        Komitmen kami adalah kenyamanan dan keamanan anda saat
                        berpergian bersama <b>BarangkekLai</b>.
                    </p>
                </div>
                <div className="mt-8">
                    <p className="text-base text-center md:text-left">
                        Mulai perjalanan mu disi!
                    </p>
                </div>
            </div>
            <div className="flex justify-center order-first mb-8 md:mb-0 md:order-last">
                <img
                    src={
                        theme === "dark"
                            ? "/assets/picture/beranda_1_dark.png"
                            : "/assets/picture/beranda_1_light.png"
                    }
                    alt=""
                    className="w-96"
                />
            </div>
        </div>
    );
};

export default LaiSectionTop;
