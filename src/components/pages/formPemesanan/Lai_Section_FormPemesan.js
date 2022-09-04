import LaiFormPemesan from "../../ui/Lai_FormPemesan";
import LaiFormPilihKursi from "../../ui/Lai_FormPilihKursi";
import LaiFormPenumpang from "../../ui/Lai_FormPenumpang";
import { useState, useContext } from "react";
import { LaiFormPesanContext } from "../../../context/LaiFormPesanContext";
import scrollToTargetAdjusted from "../../../untils/scrollToTarget";

const LaiSectionFormPemesan = () => {
    const { handlePemesanFormValidation, handlePenumpangFormValidation } =
        useContext(LaiFormPesanContext);

    const [inputErrors, setInputErrors] = useState([]);

    const handleNext = () => {
        // setInputErrors(handlePemesanFormValidation());
        const errorInputsPemesan = handlePemesanFormValidation();
        const errorInputsPembeli = handlePenumpangFormValidation();
        setInputErrors(errorInputsPemesan.concat(errorInputsPembeli));

        if (errorInputsPemesan.length > 0) {
            const element = document.getElementById("formPemesan");
            scrollToTargetAdjusted(element, 145);
        } else if (errorInputsPembeli.length > 0) {
            const toPenumpang = errorInputsPembeli[0][0];
            const element = document.getElementById(
                "formPenumpang_" + toPenumpang
            );
            scrollToTargetAdjusted(element, 145);
        }
    };
    return (
        <div className="max-w-6xl w-full mx-auto px-6 mt-8 lg:px-4 mb-32 lg:mb-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LaiFormPemesan inputErrors={inputErrors} />
                <LaiFormPilihKursi />
            </div>
            <LaiFormPenumpang inputErrors={inputErrors} />
            <div className="flex mt-8">
                <div className="form-control">
                    <label className="label cursor-pointer justify-end">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-base-100"
                        />
                        <span className="label-text text-base-content ml-4">
                            Tambah sebagai penumpang
                        </span>
                    </label>
                </div>
            </div>
            <button
                className="btn btn-primary capitalize px-10 rounded-full mt-4"
                onClick={handleNext}
            >
                Lanjut Ke Pembayaran
            </button>
        </div>
    );
};

export default LaiSectionFormPemesan;
