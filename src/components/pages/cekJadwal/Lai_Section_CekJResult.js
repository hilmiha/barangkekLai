import { useState, useEffect } from "react";
import LaiJadwalItem from "../../ui/Lai_JadwalItem";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { dateInterpreter_forQuery } from "../../../untils/dateInterpreter";
import { ReactComponent as CarCalendarIcon } from "../../../assets/icons/carCalendar.svg";

const LaiSectionCekJResult = () => {
    const [dataJadwal, setDataJadwal] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const kotaAsal = location.state.kotaAsal;
        const kotaTujuan = location.state.kotaTujuan;
        const tanggal = dateInterpreter_forQuery(location.state.tanggal);
        const jumTiket = location.state.jumTiket;
        const url =
            "http://localhost:3004/jadwal?kotaAsal=" +
            kotaAsal +
            "&kotaTujuan=" +
            kotaTujuan +
            "&tanggal=" +
            tanggal +
            "&sisa_gte=" +
            jumTiket +
            "&sisa_lte=7&_sort=waktu,tipe&&_order=asc,desc";

        axios.get(url).then((res) => {
            const dtJadwal = res.data;
            setLoading(false);
            setDataJadwal(dtJadwal);
        });
    }, [location]);

    return (
        <>
            {loading === true && (
                <div className="max-w-6xl w-full mx-auto mt-16 mb-12 px-6 lg:px-4">
                    <div className="flex flex-col items-center rounded-3xl bg-neutral">
                        <progress class="progress progress-primary w-2/5 mt-48 mb-8"></progress>
                        <p className="mb-48">Memeriksa Jadwal...</p>
                    </div>
                </div>
            )}

            {dataJadwal.length !== 0 && (
                <div className="max-w-6xl w-full mx-auto mt-16 mb-12 px-6 lg:px-4">
                    {dataJadwal.map((props) => (
                        <LaiJadwalItem props={props} key={props.id} />
                    ))}
                </div>
            )}
            <div className="max-w-6xl w-full lg:w-2/4 mx-auto mt-12 mb-32 lg:mb-64 px-6 lg:px-4 flex flex-col items-center">
                {dataJadwal.length === 0 ? (
                    <>
                        <CarCalendarIcon className="fill-base-content w-40 mt-16 mb-16" />
                        <p className="text-center text-3xl mb-8">
                            <b>Tidak Ada Jadwal Tersedia.</b>
                        </p>
                        <p className="text-center">
                            silahkan lakukan pencarian kembali di hari atau rute
                            berbeda untuk mendapatkan lebih banyak keberangkatan
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text-center">
                            Anda sudah mencapai batas hasil dari pencarian,
                            silahkan lakukan pencarian kembali di hari atau rute
                            berbeda untuk mendapatkan lebih banyak keberangkatan
                        </p>
                    </>
                )}
            </div>
        </>
    );
};

export default LaiSectionCekJResult;
