import { createContext, useState } from "react";

export const LaiCekJadwalContext = createContext();

export const LaiCekJadwalProvider = (props) => {
    const sekarang = new Date();

    const [kotaAsal, setKotaAsal] = useState("");
    const [kotaTujuan, setKotaTujuan] = useState("");
    const [tanggal, setTanggal] = useState(sekarang);
    const [jumPenumpang, setJumPenumpang] = useState(1);

    const [kotaAsal_Temp, setKotaAsal_Temp] = useState("");
    const [kotaTujuan_Temp, setKotaTujuan_Temp] = useState("");
    const [tanggal_Temp, setTanggal_Temp] = useState(sekarang);
    const [jumPenumpang_Temp, setJumPenumpang_Temp] = useState(1);

    return (
        <>
            <LaiCekJadwalContext.Provider
                value={{
                    kotaAsal,
                    setKotaAsal,
                    kotaTujuan,
                    setKotaTujuan,
                    tanggal,
                    setTanggal,
                    jumPenumpang,
                    setJumPenumpang,
                    kotaAsal_Temp,
                    setKotaAsal_Temp,
                    kotaTujuan_Temp,
                    setKotaTujuan_Temp,
                    tanggal_Temp,
                    setTanggal_Temp,
                    jumPenumpang_Temp,
                    setJumPenumpang_Temp,
                }}
            >
                {props.children}
            </LaiCekJadwalContext.Provider>
        </>
    );
};
