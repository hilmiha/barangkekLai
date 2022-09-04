import { useContext } from "react";
import { LaiFormPesanContext } from "../../context/LaiFormPesanContext";

const ComponentRow = ({
    no,
    dataPenumpang,
    handleDataPenumpang,
    seatPick,
    inputErrors,
}) => {
    return (
        <div className="mt-8">
            <div
                className="bg-primary text-primary-content border border-laiBlue border-b-0 px-8 py-4 rounded-t-xl"
                id={"formPenumpang_" + no}
            >
                <p>
                    <b>Detail Penumpang {no + 1}</b>
                </p>
            </div>
            <div className="bg-white text-laiBlue border border-laiBlue border-t-0 p-8 rounded-b-xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <span className="font-bold mb-4 block">No Identitas</span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes(no + "_noIden")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPenumpang[no].noIden}
                        onChange={(e) =>
                            handleDataPenumpang(no, "noIden", e.target.value)
                        }
                    />
                    {inputErrors.includes(no + "_noIden") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Format No Identitas Tidak Sesuai
                        </span>
                    )}
                </div>
                <div>
                    <span className="font-bold mb-4 block">
                        Nama
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes(no + "_nama")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPenumpang[no].nama}
                        onChange={(e) =>
                            handleDataPenumpang(no, "nama", e.target.value)
                        }
                    />
                    {inputErrors.includes(no + "_nama") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Nama Pemesan Perlu Diisi
                        </span>
                    )}
                </div>
                <div>
                    <span className="font-bold mb-4 block">
                        Nomor Telepon
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes(no + "_noTelpNull") ||
                            inputErrors.includes(no + "_noTelpInvalid")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPenumpang[no].noTelp}
                        onChange={(e) =>
                            handleDataPenumpang(no, "noTelp", e.target.value)
                        }
                    />
                    {inputErrors.includes(no + "_noTelpNull") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Nomor Telepon Perlu Diisi
                        </span>
                    )}
                    {inputErrors.includes(no + "_noTelpInvalid") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Diperlukan Nomor Telepon Yang Valid
                        </span>
                    )}
                </div>
                <div>
                    <span className="font-bold mb-4 block">
                        Email<span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes(no + "_emailNull") ||
                            inputErrors.includes(no + "_emailInvalid")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPenumpang[no].email}
                        onChange={(e) =>
                            handleDataPenumpang(no, "email", e.target.value)
                        }
                    />
                    {inputErrors.includes(no + "_emailNull") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Email Perlu Diisi
                        </span>
                    )}
                    {inputErrors.includes(no + "_emailInvalid") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Diperlukan Alamat Email Yang Valid
                        </span>
                    )}
                </div>
                <div>
                    <span className="font-bold mb-4 block">
                        Alamat Penjemputan
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes(no + "_alamat")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPenumpang[no].alamat}
                        onChange={(e) =>
                            handleDataPenumpang(no, "alamat", e.target.value)
                        }
                    />
                    {inputErrors.includes(no + "_alamat") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Alamat Penjemputan Perlu Diisi
                        </span>
                    )}
                </div>
                <div>
                    <span className="font-bold mb-4 block">
                        Kursi
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className="input input-primary border-gray-300 bg-gray-100 text-gray-500 font-normal w-full"
                        value={seatPick[no] ? seatPick[no] : "-"}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

const LaiFormPenumpang = ({ inputErrors }) => {
    const { dataPenumpang, handleDataPenumpang, jumTiket, seatPick } =
        useContext(LaiFormPesanContext);

    let rows = [];
    for (let index = 0; index < jumTiket; index++) {
        rows.push(
            <ComponentRow
                key={index}
                no={index}
                dataPenumpang={dataPenumpang}
                handleDataPenumpang={handleDataPenumpang}
                seatPick={seatPick}
                inputErrors={inputErrors}
            />
        );
    }

    return rows;
};

export default LaiFormPenumpang;
