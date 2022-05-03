import { useNavigate } from "react-router-dom"
import { useState } from "react"

const ItemCount = ({producto}) => {
  
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const handleDecrement = () => {
    if(quantity > 1){
      setQuantity(prevCount => prevCount - 1)
    }
  }

  const handleIncrement = () => {
    if(quantity < 10){
      setQuantity(prevCount => prevCount + 1)
    }
  }

  const handleClick = () => {
    navigate(`/producto/${producto.id}`)
  }

  return (
    <article className="card">
      <h3>{producto.nombre}</h3>
      <img src="https://via.placeholder.com/300x300" alt="card"/>
      <p>Precio : ${producto.precio}</p>
      <p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
      })} </p>
      <div className="buttons">
      <button className="material-button" onClick={handleDecrement}><span class="material-symbols-outlined">remove</span></button>
      <div className="form-control">{quantity}</div>
      <button className="material-button" onClick={handleIncrement}><span class="material-symbols-outlined">add</span></button>

      </div>
    </article>
  )
}
export default ItemCount;