import "./App.css";
import { AppThemeProvider } from "./context/AppThemeContext";

import BerandaPage from "./components/pages/Beranda";

function App() {
    return (
        <div className="App">
            <AppThemeProvider>
                <BerandaPage />
            </AppThemeProvider>
        </div>
    );
}

export default App;
