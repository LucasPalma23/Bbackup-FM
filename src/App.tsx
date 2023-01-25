import { Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from './pages/About';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/catalogo' element={<Products />}></Route>
        <Route path='/sobre' element={<About />}></Route>
      </Routes>
    </>
  )
}