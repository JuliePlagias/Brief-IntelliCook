import Home from "./pages/Home";
import "./styles/main.css";
import Navbar from './component/home/Navbar';
import { BrowserRouter , Routes, Route} from "react-router-dom";

export default function App() {
  return (<>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>}/> 
          <Route path="catalogue" element={<h1>Catalogue</h1>}/>
          <Route path="favoris" element={<h1>Favoris</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}
