import { useState } from "react";
import { useLocation } from "react-router-dom";

import LaiCekJadwal from "../../ui/Lai_CekJadwal";
import { dateInterpreter } from "../../../untils/dateInterpreter";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

const LaiSectionInputBar = () => {
    const location = useLocation();

    const kotaAsal = location.state.kotaAsal;
    const kotaTujuan = location.state.kotaTujuan;
    const jumPenumpang = location.state.jumPenumpang;
    const tanggal = location.state.tanggal;

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
                        <div>
                            <span>{dateInterpreter(tanggal)}</span>
                            <span className="lg:ml-8 block lg:inline">
                                {jumPenumpang} Orang
                            </span>
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
