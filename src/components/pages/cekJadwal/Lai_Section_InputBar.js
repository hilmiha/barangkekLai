import { useState, useContext } from "react";
import LaiCekJadwal from "../../ui/Lai_CekJadwal";
import { LaiCekJadwalContext } from "../../../context/LaiCekJadwalContext";
import { dateInterpreter } from "../../../untils/dateInterpreter";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

const LaiSectionInputBar = () => {
    const { kotaAsal, kotaTujuan, tanggal, jumPenumpang } =
        useContext(LaiCekJadwalContext);

    const [open, setOpen] = useState(false);

    const handleOpenSrcBar = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={open ? "block mt-16" : "hidden mt-16"}>
                <LaiCekJadwal />
            </div>

            <div className="max-w-6xl w-full mx-auto mt-16 px-6 lg:px-4">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <p className="text-xl mb-4 capitalize">
                            {kotaAsal} - {kotaTujuan}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:w-4/5 lg:w-7/12">
                            <span>{dateInterpreter(tanggal)}</span>
                            <span>{jumPenumpang} Orang</span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="btn btn-outline btn-base-100 rounded-full capitalize px-8 fill-base-content hover:fill-base-100"
                            onClick={handleOpenSrcBar}
                        >
                            {!open ? (
                                <span className="hidden md:inline">
                                    Ubah Pencarian
                                </span>
                            ) : (
                                <EditIcon className="w-5 fill-inherit hidden md:inline" />
                            )}

                            <EditIcon className="w-5 fill-inherit md:hidden" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LaiSectionInputBar;
