import "./Lai_Calendar.css";
import { useContext } from "react";
import { LaiCekJadwalContext } from "../../context/LaiCekJadwalContext";

import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import id from "date-fns/locale/id";

const LaiCalendar = () => {
    const { tanggal_Temp, setTanggal_Temp } = useContext(LaiCekJadwalContext);

    const today = new Date();
    const yesterday = new Date(today.getTime() - 86400000);

    const disabledDays = [{ from: new Date(2021), to: yesterday }];

    const handleSelectDate = (e) => {
        if (e === undefined) {
            setTanggal_Temp(today);
        } else {
            setTanggal_Temp(e);
        }
    };

    return (
        <DayPicker
            fromYear={2021}
            disabled={disabledDays}
            defaultMonth={new Date()}
            locale={id}
            mode="single"
            selected={tanggal_Temp}
            onSelect={handleSelectDate}
        />
    );
};

export default LaiCalendar;
