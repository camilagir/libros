const Item = ({description, precio, stock, title,}) =>{
    return(
        <div class="cardUno">
            <div class="cardDos">
                <h2>{title}</h2>
                <h3>{precio}</h3>
                <p>{description}</p>
                <p>{stock}</p>
            </div>
        </div>
    )
}


export default Item