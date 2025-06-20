import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LateralNav from "./components/menu-lateral";
import PautasPage from "./pages/Pautas";
import SessaoPage from "./pages/Sessao";

function App() {
  return (
    <div className="flex h-screen">
      <LateralNav />

      <div className="flex-1 overflow-y-auto w-full mr-[29px] ml-[29px] mt-16px">
        <BrowserRouter>
          <Routes>
            <Route path="/pautas" element={<PautasPage />} />
            <Route path="/sessoes" element={<SessaoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
