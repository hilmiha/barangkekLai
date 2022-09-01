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

    const isInputInvalid = () => {
        let invalidInput = [];

        if (kotaAsal_Temp.trim() === "" || kotaAsal === undefined) {
            invalidInput.push("kotaAsal");
        }

        if (kotaTujuan_Temp.trim() === "" || kotaTujuan_Temp === undefined) {
            invalidInput.push("kotaTujuan");
        }

        if (!(tanggal instanceof Date)) {
            invalidInput.push("tanggal");
        }

        if (!(0 < jumPenumpang < 4)) {
            invalidInput.push("jumPenumpang");
        }

        return invalidInput;
    };

    const isDefined = () => {
        if (
            kotaAsal.trim() === "" ||
            kotaAsal === undefined ||
            kotaTujuan.trim() === "" ||
            kotaTujuan === undefined ||
            !(tanggal instanceof Date) ||
            !(0 < jumPenumpang < 4)
        ) {
            return false;
        } else {
            return true;
        }
    };

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
                    isDefined,
                    isInputInvalid,
                }}
            >
                {props.children}
            </LaiCekJadwalContext.Provider>
        </>
    );
};
