import "./App.css";
import { AppThemeProvider } from "./context/AppThemeContext";
import { LaiCekJadwalProvider } from "./context/LaiCekJadwalContext";
import BerandaPage from "./components/pages/beranda/Index";
import CekJadwalPage from "./components/pages/cekJadwal/Index";

function App() {
    return (
        <div className="App">
            <AppThemeProvider>
                <LaiCekJadwalProvider>
                    {/* <BerandaPage /> */}
                    <CekJadwalPage />
                </LaiCekJadwalProvider>
            </AppThemeProvider>
        </div>
    );
}

export default App;
