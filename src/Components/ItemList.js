import ItemCount from "./ItemCount"

const ItemList = ({productos}) => {

  return (
    <section className="card-container">
      {productos.map(producto=>{
        return(
          <ItemCount key={producto.id} producto={producto}/>
        )
      })}
    </section>
  )
}

export default ItemList