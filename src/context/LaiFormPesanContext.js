import { createContext, useState } from "react";

export const LaiFormPesanContext = createContext();

export const LaiFormPesanProvider = (props) => {
    const [itemJadwal, setItemJadawal] = useState({
        idJadawal: "",
        tipe: 3,
        keberangkatan: "",
        tujuan: "",
        tanggal: new Date(),
        waktu: "",
        harga: 0,
        terisi: [],
    });

    const [jumTiket, setJumTiket] = useState(0);
    const [seatPick, setSeatPick] = useState([]);

    const initSeatPick = (tipe, terisi, jum) => {
        const economy = [1, 2, 3, 4, 5, 6, 7];
        const executive = [1, 2, 4, 5, 7];
        if (tipe === 0) {
            if (jum <= economy.length - terisi.length) {
                const difrence = economy.filter((x) => !terisi.includes(x));
                setSeatPick(difrence.slice(0, jum));
                return true;
            } else {
                return false;
            }
        } else {
            if (jum <= executive.length - terisi.length) {
                const difrence = executive.filter((x) => !terisi.includes(x));
                setSeatPick(difrence.slice(0, jum));
                return true;
            } else {
                return false;
            }
        }
    };

    const handlePickSeat = (no) => {
        if (!itemJadwal.terisi.includes(no)) {
            if (seatPick.includes(no)) {
                const removed = seatPick.filter((seat) => seat !== no);
                setSeatPick(removed);
            } else {
                if (seatPick.length < jumTiket) {
                    setSeatPick([...seatPick, no]);
                } else {
                    const poped = seatPick.slice(1, seatPick.length);
                    setSeatPick([...poped, no]);
                }
            }
        }
    };

    const [dataPemesan, setDataPemesan] = useState({
        noIdenPemesan: "",
        namaPemesan: "",
        noTelpPemesan: "",
        emailPemesan: "",
    });

    const handleDataPemesan = (change, value) => {
        switch (change) {
            case "noIdenPemesan":
                setDataPemesan({ ...dataPemesan, noIdenPemesan: value });
                break;
            case "namaPemesan":
                setDataPemesan({ ...dataPemesan, namaPemesan: value });
                break;
            case "noTelpPemesan":
                setDataPemesan({ ...dataPemesan, noTelpPemesan: value });
                break;
            case "emailPemesan":
                setDataPemesan({ ...dataPemesan, emailPemesan: value });
                break;
            default:
                break;
        }
    };

    const handlePemesanFormValidation = () => {
        let invalidInput = [];

        if (
            dataPemesan.noIdenPemesan.trim() === "" ||
            dataPemesan.noIdenPemesan === undefined
        ) {
            invalidInput.push("noIdenPemesan");
        }

        if (
            dataPemesan.namaPemesan.trim() === "" ||
            dataPemesan.namaPemesan === undefined
        ) {
            invalidInput.push("namaPemesan");
        }

        if (
            dataPemesan.noTelpPemesan.trim() === "" ||
            dataPemesan.noTelpPemesan === undefined
        ) {
            invalidInput.push("noTelpPemesanNull");
        } else if (
            !/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(dataPemesan.noTelpPemesan)
        ) {
            invalidInput.push("noTelpPemesanInvalid");
        }

        if (
            dataPemesan.emailPemesan.trim() === "" ||
            dataPemesan.emailPemesan === undefined
        ) {
            invalidInput.push("emailPemesanNull");
        } else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                dataPemesan.emailPemesan
            )
        ) {
            invalidInput.push("emailPemesanInvalid");
        }

        return invalidInput;
    };

    const [dataPenumpang, setDataPenumpang] = useState([]);

    const initDataPenumpang = (jum) => {
        const index = {
            noIden: "",
            nama: "",
            noTelp: "",
            email: "",
            alamat: "",
        };

        const groupPenumpang = [];
        for (let i = 0; i < jum; i++) {
            groupPenumpang.push(index);
        }

        setDataPenumpang(groupPenumpang);
    };

    const handleDataPenumpang = (no, change, value) => {
        const newArr = dataPenumpang.map((obj, index) => {
            if (index === parseInt(no)) {
                console.log(no, change, value);
                switch (change) {
                    case "noIden":
                        return { ...obj, noIden: value };
                    case "nama":
                        return { ...obj, nama: value };
                    case "noTelp":
                        return { ...obj, noTelp: value };
                    case "email":
                        return { ...obj, email: value };
                    case "alamat":
                        return { ...obj, alamat: value };
                    default:
                        return obj;
                }
            }
            return obj;
        });

        setDataPenumpang(newArr);
    };

    const handlePenumpangFormValidation = () => {
        let invalidInput = [];

        dataPenumpang.map((penumpang, index) => {
            if (
                penumpang.noIden.trim() === "" ||
                penumpang.noIden === undefined
            ) {
                invalidInput.push(index + "_noIden");
            }

            if (penumpang.nama.trim() === "" || penumpang.nama === undefined) {
                invalidInput.push(index + "_nama");
            }

            if (
                penumpang.noTelp.trim() === "" ||
                penumpang.noTelp === undefined
            ) {
                invalidInput.push(index + "_noTelpNull");
            } else if (
                !/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(penumpang.noTelp)
            ) {
                invalidInput.push(index + "_noTelpInvalid");
            }

            if (
                penumpang.email.trim() === "" ||
                penumpang.email === undefined
            ) {
                invalidInput.push(index + "_emailNull");
            } else if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    penumpang.email
                )
            ) {
                invalidInput.push(index + "_emailInvalid");
            }

            if (
                penumpang.alamat.trim() === "" ||
                penumpang.alamat === undefined
            ) {
                invalidInput.push(index + "_alamat");
            }

            return penumpang;
        });

        return invalidInput;
    };

    const handlePemesanIsPenumpang = () => {
        const newArr = dataPenumpang.map((obj, index) => {
            if (index === 0) {
                const obj = {
                    noIden: dataPemesan.noIdenPemesan,
                    nama: dataPemesan.namaPemesan,
                    noTelp: dataPemesan.noTelpPemesan,
                    email: dataPemesan.emailPemesan,
                    alamat: "",
                };
                return obj;
            }
            return obj;
        });
        setDataPenumpang(newArr);
    };

    const handlePemesanNotPenumpang = () => {
        const newArr = dataPenumpang.map((obj, index) => {
            if (index === 0) {
                const obj = {
                    noIden: "",
                    nama: "",
                    noTelp: "",
                    email: "",
                    alamat: "",
                };
                return obj;
            }
            return obj;
        });
        setDataPenumpang(newArr);
    };

    const setContext = (itmJadwal, jum) => {
        if (initSeatPick(itmJadwal.tipe, itmJadwal.terisi, jum)) {
            setItemJadawal(itmJadwal);
            setJumTiket(jum);
            initDataPenumpang(jum);
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <LaiFormPesanContext.Provider
                value={{
                    itemJadwal,
                    setItemJadawal,
                    jumTiket,
                    setJumTiket,
                    seatPick,
                    setSeatPick,
                    setContext,
                    handlePickSeat,
                    dataPemesan,
                    setDataPemesan,
                    handleDataPemesan,
                    handlePemesanFormValidation,
                    dataPenumpang,
                    setDataPenumpang,
                    handleDataPenumpang,
                    handlePenumpangFormValidation,
                    handlePemesanIsPenumpang,
                    handlePemesanNotPenumpang,
                }}
            >
                {props.children}
            </LaiFormPesanContext.Provider>
        </>
    );
};
