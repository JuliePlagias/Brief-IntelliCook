import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Components
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Favorites from './pages/Favorites'
import FicheProduit from './component/FicheProduit'
//styles
import './styles/main.scss'
//JSON
import recettes from './data/recipes.json'
import Conditions from './pages/Conditions'
import Footer from './component/home/Footer'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='catalogue' element={<Catalogue />} />
            <Route path='favoris' element={<Favorites />} />
            <Route path='conditions' element={<Conditions />} />
            <Route
              path='recipe/:id'
              element={<FicheProduit recipes={recettes.recipes} />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}
