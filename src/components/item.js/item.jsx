import { Link } from "react-router-dom";

const Item = ({description, precio, stock, title, id}) =>{
    return(
        <Link to={`/item/${id}`}>
            <div class="cardUno">
                <div class="cardDos">
                    <h2>{title}</h2>
                    <h3>{precio}</h3>
                    <p>{description}</p>
                    <p>{stock}</p>
                </div>
            </div>
        </Link>
    );
};
export default Item;