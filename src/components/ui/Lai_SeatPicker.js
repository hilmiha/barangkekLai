import { useContext } from "react";
import { LaiFormPesanContext } from "../../context/LaiFormPesanContext";
import { ReactComponent as DriverSeatIcon } from "../../assets/icons/seatDriver_icon.svg";
import { ReactComponent as PenumpangSeatIcon } from "../../assets/icons/seatPenumpang_icon.svg";

const LaiSeatPicker = () => {
    const { itemJadwal, seatPick, handlePickSeat } =
        useContext(LaiFormPesanContext);

    const tipe = itemJadwal.tipe;
    const terisi = itemJadwal.terisi;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col items-center">
                <div className="flex mb-8">
                    <div className="text-center">
                        <PenumpangSeatIcon
                            className={
                                seatPick.includes(1)
                                    ? "w-16 fill-green-500 cursor-pointer"
                                    : terisi.includes(1)
                                    ? "w-16 fill-red-500 cursor-not-allowed"
                                    : "w-16 fill-gray-300 cursor-pointer"
                            }
                            onClick={() => handlePickSeat(1)}
                        />
                        <span>
                            <b>1</b>
                        </span>
                    </div>

                    <div className="text-center">
                        <PenumpangSeatIcon className="w-16 fill-transparent" />
                    </div>
                    <div className="text-center">
                        <DriverSeatIcon className="w-16 fill-yellow-400" />
                    </div>
                </div>

                <div className="flex mb-8">
                    <div className="text-center">
                        <PenumpangSeatIcon
                            className={
                                seatPick.includes(2)
                                    ? "w-16 fill-green-500 cursor-pointer"
                                    : terisi.includes(2)
                                    ? "w-16 fill-red-500 cursor-not-allowed"
                                    : "w-16 fill-gray-300 cursor-pointer"
                            }
                            onClick={() => handlePickSeat(2)}
                        />
                        <span>
                            <b>2</b>
                        </span>
                    </div>
                    {tipe === 0 ? (
                        <div className="text-center">
                            <PenumpangSeatIcon
                                className={
                                    seatPick.includes(3)
                                        ? "w-16 fill-green-500 cursor-pointer"
                                        : terisi.includes(3)
                                        ? "w-16 fill-red-500 cursor-not-allowed"
                                        : "w-16 fill-gray-300 cursor-pointer"
                                }
                                onClick={() => handlePickSeat(3)}
                            />
                            <span>
                                <b>3</b>
                            </span>
                        </div>
                    ) : (
                        <div className="text-center">
                            <PenumpangSeatIcon className="w-16 fill-gray-100" />
                            <span className="text-gray-100">
                                <b>3</b>
                            </span>
                        </div>
                    )}
                    <div className="text-center">
                        <PenumpangSeatIcon
                            className={
                                seatPick.includes(4)
                                    ? "w-16 fill-green-500 cursor-pointer"
                                    : terisi.includes(4)
                                    ? "w-16 fill-red-500 cursor-not-allowed"
                                    : "w-16 fill-gray-300 cursor-pointer"
                            }
                            onClick={() => handlePickSeat(4)}
                        />
                        <span>
                            <b>4</b>
                        </span>
                    </div>
                </div>

                <div className="flex mb-8">
                    <div className="text-center">
                        <PenumpangSeatIcon
                            className={
                                seatPick.includes(5)
                                    ? "w-16 fill-green-500 cursor-pointer"
                                    : terisi.includes(5)
                                    ? "w-16 fill-red-500 cursor-not-allowed"
                                    : "w-16 fill-gray-300 cursor-pointer"
                            }
                            onClick={() => handlePickSeat(5)}
                        />
                        <span>
                            <b>5</b>
                        </span>
                    </div>
                    {tipe === 0 ? (
                        <div className="text-center">
                            <PenumpangSeatIcon
                                className={
                                    seatPick.includes(6)
                                        ? "w-16 fill-green-500 cursor-pointer"
                                        : terisi.includes(6)
                                        ? "w-16 fill-red-500 cursor-not-allowed"
                                        : "w-16 fill-gray-300 cursor-pointer"
                                }
                                onClick={() => handlePickSeat(6)}
                            />
                            <span>
                                <b>6</b>
                            </span>
                        </div>
                    ) : (
                        <div className="text-center">
                            <PenumpangSeatIcon className="w-16 fill-gray-100" />
                            <span className="text-gray-100">
                                <b>6</b>
                            </span>
                        </div>
                    )}
                    <div className="text-center">
                        <PenumpangSeatIcon
                            className={
                                seatPick.includes(7)
                                    ? "w-16 fill-green-500 cursor-pointer"
                                    : terisi.includes(7)
                                    ? "w-16 fill-red-500 cursor-not-allowed"
                                    : "w-16 fill-gray-300 cursor-pointer"
                            }
                            onClick={() => handlePickSeat(7)}
                        />
                        <span>
                            <b>7</b>
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col items-center w-full pl-8">
                    <div className="w-full mb-8">
                        <span className="text-gray-500">Keterangan: </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1 w-full">
                        <div className="flex flex-col items-center mb-8">
                            <PenumpangSeatIcon className="w-10 fill-green-500" />
                            <span className="text-sm mt-2">
                                <b>Kursi Dipilih</b>
                            </span>
                        </div>
                        <div className="flex flex-col items-center mb-8">
                            <PenumpangSeatIcon className="w-10 fill-gray-300" />
                            <span className="text-sm mt-2">
                                <b>Kursi Kosong</b>
                            </span>
                        </div>
                        <div className="flex flex-col items-center mb-8">
                            <PenumpangSeatIcon className="w-10 fill-red-500" />
                            <span className="text-sm mt-2">
                                <b>Kursi Terisi</b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiSeatPicker;
