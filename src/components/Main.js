import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route, } from "react-router-dom"
import { Container } from "react-bootstrap";


const Main = () => {
  return(
      <Container>
      <Routes>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </Container>
    

  )
}

export default Main;