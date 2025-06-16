import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import MenuLateral from './components/menu-lateral'

function App() {

  return (
    <>
      <BrowserRouter>
            <MenuLateral />

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/associados" element={<AssociadosPage />} />
          <Route path="/pautas" element={<PautasPage />} />
          <Route path="/sessoes" element={<SessaoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
