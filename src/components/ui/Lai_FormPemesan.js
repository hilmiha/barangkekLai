import { useContext } from "react";
import { LaiFormPesanContext } from "../../context/LaiFormPesanContext";

const LaiFormPemesan = ({ inputErrors }) => {
    // const inputErrors = ["noIdentitas", "namaPemesan", "noTelepon", "email"];
    // const inputErrors = [];
    const {
        dataPemesan,
        handleDataPemesan,
        handlePemesanIsPenumpang,
        handlePemesanNotPenumpang,
    } = useContext(LaiFormPesanContext);

    const handleChange = (e, change) => {
        handleDataPemesan(change, e.target.value);
    };

    const handleChecked = (e) => {
        if (e.target.checked) {
            handlePemesanIsPenumpang();
        } else {
            handlePemesanNotPenumpang();
        }
    };

    return (
        <div>
            <div
                className="bg-primary text-primary-content border border-laiBlue border-b-0 px-8 py-4 rounded-t-xl"
                id="formPemesan"
            >
                <p>
                    <b>Detail Pemesan</b>
                </p>
            </div>

            <div className="bg-white text-laiBlue border border-laiBlue border-t-0 p-8 rounded-b-xl">
                <div className="mb-8">
                    <span className="font-bold mb-4 block">No Identitas</span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes("noIdenPemesan")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPemesan.noIdenPemesan}
                        onChange={(e) => handleChange(e, "noIdenPemesan")}
                    />
                    {inputErrors.includes("noIdenPemesan") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Format No Identitas Tidak Sesuai
                        </span>
                    )}
                </div>

                <div className="mb-8">
                    <span className="font-bold mb-4 block">
                        Nama Pemesan
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes("namaPemesan")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPemesan.namaPemesan}
                        onChange={(e) => handleChange(e, "namaPemesan")}
                    />
                    {inputErrors.includes("namaPemesan") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Nama Pemesan Perlu Diisi
                        </span>
                    )}
                </div>

                <div className="mb-8">
                    <span className="font-bold mb-4 block">
                        Nomor Telepon
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes("noTelpPemesanNull") ||
                            inputErrors.includes("noTelpPemesanInvalid")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPemesan.noTelpPemesan}
                        onChange={(e) => handleChange(e, "noTelpPemesan")}
                    />
                    {inputErrors.includes("noTelpPemesanNull") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Nomor Telepon Perlu Diisi
                        </span>
                    )}
                    {inputErrors.includes("noTelpPemesanInvalid") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Diperlukan Nomor Telepon Yang Valid
                        </span>
                    )}
                </div>

                <div className="mb-8">
                    <span className="font-bold mb-4 block">
                        Email
                        <span className="text-error">*</span>
                    </span>
                    <input
                        type="text"
                        className={
                            inputErrors.includes("emailPemesanNull") ||
                            inputErrors.includes("emailPemesanInvalid")
                                ? "input input-error bg-white text-gray-500 font-normal w-full"
                                : "input input-primary border-gray-300 bg-white text-gray-500 font-normal w-full"
                        }
                        value={dataPemesan.emailPemesan}
                        onChange={(e) => handleChange(e, "emailPemesan")}
                    />
                    {inputErrors.includes("emailPemesanNull") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Email Perlu Diisi
                        </span>
                    )}
                    {inputErrors.includes("emailPemesanInvalid") && (
                        <span className="text-error mt-2 mb-2 lg:mb-0 block">
                            Diperlukan Alamat Email Yang Valid
                        </span>
                    )}
                </div>
                <div>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-end">
                            <span className="label-text text-laiBlue mr-4">
                                Tambah sebagai penumpang
                            </span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                onChange={handleChecked}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiFormPemesan;
