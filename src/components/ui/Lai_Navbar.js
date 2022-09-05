import LaiThemeToggle from "./Lai_ThemeTogge";
import { ReactComponent as MenuhamburgerIcon } from "../../assets/icons/menuhamburger_icon.svg";
import logo from "../../assets/logo_sm.png";

const LaiNavbar = (props) => {
    return (
        <>
            <div className="drawer">
                <input
                    id="drawer-navbar"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col" id="page">
                    <div className="w-full navbar bg-base-100 p-5 sticky top-0 z-10">
                        <div className="max-w-6xl w-full mx-auto px-0 lg:px-4">
                            <div className="flex-none lg:hidden mr-5">
                                <label
                                    htmlFor="drawer-navbar"
                                    className="btn btn-square btn-ghost"
                                >
                                    <MenuhamburgerIcon className="fill-laiDarkAccent w-5" />
                                </label>
                            </div>

                            <div className="flex-1">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    style={{ height: "48px" }}
                                />
                            </div>
                            <div className="flex-none hidden lg:block">
                                <div className="flex items-center">
                                    <div>
                                        <a
                                            href="/#"
                                            className="font-bold text-primary mx-5"
                                        >
                                            Cara Memesan
                                        </a>
                                        <a
                                            href="/#"
                                            className="font-bold text-primary mx-5"
                                        >
                                            Cabang
                                        </a>
                                        <a
                                            href="/#"
                                            className="font-bold text-primary mx-5"
                                        >
                                            Rute Perjalanan
                                        </a>
                                        <a
                                            href="/#"
                                            className="font-bold text-primary mx-5"
                                        >
                                            Tentang Kami
                                        </a>
                                        <button className="capitalize btn btn-outline btn-primary rounded-full px-10 ml-5">
                                            Cek Tiket
                                        </button>
                                    </div>

                                    <div className="divider divider-horizontal"></div>
                                    <div>
                                        <LaiThemeToggle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {props.children}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="drawer-navbar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <div className="mb-12 mx-4">
                            <LaiThemeToggle />
                        </div>
                        <li>
                            <a href="/#" className="font-bold text-primary">
                                Cara Memesan
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="font-bold text-primary">
                                Cabang
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="font-bold text-primary">
                                Rute Perjalanan
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="font-bold text-primary">
                                Tentang Kami
                            </a>
                        </li>
                        <button className="capitalize btn btn-outline btn-primary rounded-full px-10 mt-5 mx-4">
                            Cek Tiket
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LaiNavbar;
