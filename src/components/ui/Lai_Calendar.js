import { useContext } from "react";
import { LaiCekJadwalContext } from "../../context/LaiCekJadwalContext";

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import "react-day-picker/dist/style.css";
import id from "date-fns/locale/id";

const LaiCalendar = () => {
    const { tanggal, setTanggal } = useContext(LaiCekJadwalContext);

    const today = new Date();
    const yesterday = new Date(today.getTime() - 86400000);

    const disabledDays = [{ from: new Date(2021), to: yesterday }];

    return (
        <DayPicker
            fromYear={2021}
            disabled={disabledDays}
            defaultMonth={new Date()}
            locale={id}
            mode="single"
            selected={tanggal}
            onSelect={setTanggal}
        />
    );
};

export default LaiCalendar;
