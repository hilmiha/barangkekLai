const LaiSectionOthLayanan = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full mx-auto mt-32 mb-32 lg:mb-64 px-8 lg:px-4">
            <div className="ml-0 lg:ml-10">
                <div className="sticky top-96 z-0">
                    <div>
                        <p className="text-3xl lg:text-5xl font-bold text-center lg:text-right">
                            Layanan Lain Dari{" "}
                            <span className="text-laiGold">BerangkekLai</span>
                        </p>
                    </div>
                    <div className="mt-8">
                        <p className="text-base text-center lg:text-right">
                            Layanan-Layan dari BerangkekLai untuk keperluan
                            perjalananmu
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8 lg:mb-0 lg:order-first ">
                <div className="grid grid-cols-1 w-full">
                    <div className="bg-accent rounded-xl text-laiBlue p-10 mb-10">
                        <div className="mb-8 flex justify-center">
                            <img
                                src="/assets/picture/beranda_layanan_1.png"
                                alt=""
                                className="w-96 lg:w-full"
                            />
                        </div>
                        <p className="text-2xl mb-8">
                            <b>Ingin kirim paket atau dokumen?</b>
                        </p>
                        <p className="mb-8">
                            Tidak perlu takut lagi barang rusak atau lama
                            sampai. Sekarang BarangkekLai siap melayani
                            pengiriman paket dan dokumen.
                        </p>
                        <button className="btn btn-primary capitalize rounded-full px-10">
                            <b>Pelajari Lebih Lanjut</b>
                        </button>
                    </div>
                    <div className="bg-accent rounded-xl text-laiBlue p-10">
                        <div className="mb-8 flex justify-center">
                            <img
                                src="/assets/picture/beranda_layanan_2.png"
                                alt=""
                                className="w-96 lg:w-full"
                            />
                        </div>
                        <p className="text-2xl mb-8">
                            <b>Ingin Sewa Mobil Untuk Jalan-Jalan ?</b>
                        </p>
                        <p className="mb-8">
                            Tidak perlu bingung lagi, jalan-jalan aman dan
                            nyaman dengan layanan sewa mobil dari BarangkekLai.
                        </p>
                        <button className="btn btn-primary capitalize rounded-full px-10">
                            <b>Pelajari Lebih Lanjut</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiSectionOthLayanan;
