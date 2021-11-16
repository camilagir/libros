import Item from "../item.js/item"

const ItemList = ({products}) =>{
    console.log('productos en ItemList', products)
    return(
        <div>
        {products.map(product => {
            return(
                <Item
                key={product.id}
                title = {product.title}
                description = {product.description}
                precio = {product.precio}
                image = {product.image}
                stock = {product.stock}
            />   
            ) 
        })}
        </div>
    )
}

export default ItemList