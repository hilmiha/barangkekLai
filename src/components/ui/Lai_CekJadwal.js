import { useContext } from "react";
import { LaiCekJadwalContext } from "../../context/LaiCekJadwalContext";

const LaiCekJadwal = () => {
    const {
        kotaAsal,
        setKotaAsal,
        kotaTujuan,
        setKotaTujuan,
        tanggal,
        setTanggal,
        jumPenumpang,
        setJumPenumpang,
    } = useContext(LaiCekJadwalContext);

    const handleKeberangkatan = (e) => {
        let value = e.target.value;
        setKotaAsal(value);
    };

    const handleTujuan = (e) => {
        let value = e.target.value;
        setKotaTujuan(value);
    };

    const handleJumPenumpang = (e) => {
        let value = e.target.value;
        setJumPenumpang(value);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl w-full mx-auto px-8 lg:px-4">
            <div className="form-control w-full">
                <span className="font-bold mb-4">Kota Keberangkatan</span>
                <select
                    className="select select-bordered bg-white text-gray-500 font-normal"
                    onChange={handleKeberangkatan}
                    value={kotaAsal}
                >
                    <option disabled value="" className="text-white">
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
                    className="select select-bordered bg-white text-gray-500 font-normal"
                    value={kotaTujuan}
                    onChange={handleTujuan}
                >
                    <option disabled value="" className="text-white">
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
                <span className="font-bold mb-4">Tanggal Keberangkatan</span>
                <input
                    type="text"
                    value={tanggal}
                    className="input input-bordered w-full bg-white text-gray-500 font-normal"
                />
            </div>
            <div className="form-control w-full">
                <span className="font-bold mb-4">Jumlah Penumpang</span>
                <select
                    className="select select-bordered bg-white text-gray-500 font-normal"
                    value={jumPenumpang}
                    onChange={handleJumPenumpang}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
            <div className="flex items-end mt-8 lg:mt-0">
                <button className="btn btn-primary rounded-full w-full font-bold capitalize ">
                    Cek Jadwal
                </button>
            </div>
        </div>
    );
};

export default LaiCekJadwal;
