import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/sobre";
import Curriculo from "./pages/curriculo";
import Projetos from './pages/projetos/index';
import Menu from "./components/menu";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
