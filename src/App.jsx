import Home from './pages/Home'
import './styles/main.css'
import Navbar from './component/navbar/Navbar'
import Catalogue from './pages/Catalogue'
import Favorites from './pages/Favorites'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='catalogue' element={<Catalogue />} />
            <Route path='favoris' element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
