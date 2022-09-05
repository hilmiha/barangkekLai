import { createContext, useState } from "react";

export const LaiCekJadwalContext = createContext();

export const LaiCekJadwalProvider = (props) => {
    const sekarang = new Date();

    const [kotaAsal_Temp, setKotaAsal_Temp] = useState("");
    const [kotaTujuan_Temp, setKotaTujuan_Temp] = useState("");
    const [tanggal_Temp, setTanggal_Temp] = useState(sekarang);
    const [jumTiket_Temp, setJumTiket_Temp] = useState(1);

    const isInputInvalid = () => {
        let invalidInput = [];

        if (kotaAsal_Temp.trim() === "" || kotaAsal_Temp === undefined) {
            invalidInput.push("kotaAsal");
        }

        if (kotaTujuan_Temp.trim() === "" || kotaTujuan_Temp === undefined) {
            invalidInput.push("kotaTujuan");
        }

        if (!(tanggal_Temp instanceof Date)) {
            invalidInput.push("tanggal");
        }

        if (!(0 < jumTiket_Temp < 4)) {
            invalidInput.push("jumPenumpang");
        }

        return invalidInput;
    };

    return (
        <>
            <LaiCekJadwalContext.Provider
                value={{
                    kotaAsal_Temp,
                    setKotaAsal_Temp,
                    kotaTujuan_Temp,
                    setKotaTujuan_Temp,
                    tanggal_Temp,
                    setTanggal_Temp,
                    jumTiket_Temp,
                    setJumTiket_Temp,
                    isInputInvalid,
                }}
            >
                {props.children}
            </LaiCekJadwalContext.Provider>
        </>
    );
};
