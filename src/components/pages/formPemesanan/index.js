import { useState, useContext, useEffect, useRef } from "react";
import { LaiFormPesanContext } from "../../../context/LaiFormPesanContext";
import { useLocation, Navigate } from "react-router-dom";
import LaiSectionSteps from "./Lai_Section_Steps";
import LaiSectionFormBar from "./Lai_Section_FormBar";
import LaiSectionFormPemesan from "./Lai_Section_FormPemesan";
import LaiModal from "../../ui/Lai_Modal";

const mockData = [
    {
        id: "pdgpku837103",
        tipe: 1,
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        waktu: "08.00",
        tanggal: "2022/08/31",
        harga: 185000,
        terisi: [1, 4],
    },
    {
        id: "pdgpku830001",
        tipe: 0,
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        waktu: "08.00",
        tanggal: "2022/08/31",
        harga: 140000,
        terisi: [1, 2, 3, 4, 5],
    },
    {
        id: "pdgpku812403",
        tipe: 0,
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        waktu: "14.00",
        tanggal: "2022/08/31",
        harga: 140000,
        terisi: [1, 5, 6, 7],
    },
    {
        id: "pdgpku833913",
        tipe: 1,
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        waktu: "20.00",
        tanggal: "2022/08/31",
        harga: 185000,
        terisi: [1, 4, 5, 7],
    },
    {
        id: "pdgpku243913",
        tipe: 1,
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        waktu: "14.00",
        tanggal: "2022/08/31",
        harga: 185000,
        terisi: [1, 2, 4, 5, 7],
    },
    {
        id: "pdgpku813991",
        tipe: 0,
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        waktu: "20.00",
        tanggal: "2022/08/31",
        harga: 140000,
        terisi: [1, 2, 3, 4, 5, 6, 7],
    },
];

const FormPemesanan = () => {
    const location = useLocation();
    const LaiFormContext = useRef(useContext(LaiFormPesanContext));
    const [nullItem, setNullItem] = useState(false);

    useEffect(() => {
        const idJadawl_temp = location.state ? location.state.idJadwal : "";
        const jumTiket_temp = location.state ? location.state.jumTiket : 0;

        const itemJadwal = mockData.filter((itm) => itm.id === idJadawl_temp);
        if (itemJadwal.length === 1) {
            if (
                !LaiFormContext.current.setContext(itemJadwal[0], jumTiket_temp)
            ) {
                setNullItem(true);
            }
        } else {
            setNullItem(true);
        }
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
