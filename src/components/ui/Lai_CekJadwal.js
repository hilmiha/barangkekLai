import { useContext } from "react";
import { LaiCekJadwalContext } from "../../context/LaiCekJadwalContext";
import LaiCalendar from "./Lai_Calendar";

import { dateInterpreter_sm } from "../../untils/dateInterpreter";

import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";

const LaiCekJadwal = () => {
    const {
        setKotaAsal,
        setKotaTujuan,
        setTanggal,
        setJumPenumpang,
        kotaAsal_Temp,
        setKotaAsal_Temp,
        kotaTujuan_Temp,
        setKotaTujuan_Temp,
        tanggal_Temp,
        jumPenumpang_Temp,
        setJumPenumpang_Temp,
    } = useContext(LaiCekJadwalContext);

    const handleKeberangkatan = (e) => {
        let value = e.target.value;
        setKotaTujuan_Temp("");
        setKotaAsal_Temp(value);
    };

    const handleTujuan = (e) => {
        let value = e.target.value;
        setKotaTujuan_Temp(value);
    };

    const handleJumPenumpang = (e) => {
        let value = e.target.value;
        setJumPenumpang_Temp(value);
    };

    const handleCekJadwal = () => {
        setKotaAsal(kotaAsal_Temp);
        setKotaTujuan(kotaTujuan_Temp);
        setTanggal(tanggal_Temp);
        setJumPenumpang(jumPenumpang_Temp);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl w-full mx-auto px-6 lg:px-4">
            <div className="form-control w-full">
                <span className="font-bold mb-4">Kota Keberangkatan</span>
                <select
                    className="select select-bordered select-primary border-gray-300 bg-white text-gray-500 font-normal"
                    onChange={handleKeberangkatan}
                    value={kotaAsal_Temp}
                >
                    <option disabled value="" className="text-gray-500">
                        Pilih Kota
                    </option>
                    <option value="pekanbaru" className="text-laiBlue text-lg">
                        Pekanbaru
                    </option>
                    <option
                        value="bukittinggi"
                        className="text-laiBlue text-lg"
                    >
                        Bukittinggi
                    </option>
                    <option value="padang" className="text-laiBlue text-lg">
                        Padang
                    </option>
                </select>
            </div>
            <div className="form-control w-full">
                <span className="font-bold mb-4">Kota Tujuan</span>
                <select
                    className="select select-bordered select-primary border-gray-300 bg-white text-gray-500 font-normal"
                    value={kotaTujuan_Temp}
                    onChange={handleTujuan}
                >
                    <option disabled value="" className="text-gray-500">
                        Pilih Kota
                    </option>
                    {kotaAsal_Temp === "pekanbaru" ? (
                        <>
                            <option
                                value="bukittinggi"
                                className="text-laiBlue text-lg"
                            >
                                Bukittinggi
                            </option>
                            <option
                                value="padang"
                                className="text-laiBlue text-lg"
                            >
                                Padang
                            </option>
                        </>
                    ) : kotaAsal_Temp !== "" &&
                      kotaAsal_Temp !== "pekanbaru" ? (
                        <>
                            <option
                                value="pekanbaru"
                                className="text-laiBlue text-lg"
                            >
                                Pekanbaru
                            </option>
                        </>
                    ) : null}
                </select>
            </div>
            <div className="form-control w-full">
                <span className="font-bold mb-4">Tanggal Keberangkatan</span>
                <div className="flex">
                    <input
                        type="text"
                        className="input input-bordered input-primary border-gray-300 border-r-0 w-full bg-white text-gray-500 font-normal rounded-r-none"
                        value={dateInterpreter_sm(tanggal_Temp)}
                        readOnly
                    />
                    <div className="dropdown dropdown-end bg-white text-gray-500 h-12 rounded-r-lg">
                        <label
                            tabIndex="0"
                            className="btn w-full h-12 rounded-l-none rounded-r-lg bg-white focus:bg-white focus:border-gray-300 hover:bg-gray-100 hover:border-gray-300 border-gray-300 focus:outline-2 focus:outline-primary capitalize text-left"
                        >
                            <CalendarIcon className="w-5 fill-black" />
                        </label>
                        <div
                            tabIndex="0"
                            className="dropdown-content shadow-lg bg-accent text-laiBlue rounded-xl mt-3 w-80"
                        >
                            <LaiCalendar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-control w-full">
                <span className="font-bold mb-4">Jumlah Penumpang</span>
                <select
                    className="select select-bordered select-primary border-gray-300 bg-white text-gray-500 font-normal"
                    value={jumPenumpang_Temp}
                    onChange={handleJumPenumpang}
                >
                    <option className="text-laiBlue text-lg" value={1}>
                        1
                    </option>
                    <option className="text-laiBlue text-lg" value={2}>
                        2
                    </option>
                    <option className="text-laiBlue text-lg" value={3}>
                        3
                    </option>
                </select>
            </div>
            <div className="flex items-end mt-8 lg:mt-0">
                <button
                    className="btn btn-primary rounded-full w-full font-bold capitalize"
                    onClick={handleCekJadwal}
                >
                    Cek Jadwal
                </button>
            </div>
        </div>
    );
};

export default LaiCekJadwal;
