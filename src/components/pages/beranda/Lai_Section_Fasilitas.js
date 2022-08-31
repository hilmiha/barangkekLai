const LaiSectionFasilitas = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl w-full mx-auto mt-32 mb-32 lg:mb-64 px-6 lg:px-4">
            <div className="flex flex-col justify-center mr-0 lg:mr-20">
                <div>
                    <p className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
                        Fasilitas Kami Untuk Kenyamanan Anda
                    </p>
                </div>
                <div className="mt-8">
                    <p className="text-base text-center lg:text-left">
                        Kami memiliki rute perjalanan pulang-pergi dari
                        Pekanbaru - Bukittinggi - Padang setiap hari di waktu
                        pagi, siang, dan malam.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8 lg:mb-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-5/6 lg:w-full pt-8">
                    <div>
                        <div className="bg-accent rounded-xl px-8 md:px-16 py-8 md:py-12 flex md:flex-col items-center w-full mb-8">
                            <img
                                src="/assets/picture/beranda_fasilitas_1.png"
                                alt=""
                                className="h-14 md:h-20 md:mb-8 mr-8 md:mr-0"
                            />
                            <span className="text-laiBlue text-left md:text-center text-2xl">
                                <b>Air Conditioner</b>
                            </span>
                        </div>
                        <div className="bg-accent rounded-xl px-8 md:px-16  py-8 md:py-12 flex md:flex-col items-center w-full">
                            <img
                                src="/assets/picture/beranda_fasilitas_2.png"
                                alt=""
                                className="h-14 md:h-20 md:mb-8 mr-8 md:mr-0"
                            />
                            <span className="text-laiBlue text-left md:text-center text-2xl">
                                <b>Free Snacks {"&"} Air Mineral</b>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="bg-accent rounded-xl px-8 md:px-16  py-8 md:py-12 flex md:flex-col items-center w-full mb-8 md:mt-12">
                            <img
                                src="/assets/picture/beranda_fasilitas_3.png"
                                alt=""
                                className="h-14 md:h-20 md:mb-8 mr-8 md:mr-0"
                            />
                            <span className="text-laiBlue text-left md:text-center text-2xl">
                                <b>USB Charging Port</b>
                            </span>
                        </div>
                        <div className="bg-accent rounded-xl px-8 md:px-16  py-8 md:py-12 flex md:flex-col items-center w-full">
                            <img
                                src="/assets/picture/beranda_fasilitas_4.png"
                                alt=""
                                className="h-14 md:h-20 md:mb-8 mr-8 md:mr-0"
                            />
                            <span className="text-laiBlue text-left md:text-center text-2xl">
                                <b>Clean Pillow</b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaiSectionFasilitas;
