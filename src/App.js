import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cart from "./components/Cart";
import { MiProvider } from './/components/CartContext';


const App = () => {
  return(
    <MiProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </MiProvider>
    
  )
}

export default App;
