import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Components
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Favorites from './pages/Favorites'
import FicheProduit from './component/FicheProduit'
import Footer from './component/home/Footer'
import Error from './pages/Error'
//styles
import './styles/main.scss'
import 'react-tooltip/dist/react-tooltip.css'
//JSON
import recettes from './data/recipes.json'
import Conditions from './pages/Conditions'
import { useContext } from 'react'
import { DarkModeContext } from './component/DarkModeProvider'

export default function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`app-container ${darkMode && 'dark-theme'}`}>
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='catalogue' element={<Catalogue />} />
              <Route path='favoris' element={<Favorites />} />
              <Route path='conditions' element={<Conditions />} />
              <Route
                path='recipe/:name'
                element={<FicheProduit recipes={recettes.recipes} />}
              />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
