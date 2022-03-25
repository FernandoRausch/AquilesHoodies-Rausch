import { useState , useEffect } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { pedidoItem } from "./Items"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    useEffect(() => {
        
        pedidoItem(id)
        .then((resultado)=>{
            setItem(resultado)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
        .finally(()=>{
            setLoading(false)
          })
          return () => {
            setItem({});
        };
    },[id])
    if(loading){
        return <h1>Cargando...</h1>
      }else{
    return(
        <>
        <ItemDetail producto={(item)} />
        </>
    )
      }
}

export default ItemDetailContainer