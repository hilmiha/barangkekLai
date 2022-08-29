import { useContext } from "react";
import { AppThemeContext } from "../../context/AppThemeContext";
import LaiNavbar from "../ui/Lai_Navbar";

const BerandaPage = () => {
    const { theme, changeTheme } = useContext(AppThemeContext);
    return (
        <LaiNavbar>
            <div className="max-w-6xl w-full mx-auto flex mt-24">
                <div className="w-1/2">
                    <div className="h-full flex items-center">
                        <div className="mr-32">
                            <div>
                                <span className="text-5xl font-bold">
                                    Sahabat Perjalanan Anda.
                                </span>
                            </div>
                            <div className="mt-8">
                                <span className="text-base">
                                    Komitmen kami adalah kenyamanan dan keamanan
                                    anda saat berpergian bersama{" "}
                                    <b>BarangkekLai</b>.
                                </span>
                            </div>
                            <div className="mt-8">
                                <span className="text-base">
                                    Mulai perjalanan mu disi!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-center">
                        <img
                            src={
                                theme === "dark"
                                    ? "/assets/picture/promo_1_dark.png"
                                    : "/assets/picture/promo_1_light.png"
                            }
                            alt=""
                            className="w-96"
                        />
                    </div>
                </div>
            </div>
        </LaiNavbar>
    );
};

export default BerandaPage;
