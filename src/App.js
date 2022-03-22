import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Main from "./components/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom"


const App = () => {
  return(
    <BrowserRouter>
      <Main/>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </BrowserRouter>
    
  )
}

export default App;
