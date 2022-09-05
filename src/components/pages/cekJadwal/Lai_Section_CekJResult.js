import { useState, useEffect } from "react";
import LaiJadwalItem from "../../ui/Lai_JadwalItem";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { dateInterpreter_forQuery } from "../../../untils/dateInterpreter";

const LaiSectionCekJResult = () => {
    const [dataJadwal, setDataJadwal] = useState([]);
    const location = useLocation();

    useEffect(() => {
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
            setDataJadwal(dtJadwal);
        });
    }, [location]);

    return (
        <div className="max-w-6xl w-full mx-auto mt-16 mb-12 px-6 lg:px-4">
            {dataJadwal.map((props) => (
                <LaiJadwalItem props={props} key={props.id} />
            ))}
        </div>
    );
};

export default LaiSectionCekJResult;
