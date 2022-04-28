const Item = ({ producto }) => {
    return (
        <article className="card">
            <h3>{producto.nombre}</h3>
            <p>Precio : ${producto.precio}</p>
            <img src="https://via.placeholder.com/300x300" alt="card"/>
            <p>Categorias : {producto.cateorias.map(categoria =>{
                return <span>{categoria}</span>
            })} </p>
            <button>Detalles</button>
        </article>
    )
}

export default Item;