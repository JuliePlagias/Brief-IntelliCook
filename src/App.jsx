import Home from './pages/Home'
import './styles/main.css'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalogue from './pages/Catalogue'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='catalogue' element={<Catalogue />} />
            <Route path='favoris' element={<h1>Favoris</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
