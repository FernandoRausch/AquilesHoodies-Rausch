import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cart from "./components/Cart";
import { CartContextProvider } from './/components/CartContext';


const App = () => {
  return(
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App;
