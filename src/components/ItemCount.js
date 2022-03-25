 import { useState } from "react"


  const ItemCount = (props) => {

      let [estado, setEstado] = useState(0)
      
      const handleSumar = () => {
          if(estado<props.stock){
              setEstado(estado+1)}
          }

      const handleRestar = () => {
          if(estado>1)
          setEstado(estado-1)}

      const handleAdd = () => {
          props.onAdd(estado)
      }

    
      return(<>
          <p>{estado}</p>
          <button  onClick={handleSumar}>+</button>
          <button  onClick={handleRestar}>-</button>
          <button  onClick={handleAdd}>Agregar al carrito</button>
          </>
      );
  }
    

  export default ItemCount