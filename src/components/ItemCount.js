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

    
      return(<div className="divCounter">
          <p className="counter">{estado}</p>
          <button className="button" onClick={handleSumar}>+</button>
          <button className="button" onClick={handleRestar}>-</button>
          <button className="button" onClick={handleAdd}>AGREGAR AL CARRITO</button>
          </div>
      );
  }
    

  export default ItemCount