import { createContext, useState } from "react";

export const LaiCekJadwalContext = createContext();

export const LaiCekJadwalProvider = (props) => {
    const [kotaAsal, setKotaAsal] = useState("");
    const [kotaTujuan, setKotaTujuan] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [jumPenumpang, setJumPenumpang] = useState(1);

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
                }}
            >
                {props.children}
            </LaiCekJadwalContext.Provider>
        </>
    );
};
