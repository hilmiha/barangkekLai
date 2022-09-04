import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./untils/scrollToTop";
import BerandaPage from "./components/pages/beranda/Index";
import CekJadwalPage from "./components/pages/cekJadwal/Index";
import FormPemesanan from "./components/pages/formPemesanan";
import LaiMainLayout from "./components/ui/Lai_MainLayout";

import { LaiFormPesanProvider } from "./context/LaiFormPesanContext";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<LaiMainLayout />}>
                            <Route index element={<BerandaPage />} />
                            <Route
                                path="/cekjadwal"
                                element={<CekJadwalPage />}
                            />
                            <Route
                                path="/pesan"
                                element={
                                    <LaiFormPesanProvider>
                                        <FormPemesanan />
                                    </LaiFormPesanProvider>
                                }
                            />
                        </Route>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
}

export default App;
