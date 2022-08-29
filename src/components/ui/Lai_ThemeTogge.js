import { useContext } from "react";
import { AppThemeContext } from "../../context/AppThemeContext";

import { ReactComponent as DarkmodeIcon } from "../../assets/icons/moon_icon.svg";
import { ReactComponent as LightmodeIcon } from "../../assets/icons/sun_icon.svg";

const LaiThemeToggle = () => {
    const { theme, changeTheme } = useContext(AppThemeContext);

    const handleToggled = () => {
        changeTheme();
    };

    return (
        <button
            // className="btn bg-laiDarkBlue hover:bg-laiDarkBlue border-none"
            // className="btn bg-gray-100 hover:bg-gray-100 border-none"
            className={
                theme === "dark"
                    ? "btn bg-laiDarkBlue hover:bg-laiDarkBlue active:bg-white border-none rounded-full p-3"
                    : "btn bg-gray-100 hover:bg-gray-100 active:bg-laiBlue border-none rounded-full p-3"
            }
            onClick={handleToggled}
        >
            {theme === "dark" ? (
                <DarkmodeIcon
                    className="fill-white active:fill-laiDarkBlue"
                    style={{ width: "23px" }}
                />
            ) : (
                <LightmodeIcon
                    className="fill-laiDarkBlue active:fill-white"
                    style={{ width: "23px" }}
                />
            )}
        </button>
    );
};

export default LaiThemeToggle;
