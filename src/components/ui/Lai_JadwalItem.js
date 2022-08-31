import dotify from "../../untils/dotify";

const Lai_JadwalItem = ({ props }) => {
    return (
        <div
            className={
                props.sisa > 0
                    ? "bg-neutral p-8 rounded-xl mb-8 border border-laiBlue"
                    : "bg-neutral-focus p-8 rounded-xl mb-8 border border-laiBlue text-gray-400"
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="mb-4 lg:mb-0">
                    <p className="mb-4 capitalize">
                        <b>
                            {props.tipe} | {props.keberangkatan} -{" "}
                            {props.tujuan}
                        </b>
                    </p>
                    <p>Sisa {props.sisa} Kursi</p>
                </div>
                <div className="mb-8 md:mb-0">
                    <p className="md:text-end">
                        Keberangkatan Pukul <b>{props.pukul} WIB</b>
                    </p>
                </div>
                <div className="flex md:justify-end col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="w-full md:w-auto">
                        <p className="mb-4">
                            <b>Rp {dotify(props.harga)}</b>
                        </p>
                        {props.sisa > 0 ? (
                            <button className="btn btn-primary w-full md:w-60 rounded-full capitalize">
                                Pesan Tiket
                            </button>
                        ) : (
                            <p>Fully Booked</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lai_JadwalItem;
