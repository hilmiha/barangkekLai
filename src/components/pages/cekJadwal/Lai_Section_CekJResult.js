import Lai_JadwalItem from "../../ui/Lai_JadwalItem";

const mockData = [
    {
        id: "pdgpku837103",
        tipe: "Executive Star",
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        pukul: "08.00",
        tanggal: "2022/08/31",
        sisa: 1,
        harga: 185000,
    },
    {
        id: "pdgpku837291",
        tipe: "Economy Class",
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        pukul: "08.00",
        tanggal: "2022/08/31",
        sisa: 2,
        harga: 140000,
    },
    {
        id: "pdgpku812403",
        tipe: "Economy Class",
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        pukul: "14.00",
        tanggal: "2022/08/31",
        sisa: 3,
        harga: 140000,
    },
    {
        id: "pdgpku833913",
        tipe: "Executive Star",
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        pukul: "20.00",
        tanggal: "2022/08/31",
        sisa: 1,
        harga: 185000,
    },
    {
        id: "pdgpku243913",
        tipe: "Executive Star",
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        pukul: "14.00",
        tanggal: "2022/08/31",
        sisa: 0,
        harga: 185000,
    },
    {
        id: "pdgpku813991",
        tipe: "Economy Class",
        keberangkatan: "padang",
        tujuan: "pekanbaru",
        pukul: "20.00",
        tanggal: "2022/08/31",
        sisa: 0,
        harga: 140000,
    },
];

const LaiSectionCekJResult = () => {
    return (
        <div className="max-w-6xl w-full mx-auto mt-16 mb-12 px-6 lg:px-4">
            {mockData.map((props) => (
                <Lai_JadwalItem props={props} key={props.id} />
            ))}
        </div>
    );
};

export default LaiSectionCekJResult;
