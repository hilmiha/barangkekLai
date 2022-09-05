import { useState, useContext, useEffect, useRef } from "react";
import { LaiFormPesanContext } from "../../../context/LaiFormPesanContext";
import axios from "axios";
import { useLocation, Navigate } from "react-router-dom";
import LaiSectionSteps from "./Lai_Section_Steps";
import LaiSectionFormBar from "./Lai_Section_FormBar";
import LaiSectionFormPemesan from "./Lai_Section_FormPemesan";
import LaiModal from "../../ui/Lai_Modal";

const FormPemesanan = () => {
    const location = useLocation();
    const LaiFormContext = useRef(useContext(LaiFormPesanContext));
    const [nullItem, setNullItem] = useState(false);

    useEffect(() => {
        const idJadawl_temp = location.state ? location.state.idJadwal : "";
        const jumTiket_temp = location.state ? location.state.jumTiket : 0;
        const url = "http://localhost:3004/jadwal?id=" + idJadawl_temp;

        axios.get(url).then((res) => {
            const dtItemJadwal = res.data;
            if (dtItemJadwal.length === 1) {
                if (
                    !LaiFormContext.current.setContext(
                        dtItemJadwal[0],
                        jumTiket_temp
                    )
                ) {
                    setNullItem(true);
                }
            } else {
                setNullItem(true);
            }
        });
    }, [location]);

    if (location.state === null) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <LaiSectionSteps />
            <LaiSectionFormBar />
            <LaiSectionFormPemesan />
            <LaiModal
                messageHead={"Item Jadwal Sudah Tidak Tersedia"}
                messageBody={"Silahkan kembali untuk mencari jadwal lain"}
                status={nullItem}
            />
        </>
    );
};

export default FormPemesanan;
