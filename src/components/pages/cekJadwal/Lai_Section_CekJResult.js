import { useState, useEffect } from "react";
import Lai_JadwalItem from "../../ui/Lai_JadwalItem";

const datas = [
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

const LaiSectionCekJResult = () => {
    const [mockData, setMockData] = useState([]);

    useEffect(() => {
        setMockData(datas);
    }, []);

    return (
        <div className="max-w-6xl w-full mx-auto mt-16 mb-12 px-6 lg:px-4">
            {mockData.map((props) => (
                <Lai_JadwalItem props={props} key={props.id} />
            ))}
        </div>
    );
};

export default LaiSectionCekJResult;
