import { useContext } from "react";
import "../CartContent/CartContent.css";
import "./cart.css";
// import {} from 'react-router-dom'
// import { dataContext } from "../Context/DataContext";

// import CartItemCounter from "./CartItemCounter";

const Cart = () =>{
    // const { cart, setCart } = useContext(dataContext);


    function EliminarProducto(id) {
        let products = JSON.parse(localStorage.getItem('products'))

        if (products.some(p => p.id === id)) {   
            products = products.filter(product => product.id !== id)
            localStorage.setItem('products', JSON.stringify(products))
            // window.location.reload()
        }
    }

    function RestarUnaUnidad(id) {
        let products = JSON.parse(localStorage.getItem('products'))

        if (products.some(p => p.id === id)) {
            products = products.forEach(p => {
                if (p.id === id) {
                    p.quantity--;
                }
                
                if (p.quantity <= 0) {
                    EliminarProducto(id) 
                }
            });
            localStorage.setItem('products', JSON.stringify(products))
            // window.location.reload()
        }
    }


    return JSON.parse(localStorage.getItem('products')).map((product) => {
        return(
            <div className="item-properties" key={product.id}>
                <div className="cartContent" key={product.id}>
                    <img src={product.img} alt="product-card" />
                    <h3 className="name">{product.name}</h3>
                    {/* <div className="cantidad"><CartItemCounter product={product} /></div> */}
                    <h4 className="price">{product.price * product.quantity}$</h4>
                    {/* <h3 className="cart-delete-button" onClick={() => eliminarProducto(product.id)}>❌</h3> */}
                    <button onClick={() => EliminarProducto(product.id)}>Eliminar</button>
                    <button onClick={() => RestarUnaUnidad(product.id)}>Sacar uno</button>
                </div>
            </div>
        )
    })
};

export default Cart;