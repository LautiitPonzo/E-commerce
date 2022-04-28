const Item = ({ producto }) => {
    return (
        <article className="card">
            <h3>{producto.nombre}</h3>
            <p>Precio : ${producto.precio}</p>
            <p>Categorias : {producto.cateorias.map(categoria =>{
                return <span>{categoria}</span>
            })} </p>
            <button>Detalles</button>
        </article>
    )
}

export default Item;